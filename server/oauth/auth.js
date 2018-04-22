const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
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
            callbackURL: "/api/auth/google/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
    }));

    passport.use(new GithubStrategy({
        clientID: "8f94b094f8d22f008919",
        clientSecret: "4c911c7d500b9f3fd2c49f6b6354441de1d5e1f4",
        callbackURL: "/api/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
        }
    ));
};