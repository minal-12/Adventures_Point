const express = require('express');
const router = express.Router();

//http://localhost:4000/api/products/ -- GET,POST

const productC = require('../controllers/productController');

// router
// .get("/" , function(req,res){
//     res.send({msg : 'Get Route Called'})
// })
// .post("/" , function(req,res){
//     res.send({msg : 'POST Route Called'})
// })

router
.get('/' , productC.productShow)
.get('/:pid' , productC.productShowById)
.post('/' , productC.productAdd)
.delete('/:pid' , productC.productDelete)
.put("/:pid" , productC.productUpdate)
module.exports = router;