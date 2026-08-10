import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config.js';

import hotelRouter from './Routes/hotelRouter.js';
import userRouter from './Routes/userRouter.js';

dotenv.config(); // Load environment variables

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/hotels', hotelRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});