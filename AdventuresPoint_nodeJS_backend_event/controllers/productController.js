const productM = require('../models/productModel');

const productAdd = (req,res)=>{
    console.log(req.body);
    if(req.body.name=='' || req.body.price==''){
        // msg = "Fields Required";
        res.send({error:"Fields Required"});
    }
    else if(isNaN(req.body.price)){
        // msg = "Invalid Price";
        res.send({error:"Invalid Price"});
    }
    else{
        //req.body , {name:'xxx',price:'xxx',discount:'xxxx'}
        const instanc_product = new productM(req.body);
        instanc_product.save(function (err) {
            if(err) throw err;
            res.send({error:"Product Added"});
        });
        // msg = "Ok lets do insert";
    }
    // res.send({error : msg})
}
const productShow = (req,res)=>{
    productM.find({}, function (err, docs) {
        // docs.forEach
        if(err) throw err;
        res.send(docs);
    });
}

const productShowById = (req,res)=>{
    productM.find({_id:req.params.pid}, function (err, docs) {
        // docs.forEach
        if(err) throw err;
        res.send(docs);
    });
}

const productDelete = (req,res)=>{
    var productid = req.params.pid;
    console.log(productid); //
    productM.remove({_id:productid}, function (err, docs) {
        // docs.forEach
        if(err) throw err;
        // res.send(docs);
        res.send({msg:"Product Deleted"})

    });
}

const productUpdate = function(req,res){
    // console.log(req.params);
    // console.log(req.body);
    var productid = req.params.pid;
    productM.updateMany({_id :productid } , {$set:req.body} , function(err,docs){
        if(err) throw err;
        res.send({msg :"Data Updated"});
    })
}

module.exports = {
    productAdd,
    productShow,
    productDelete,
    productUpdate,
    productShowById
}