import express from 'express'

import passport from 'passport'
import Controller from './controllers'
import OrgOwnership from '../middleware/owner'
import org from '../models/org'



/** Create a new router instance */
const router = express.Router()

/**
 * All controllers are mapped to routes here .Here we attach controllers to routes.
 * Just like we attach all requests made to /user to userModules, now we go one step
 * further to make Controller.showProfile handle all get requests made to /user/
 */

/**
 * @description This is how we map all requests made to view a user profile. Notice that how we
 * are a watching for a get request on /user/profile
 */
router.get('/profile', Controller.showProfile)

/**
 * @description This is how we map all requests made to update a user profile. Notice that how we
 * are watching for a post request on /user/profile which would contain the new data
 * to update profile
 */
router.post('/profile', Controller.updateProfile)

/**
 * @description This is how we register a user to our system
 */
router.post('/register', Controller.registerUser)

/** Export router to be included into main application */

 // Login handle

router.get('/login',  (req, res) => {
    res.render('login.ejs')
  })

 router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect:'/userprofile',
        failureRedirect:'/login'
       })(req,res,next);
   })
  
   // Logout handle
  router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/login');
  })
  
  // Delete organisation
  router.delete('/:orgusername',OrgOwnership,(req:any,res:any)=>{
    org.deleteOne({orgusername:req.params.orgusername},(err:any)=>{
      if(err){
        res.redirect('/home');
      }else{
        res.redirect('/home');
      }
    })
  })


export default router
