const db = require('../db');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Traditional Email/Password Login
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  console.log("Login attempt for:", email);

  try {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    // Check if the user exists and either password matches or it's a Google login
    if (!user || (user.password !== password && user.password !== 'GOOGLE_AUTH')) {
      console.log("Invalid credentials or Google account!");
      return res.render("login", { error: "Invalid Username or Password" });
    }

    console.log("Login successful for:", email);
    req.session.user = user;
    return res.redirect("/"); // Successful login redirect
  } catch (error) {
    console.error("Login error:", error);
    return res.render("login", { error: "Something went wrong. Try again." });
  }
}

// Traditional Signup
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    const existing = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.render("signup", { error: "Email already in use!" });
    }

    await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
    console.log("Signup successful for:", email);
    return res.redirect("/login");
  } catch (error) {
    console.error("Signup error:", error);
    return res.render("signup", { error: "Signup failed! Please try again." });
  }
}

async function findOrCreateGoogleUser(profile) {
  const email = profile.emails[0].value;
  const name = profile.displayName;
  const photo = profile.photos?.[0]?.value || null;
  const googleId = profile.id;

  try {
    // Check if the user already exists in the database
    let result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    let user = result.rows[0];

    if (!user) {
      // New Google user: Set a placeholder password and save user with google_id
      result = await db.query(
        `INSERT INTO users (name, email, password, photo, google_id) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, 'GOOGLE_AUTH', photo, googleId]
      );
      user = result.rows[0];
    }

    return user;
  } catch (error) {
    console.error('Google OAuth DB error:', error);
    throw error;
  }
}
async function handleForgotPassword(req, res) {
  const { email } = req.body;

  try {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    if (!user) {
      return res.render("forgot-password", { error: "No account with that email found.", message: null });
    }

    // Generate reset token
    const token = crypto.randomBytes(32).toString('hex');
    const expiry = Date.now() + 3600000; // 1 hour

    await db.query(
      'UPDATE users SET reset_token = $1, reset_token_expires = $2 WHERE email = $3',
      [token, expiry, email]
    );

    const resetLink = `${process.env.BASE_URL}/reset-password/${token}`;
    // const resetLink = `http://localhost:3000/reset-password/${token}`;


    // Send email
    const transporter = nodemailer.createTransport({ /* SMTP config here */ });
    await transporter.sendMail({
      to: email,
      subject: "Password Reset",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });

    return res.render("forgot-password", { message: "Check your email for the reset link." });
  } catch (error) {
    console.error("Forgot Password error:", error);
    return res.render("forgot-password", { message: null, error: "Something went wrong." });
  }
}
async function handleResetPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const { rows } = await db.query(
      'SELECT * FROM users WHERE reset_token = $1 AND reset_token_expires > $2',
      [token, Date.now()]
    );

    const user = rows[0];
    if (!user) {
      return res.render("reset-password", { error: "Token is invalid or expired." });
    }

    await db.query(
      'UPDATE users SET password = $1, reset_token = NULL, reset_token_expires = NULL WHERE id = $2',
      [password, user.id]
    );

    return res.redirect("/login");
  } catch (error) {
    console.error("Reset Password error:", error);
    return res.render("reset-password", { error: "Something went wrong." });
  }
}



module.exports = {
  handleUserLogin,
  handleUserSignup,
  findOrCreateGoogleUser,
  handleForgotPassword,
  handleResetPassword,
};








