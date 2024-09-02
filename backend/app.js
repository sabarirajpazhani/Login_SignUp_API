const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path=require('path');
dotenv.config({path: path.join(__dirname,'config','config.env')})

const signUp = require('./routes/signUp')
const login = require('./routes/login')

app.use('/api/v1/',login);
app.use('/api/v1/',signUp);

app.listen (process.env.PORT,()=>{
    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});