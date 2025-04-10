async function restrictToLoggedinUserOnly(req, res, next) {
    const user = req.session?.user;

    if (!user) {
        req.session.error = "Invalid login attempt.";
        return res.redirect("/login");
    }

    req.user = user;
    res.locals.user = user; // Pass user data to views
    next();
}

async function checkAuthStatus(req, res, next) {
    const user = req.session?.user || null;

    res.locals.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuthStatus,
};
