const express =require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors =require('cors');
const routes = require('./routes');
const path=require('path');

const app = express()



const dbOptions = {
    host:'localhost',
    port:3001,
    user:'root',
    password:'chihiro410',
    database:'quizargentina'
}

app.use(express.static(path.join(__dirname, 'client')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.use(myconn(mysql,dbOptions, 'single'))

app.use(express.json());
app.use(cors())


app.use('/api', routes)

app.listen(3000)