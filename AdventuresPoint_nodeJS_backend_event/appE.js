const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
var cors = require('cors');// for all methods,auth

require('./db/mongodb');

const appE = express();
appE.use(cors());
// parse application/x-www-form-urlencoded
appE.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
appE.use(bodyParser.json())

appE.set('view engine','ejs'); //views folder
//routes

const bookeventRoute = require('./routes/bookeventRoute');

appE.use("/api/bookevent",bookeventRoute);

//http://localhost:4000/api/bookevent/

appE.listen(process.env.PORT , process.env.HOST , ()=>{
    console.log('server running with 4000');
})