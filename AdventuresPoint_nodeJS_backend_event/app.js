const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
var cors = require('cors');// for all methods,auth

require('./db/mongodb');

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine','ejs'); //views folder
//routes

const productRoute = require('./routes/productRoute');



app.use("/api/products",productRoute);


//http://localhost:4000/api/products/

app.listen(process.env.PORT , process.env.HOST , ()=>{
    console.log('server running');
})