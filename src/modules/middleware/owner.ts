
// import org from '../organization/schema'

// const OrgOwnership = function(req:any,res:any,next:any){
//     if(req.isAuthenticated()){
//         org.findOne({'name':req.params.orgusername},function(err,organisation){
//             if(err){
//                 res.redirect('back')
//             }else if(organisation.admin.id.equals(req.user._id) ){
//                     next();
//                 }else{
//                     res.redirect('back')
                    
//                 }
//         });

//     }else{
//         res.redirect('back')
//     }
// }


// export default OrgOwnership
