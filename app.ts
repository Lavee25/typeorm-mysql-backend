import express from 'express';
const app=express();
require('dotenv').config();
import db from './startup/database';
const port=process.env.PORT;
db();    // Database connection
require('./startup/router')(app);
require('./startup/middleware')(app);




// console.log('hello node')
app.listen(port,()=>{
console.log(`app running on port ${port}`);
})
