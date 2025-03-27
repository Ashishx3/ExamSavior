const express = require('express');
const path = require('path');
const { checkAuthStatus } = require("./middlewares/auth");

const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const staticRoutes = require('./routes/staticRoutes');
const cookieParser = require('cookie-parser'); // ✅ Correct import
const { restrictToLoggedinUserOnly } = require('./middlewares/auth');
const session = require('express-session');



const ttsRoute = require("./routes/tts"); // Uncomment if you have this file
const lastyearRoute = require("./routes/lastyear"); // Uncomment if you have this file
const miniprojectsRoute = require("./routes/miniprojects"); // Uncomment if you have this file
const { ElevenLabsClient } = require("elevenlabs");



const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(checkAuthStatus);


// ✅ Express includes body-parsing middleware (No need for `body-parser`)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

 // Import express-session
 app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultSecretKey', // ✅ Corrected
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } 
}));


fs.readdir(viewsPath, (err, files) => {
    if (err) {
      console.error("Error reading views directory:", err);
    } else {
      console.log("Files in views directory:", files);
    }
  });


// for original database when deployed 

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB (Database: userdata)");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

//for llocal use tihs 

// // ✅ Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/user", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Connected to MongoDB");
// }).catch(err => {
//     console.error("MongoDB connection error:", err);
// });

// ✅ Set view engine
app.set('view engine', 'ejs');
// ✅ Serve static files
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/mainindexpage', (req, res) => {
    res.redirect("/");
});

// ✅ Use routes
app.use("/user", userRoute);
app.use("/", staticRoutes);
app.use("/tts", restrictToLoggedinUserOnly, ttsRoute);
app.use("/lastyear", restrictToLoggedinUserOnly, lastyearRoute);
app.use("/miniprojects", restrictToLoggedinUserOnly, miniprojectsRoute);

// Pass auth status to views 




//
//  ✅ Start server


if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`🚀 Server running at http://localhost:${port}`);
    });
}
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

module.exports = app;


































































