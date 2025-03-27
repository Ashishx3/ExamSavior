
const User = require("../models/user");
const {v4: uuidv4} = require('uuid');
const { setUser } = require('../service/auth')


async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  console.log("Login attempt for:", email);

  const user = await User.findOne({ email });

  if (!user) {
    console.log("User not found!");
    return res.render("login", { error: "Invalid Username or Password" });
  }

  if (user.password !== password) {
    console.log("Password incorrect!");
    return res.render("login", { error: "Invalid Username or Password" });
  }

  console.log("Login successful for:", email);
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);

  return res.redirect("/");
}

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Signup failed: Email already exists!");
      return res.render("signup", { error: "Email already in use! Try a different one." });
    }

    // If email is unique, create a new user
    await User.create({ name, email, password });
    
    console.log("Signup successful for:", email);
    return res.redirect("/login");  // Redirect to login after signup
  } catch (error) {
    console.error("Signup error:", error);
    return res.render("signup", { error: "Something went wrong! Please try again." });
  }
}

// async function handleUserSignup(req, res) {
//   const { name, email, password } = req.body;
//   await User.create({
//     name,
//     email,
//     password,
//   });
//   return res.redirect("/");  //login ko bhejega agar login hataya tou normal homepage
// }



module.exports = {
  handleUserSignup,
  handleUserLogin,
  
};
