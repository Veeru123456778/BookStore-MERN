
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import booksRoute from "./routes/booksRoute.js";
import { PORT, mongoDBUrl } from "./config.js";

const app = express();

// Middleware
app.use(express.json()); // Middleware for parsing request body

app.use(cors({
origin:"https://book-store-frontend-nu.vercel.app/",
methods:['GET','POST','PUT','DELETE'],
allowedHeaders:['Content-Type'],
})); 

// Routes
app.get('/', (req, res) => {
    res.status(200).send("Welcome to my first official application");
});

app.use('/books', booksRoute);

// Connect to MongoDB
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

