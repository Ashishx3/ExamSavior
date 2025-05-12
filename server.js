const express = require('express');
const path = require('path');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const { Pool } = require('pg');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');



require('./config/passport'); // import passport strategy

const { checkAuthStatus, restrictToLoggedinUserOnly } = require('./middlewares/auth');

// Routes
const userRoute = require('./routes/user');
const staticRoutes = require('./routes/staticRoutes');
const ttsRoute = require('./routes/tts');
const terms = require('./routes/terms');
const privateroot = require('./routes/Team-Members')
const lastyearRoute = require('./routes/lastyear');
const miniprojectsRoute = require('./routes/miniprojects');
const privacypolicyroute = require('./routes/privacy-policy')
// DB Pool
const pgPool = new Pool({
    connectionString: process.env.DATABASE_URL, // ✅ Use POSTGRES_URI, not MONGO_URI
    ssl: { rejectUnauthorized: false }, // ✅ Required for Neon
});

const app = express();
const port = process.env.PORT || 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0 }));

// Body parsers
app.use((req, res, next) => {
    const host = req.headers.host;
    const originalUrl = req.originalUrl;
  
    // Redirect non-canonical domain (examsavior.vercel.app) to examsavior.net
    if (host === 'examsavior.vercel.app') {
      return res.redirect(301, `https://www.examsavior.net${originalUrl}`);
    }
  
    next();
  });
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Session setup
app.use(
    session({
        store: new pgSession({
            pool: pgPool,
            tableName: 'user_sessions',
        }),
        secret: process.env.SESSION_SECRET || 'defaultSecretKey',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'true', // true on Vercel
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
            sameSite: 'lax',
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
// Auth status check
app.use(checkAuthStatus);

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/mainindexpage', (req, res) => res.redirect("/"));


app.use('/user', userRoute);
app.use('/', staticRoutes);
app.use('/Team-Members', privateroot);
app.use('/terms-Of-Service', terms )
app.use('/privacy', privacypolicyroute);
app.use('/tts', restrictToLoggedinUserOnly, ttsRoute);
app.use('/lastyear', restrictToLoggedinUserOnly, lastyearRoute);
app.use('/miniprojects', restrictToLoggedinUserOnly, miniprojectsRoute);

// ✅ For local dev (not used by Vercel)
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`🚀 Server running locally at http://localhost:${port}`);
    });
}

module.exports = app;
