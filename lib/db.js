import mongoose from "mongoose";

const URI = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB is already connected");
      return;
    }
    await mongoose.connect(URI);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectDB;
