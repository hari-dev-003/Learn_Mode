import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
 path: './.env'
});

const connectDB = async () => { 
  try{ 
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('MongoDB connected successfully');
  }catch(err)
{ 
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }

}

export { connectDB };
