const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const pool = require('./db');
const queries = require('../src/login/queries');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pool.query(queries.getById, [id], (error, results) => {
        if (error) throw error;
        done(null, results.rows[0]);
    });
});

passport.use(
    new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            pool.query(queries.getByGoogleId, [profile.id], (error, results) => {
                if (error) throw error;
                if (results.rowCount > 0) {
                    done(null, results.rows[0]);
                } else {
                    pool.query(queries.postGoogleUser, [profile.displayName, profile.emails[0].value, profile.id], (error, results) => {
                        if (error) throw error;
                        done(null, results.rows[0]);
                    });
                }
            });
        }
    )
);
