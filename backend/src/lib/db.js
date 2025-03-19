import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Mongoose connected : ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection error:", error);
  }
};
