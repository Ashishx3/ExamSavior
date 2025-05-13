const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../db'); // Make sure DB is loaded here

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails[0].value;
      const name = profile.displayName;
      const googleId = profile.id;
      const photo = profile.photos[0]?.value;

      // Check if user exists
      const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);

      if (existingUser.rows.length > 0) {
        console.log("🔁 Google login: existing user:", email);
        return done(null, existingUser.rows[0]);
      }

      // If not, create a new user
      const insertQuery = `
        INSERT INTO users (name, email, google_id, photo)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const values = [name, email, googleId, photo];
      const { rows } = await db.query(insertQuery, values);

      console.log("✅ Google login: new user created:", email);
      return done(null, rows[0]);
    } catch (err) {
      console.error("❌ Error in GoogleStrategy:", err);
      return done(err, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id); // session stores only user ID
});

passport.deserializeUser(async (id, done) => {
  const db = require('../db');
  try {
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (!rows[0]) {
      console.warn(`User with ID ${id} not found during deserialization`);
      return done(null, false); // Ends the session gracefully
    }
    return done(null, rows[0]);
  } catch (err) {
    console.error("Error in deserializeUser:", err);
    return done(err, null);
  }
});
