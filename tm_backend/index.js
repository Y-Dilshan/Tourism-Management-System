import express from 'express';
import hotelRouter from './Routes/hotelRouter.js';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());

app.use('/hotels', hotelRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

