import express from "express";
import { checkAuth, login,  resetPassword,  sendResetOtp,  signup, updateProfile } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.middleware.js";

 const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.post("/send-reset-otp" ,sendResetOtp);
userRouter.post("/reset-password" ,resetPassword);
userRouter.put('/update-profile', protectRoute, updateProfile);
userRouter.get('/check', protectRoute, checkAuth);

export default userRouter;



