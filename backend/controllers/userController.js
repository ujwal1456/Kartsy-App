import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async(req,res) => {
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({success:false,message:"User doesn't Exist"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({success:true,token});
        } else {
            res.json({success: false,message:'Invalid credentials'});
        }

    } catch(error) {
        console.log(error);
        res.json({success:false,message: error.message});
    }
}

// Route for user register
const registerUser = async(req,res) => {
    try {

        // if user enter with props name,email,password then that is req.body is taken
        const {name,email,password} = req.body;
        //checking user already exists or not
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success:false,message:"User already exists"});
        }

        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter valid Email"});
        }

        if(password.length < 8) {
            return res.json({success:false,message:"Please enter strong password"});
        }

        //if everything is good then hash password using bcrypt
        const salt= await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save(); // an _id will be generated here
        const token = createToken(user._id);

        res.json({success:true,token})

        //validating entered email format and strong password using validator
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//Route for admin login
const adminLogin = async(req,res) => {
    try {
        const {email,password} = req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD) {
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token});
        } else {
            res.json({success:false,message:"Invalid credentials"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export {loginUser,registerUser,adminLogin};