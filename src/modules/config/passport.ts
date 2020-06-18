const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../user/schema.ts');

const auth = function(passport:any) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email:string, password:string, done:any) => {
      // Match user
      User.findOne({
        email
      }).then( (user:any) => {
        if (!user) {
          return done(null, false);
        }
        // Match password
        bcrypt.compare(password, user.password, (err:any, isMatch:any) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } 
            return done(null, false)
            
        });
          return 0 ;
      });
    })
  );

  passport.serializeUser((user:any, done:any)=> {
    done(null, user.id);
  });

  passport.deserializeUser((id:any, done:any)=> {
    User.findById(id, function(err:any, user:any) {
      done(err, user);
    });
  });
};

export default auth