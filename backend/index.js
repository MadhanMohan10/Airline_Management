import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from "./routes/auth.js";
import flightRoute from "./routes/flight.js";
import bookingRoute from "./routes/booking.js";
import ticketRoute from "./routes/tickets.js";

dotenv.config();

const corsOptions = {
  origin: true,
};

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome to the Backend Server');
});

// Correct MongoDB connection string format
const password = encodeURIComponent('mine1234'); // Assuming 'mine1234' is the password
const uri = `mongodb+srv://userdata:${password}@userdata.bzn7uty.mongodb.net/dat?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/flights", flightRoute);
app.use("/api/v1/bookings", bookingRoute);
app.use("/api/v1/tickets", ticketRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server started on port ${port}`);
});
