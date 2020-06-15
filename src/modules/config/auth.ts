
   var isAuth=function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login')
    }

 export default isAuth   