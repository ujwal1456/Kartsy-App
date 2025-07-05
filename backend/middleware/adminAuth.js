import jwt from "jsonwebtoken";

//next is callback function
const adminAuth = async(req,res,next) => {
    try {
        const {token} = req.headers;
        if(!token) {
            return res.json({success:false,message:"Not Authorized Login Again"});
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        //since we created token with email+password we check token with both
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized Login Again"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export default adminAuth;