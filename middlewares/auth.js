
const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid){
        req.session.error = "Invalid login attempt.";
        return res.redirect("/login");}

    const user = await getUser(userUid);
    // req.session.error = "Please log in to continue.";
    if (!user){
         req.session.error = "Invalid login attempt.";
         return res.redirect("/login");
    }
    req.user = user || null,
    res.locals.user = user  || null, // Pass user data to views
    next();
}

async function checkAuthStatus(req, res, next) {
    const userUid = req.cookies?.uid;
    console.log("Cookie UID:", userUid);
    const user = userUid ? await getUser(userUid) : null;
    res.locals.user = user; // `user` will be available in views
    console.log("User from session:", user)
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuthStatus,
};