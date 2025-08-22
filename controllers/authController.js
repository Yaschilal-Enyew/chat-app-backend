import mongoose from "mongoose"
import User from "../models/userModel.js";
import bcrypt, { genSalt, hash } from "bcryptjs";
import { generateToken } from "../utils/tokenGenerator.js";
import cloudinary from "../config/cloudinary.js";
import { WELCOME_TEMPLATE, PASSWORD_RESET_TEMPLATE } from "../config/emailTemplates.js";
import transporter from "../config/nodemailer.js";

export const signup = async (req,res) => {

  const {fullName,email,password, bio} = req.body;

  if(!fullName || !email || !password || !bio){
        return res.json({success:false, message:'Missing Details'});
    }

  try {
    const existingEmail = await User.findOne({email});

    if(existingEmail){
        return res.json({success:false, message:"Account already exist"});
    }
    if(password.length<6){
        return res.json({success:false, message:"Password must be at least 6 character"});
    }
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        fullName, email, password:hashedPassword, bio
    });

    await newUser.save();
    const token = generateToken(newUser._id);

    // sending welcome email
      const mailOptions={
        from: process.env.SMTP_USER,
        to: email,
        subject: `Welcome to Aura Chat ${fullName}`,
        text: `Your account has been created with email : ${email}`,
         html:WELCOME_TEMPLATE.replace("{{fullName}}",fullName)
      }
        await transporter.sendMail(mailOptions);

  
    return res.status(201).json({ success:true, userData: newUser, token, message:
        "Account created successfully" });
     
  } catch (error) {
    res.json({success:false, message: error.message });
    console.log(error.message);
  }
}


//  Login controller
export const login =async (req,res) => {
     try {
    const {email, password} = req.body;

    const userData = await User.findOne({email});

        if(!userData){
            return res.json({success: false, message: "Invalid email"});
        }

        const isPasswordCorrect = await bcrypt.compare(password,userData.password);

        if(!isPasswordCorrect){
           return res.json({success: false, message: "Invalid Password"});
        }

        const token = generateToken(userData._id)

    return res.json({ success:true, userData, token, message:
        "Logged in successfully" });
        
    } catch (error) {
        res.json({success:false,message:error.message});
        console.log(error.message) 
    }
    
}


// Controller to check if user is authenticated
export const checkAuth =  (req,res) => {
        res.json({success:true, user:req.user});
}


// Controller to Update user profile
export const  updateProfile = async (req,res) => {
    try {
        const {profilePic, bio, fullName} = req.body;

         const userId = req.user._id;
         let updatedUser;

       if(!profilePic){
       updatedUser = await User.findByIdAndUpdate(userId, {bio, fullName},
        {new:true} );
         } else{
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(userId,{profilePic:upload.secure_url,
                 bio, fullName}, {new:true});
         }

       res.json({success:true, user:updatedUser});
        
    } catch(error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}

export const sendResetOtp = async(req, res)=>{
    const {email}= req.body;
    
    try {
        if(!email) {
            return res.json({success:false,message:"Email is required"})
        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({success:false, message:"User not found"})
        }

       const otp = String(Math.floor(100000 + Math.random() * 900000));
       user.resetOtp= otp;
       user.resetOtpExpireAt = Date.now() + 15 * 60  * 1000 ;

       await user.save();

       const mailOption={
        from:process.env.SMTP_USER,
        to: user.email,
        subject:'Password Reset OTP',
        text:`Your OTP for resetting your password is ${otp}. 
        Use this OTP to proceed with resetting your password`,
        html:PASSWORD_RESET_TEMPLATE.replace("{{otp}}",otp)
      }

      await transporter.sendMail(mailOption);

      res.json({success:true,message:"OTP sent to your email"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:error.message});
    }
}

export const resetPassword = async(req, res)=>{
    const {email, otp, newPassword} = req.body;
    if(!email || !otp || !newPassword){
        return res.json({success:false, message:"Email, NewPassword and OTP required"})
    }
    try {
        const user = await User.findOne({email})
        if(!user ){
           return res.json({success:false,message:"User not found"})
        }
        if(user.resetOtp === "" || user.resetOtp !== otp){
           return res.json({success:false, message: "Invalid OTP"});
        }
        if(user.resetOtpExpireAt<Date.now()){
            return res.json({success:false, message: "OTP expired"});
        }
       
        const hashedPassword = await bcrypt.hash(newPassword,10);

        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt = 0;

        await user.save();
        return res.json({success:true,message: "Password has been reset successfully"});

        
    } catch (error) {
        res.json({success:false, message:error.message})
        console.log(error.message)
    }
}
