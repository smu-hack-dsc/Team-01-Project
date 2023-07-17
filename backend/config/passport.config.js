const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}
const User = require('../api/models/user.model');
const passport = require('passport')

require('dotenv').config()

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer');
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;


passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
	try {
		const user = await User.findById(jwtPayload.sub);
		if (user) {
			return done(null, user);
		}
		return done(null, false);
	} catch (e) {
		done(e);
	}
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
	return done(null, getUserById(id));
});