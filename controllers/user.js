const db = require('../db');

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


module.exports = {
  handleUserLogin,
  handleUserSignup,
  findOrCreateGoogleUser,
};








