import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import destinationRouter from './routes/destination.router.js';
import packageRouter from './routes/package.router.js';
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

app.use("/api/destination", destinationRouter);
app.use("/api/packages", packageRouter);

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    })
})