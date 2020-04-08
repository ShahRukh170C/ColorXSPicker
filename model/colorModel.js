let mongoose = require("mongoose");

let Colors = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  colors:[String]
  
});
module.exports = mongoose.model("Color", Colors);
// console.log(ColorsExport);

//  Colors;
