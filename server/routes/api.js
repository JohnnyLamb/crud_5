var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Lama = require('../models/lamas');

// get ALL lamas
router.get('/lamas',function(req,res,next){
  Lama.find(function(err,lama){
    if(err){
      res.json({'message':err});
    }
     else {
      res.json(lama);
    }
  });
});
// get single lama
router.get('/lama/:id',function(req,res,next){
  Lama.findById(req.params.id,function(err,lama){
    if(err){
      res.json({'message':err});
    }
     else {
      res.json(lama);
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
// update SINGLE lama
router.put('/lama/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    age: req.body.age,
    spitter:req.body.spitter
  };
  Lama.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// // delete SINGLE Lama

// router.delete('/lama/:id',function(req,res,next){
//   Lama.find(function(err,data){


//   });
// });




module.exports = router;
