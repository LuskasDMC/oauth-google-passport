import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'

import {GOOGLE_OAUTH_CREDENTIALS} from '../config/google-oauth2'

passport.use( new GoogleStrategy({
    ...GOOGLE_OAUTH_CREDENTIALS,
    callbackURL: "http://localhost:5000/authentication/google/callback"
  },
  function(_accessToken, _refreshToken, profile, cb) {
   cb(null, profile);
  }
))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

export default passport