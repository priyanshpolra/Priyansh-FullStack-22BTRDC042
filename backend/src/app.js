import express from 'express'

import dotenv from 'dotenv'
import connectDB from './config/mongo.config.js';

import short_url from './routes/short_url.routes.js';
import { redirectFromShortUrl } from './controllers/short_url.controller.js';
import cors from 'cors';

dotenv.config("./.env");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/api/create",short_url);

app.get("/:id",redirectFromShortUrl);

app.listen(3000,()=>{
  connectDB()
  console.log(`the server is running on :${3000}`);
})