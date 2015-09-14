var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Lama = require('../models/lamas');

// get ALL lamas
router.get('/lamas',function(req,res,next){
  Lama.find(function(err,data){
    if(err){
      res.json({'message':err});
    }
     else {
      res.json(data);
    }

  });
});
// post SINGLE lama
router.post('/lamas',function(req,res,next){
  newLama = new Lama({
    name:req.body.name,
    age:req.body.age,
    spitter:req.body.spitter
  });
  newLama.save(function(err,lama){
      if(err){
        res.json({'message':err});
      } else {
        res.json(lama);
      }

  });
});
// // put
// router.put('/lama/:id',function(req,res,next){
//   Lama.find(function(err,data){


//   });
// });
// // delete SINGLE Lama

// router.delete('/lama/:id',function(req,res,next){
//   Lama.find(function(err,data){


//   });
// });




module.exports = router;
