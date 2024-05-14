
import express, { response } from "express";
import { PORT,mongoDBUrl } from "./config.js";
import  mongoose  from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';


const app=express();

app.use(express.json());   // allows to use json files (middleware for parsing request body)

//middleware for handeling cors policy

app.use(cors({
origin:"https://book-store-frontend-nu.vercel.app/",
methods:['GET','POST','PUT','DELETE'],
allowedHeaders:['Content-Type'],
})); 

// app.use(cors({
// origin:"http://localhost:3000",
// methods:['GET','POST','PUT','DELETE'],
// allowedHeaders:['Content-Type'],
// }));  // Allow custom origins


app.get('/',(req,res)=>{
console.log(req);
return res.status(234).send("Welcome to my first official applocation");
})

app.use('/books',booksRoute);

mongoose.connect(mongoDBUrl)
.then(()=>{
console.log('App connected to database');
app.listen(PORT,()=>{
    console.log(`App is Listening on port ${PORT}`);    
})
})
.catch((err)=>{
console.log(err);
})
