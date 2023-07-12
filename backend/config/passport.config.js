const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}
const User = require('../api/models/user.model');
const passport = require('passport')

require('dotenv').config()

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;

// passport.use('jwt', new JwtStrategy(opts, (jwt_payload, done) => done(null, jwt_payload)));

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
	console.log({jwtPayload: jwtPayload});
	try {
		const user = await models.user.findOne({
			where: {
				email: jwtPayload.email,
			},
		});

		if (user) {
			return done(null, user);
		}

		return done(null, false);
	} catch (e) {
		console.log({error: e});
		done(e);
	}
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
	return done(null, getUserById(id));
});