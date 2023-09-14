const express = require('express');
const router = express.Router();

//http://localhost:4000/api/bookevents/ -- GET,POST

const bookeventC = require('../controllers/bookeventController');



// router
// .get("/" , function(req,res){
//     res.send({msg : 'Get Route Called'})
// })
// .post("/" , function(req,res){
//     res.send({msg : 'POST Route Called'})
// })

//for bookevent routes
router
.get('/' , bookeventC.bookeventShow)
.get('/:bid' , bookeventC.bookeventShowById)
.post('/' , bookeventC.bookeventAdd)
.delete('/:bid' , bookeventC.bookeventDelete)
.put("/:id" , bookeventC.bookeventUpdate)

//for 
module.exports = router;