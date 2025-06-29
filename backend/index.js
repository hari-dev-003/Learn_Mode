import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/connect.js';

import userRoutes from './routes/Userroute.js';

dotenv.config({
 path:'/.env'
}
)

const backend = express();

backend.use(cors());
backend.use(express.json());

backend.use('/api/user', userRoutes);

connectDB(process.env.MONGO_URL)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

backend.listen(`${process.env.PORT}`, ()=>{ 
  console.log('Server is running' );
})
