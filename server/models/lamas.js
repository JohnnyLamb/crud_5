var mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var Lama = new Schema(
    {
      name:String,
      spitter: Boolean,
      age: Number
    }
  );

// process.env.DB_HOST = 'mongodb://localhost/lamas';

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/lamas');

module.exports = mongoose.model('lamas', Lama);
