const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookeventSchema = new Schema({
   //bookid, bookdate, eventname, noofperson, trekkersname
   bookid : String,
   bookdate : String,
   eventname : String,
   noofperson : String,
   trekkersname : String

   
    // below are models for fields
    // name: String,
    // price: Number,
    // discount: Number
});

const bookeventModel = mongoose.model('bookevent', bookeventSchema);
module.exports = bookeventModel;