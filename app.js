import express from "express";
import 'dotenv/config';
import cors from "cors";
import http from "http";
import cookieParser from 'cookie-parser';
import { connectDB } from "./config/db.js";
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from "socket.io";


// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize socket.io server
export const io = new Server(server, {
  cors: {origin: "*"}
})

// Store online users
export const userSocketMap = {}; // { userId: socketId }

// Socket.io connection handler
io.on("connection", (socket)=>{
  const userId = socket.handshake.query.userId;
  console.log("🔌 User Connected:", userId, "Socket ID:", socket.id);

  if(userId) {
    userSocketMap[userId] = socket.id;
    console.log("🗺️ Current Map:", userSocketMap);
  }

  // Emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", ()=>{
   console.log("User Disconnected:", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
  });
})

// middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cookieParser());
app.use(cors({ origin:'http://localhost:5173', credentials:true }));

// Routes setup
app.use("/api/status",(req,res)=> res.send("Server is live"));
app.use('/api/auth',userRouter);
app.use('/api/messages', messageRouter);

//  connecting to mongoDB
const PORT = process.env.PORT;
server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});