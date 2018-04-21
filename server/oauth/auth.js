const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "389619714376-sh33765rotjssjq4dt5tvg5bnuj1a3vk.apps.googleusercontent.com",
            clientSecret: "WruyahPqg5hbtA1D65OlYviv",
            callbackURL: "/login/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};