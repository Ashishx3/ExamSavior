const db = require('../db');

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  console.log("Login attempt for:", email);

  try {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    if (!user || user.password !== password) {
      console.log("Invalid credentials!");
      return res.render("login", { error: "Invalid Username or Password" });
    }

    console.log("Login successful for:", email);
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return res.redirect("/");
  } catch (error) {
    console.error("Login error:", error);
    return res.render("login", { error: "Something went wrong. Try again." });
  }
}

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

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
