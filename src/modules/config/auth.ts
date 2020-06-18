const isAuth=function(req:any,res:any,next:any){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/login')
        return next();
    }

 export default isAuth   