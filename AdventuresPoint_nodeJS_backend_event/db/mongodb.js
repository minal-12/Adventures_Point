const mongoose = require('mongoose');

async function dbConnect(){
    await mongoose.connect(process.env.MONGODB_PATH);
}

dbConnect()
.then((res)=>{
    console.log("Response From MongoDb" , res);
})
.catch((err)=>{
    console.log(err);
})