
import org from '../models/org'

const OrgOwnership = function(req:any,res:any,next:any){
    if(req.isAuthenticated()){
        org.findOne(req.params.orgusername,function(err,Organisation){
            if(err){
                res.redirect('back')
            }else if(Organisation.owner.id.equals(req.user._id) ){
                    next();
                }else{
                    res.redirect('back')
                }
        });

    }else{
        res.redirect('back')
    }
}


export default OrgOwnership
