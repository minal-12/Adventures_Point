const bookeventM = require('../models/bookeventModel');

const bookeventAdd = (req,res)=>{
    console.log(req.body);
    if(req.body.trekkersname=='' || req.body.eventname==''){
        // msg = "Fields Required";
        res.send({error:"Fields Required"});
    }
    // else if(isNaN(req.body.price)){
    //     // msg = "Invalid Price";
    //     res.send({error:"Invalid Price"});
    // }
    else{
        //req.body , {name:'xxx',price:'xxx',discount:'xxxx'}
        const instanc_bookevent = new bookeventM(req.body);
        instanc_bookevent.save(function (err) {
            if(err) throw err;
            res.send({error:"eventbooking Added"});
        });
        // msg = "Ok lets do insert";
    }
    // res.send({error : msg})
}
const bookeventShow = (req,res)=>{
    bookeventM.find({}, function (err, docs) {
        // docs.forEach
        if(err) throw err;
        res.send(docs);
    });
}

const bookeventShowById = (req,res)=>{
    bookeventM.find({_id:req.params.pid}, function (err, docs) {
        // docs.forEach
        if(err) throw err;
        res.send(docs);
    });
}

const bookeventDelete = (req,res)=>{
    var bookeventid = req.params.pid;
    console.log(bookeventid); //
    bookeventM.remove({_id:bookeventid}, function (err, docs) {
        // docs.forEach
        if(err) throw err;
        // res.send(docs);
        res.send({msg:"bookevent Deleted"})

    });
}

const bookeventUpdate = function(req,res){
    // console.log(req.params);
    // console.log(req.body);
    var bookeventid = req.params.pid;
    bookeventM.updateMany({_id :bookeventid } , {$set:req.body} , function(err,docs){
        if(err) throw err;
        res.send({msg :"Data Updated"});
    })
}

module.exports = {
    bookeventAdd,
    bookeventShow,
    bookeventDelete,
    bookeventUpdate,
    bookeventShowById
}