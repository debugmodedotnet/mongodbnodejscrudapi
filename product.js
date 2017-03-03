var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ProductSchema   = new Schema({
    title: String,
    price: Number,
    instock : Boolean,
    photo : String ,
});
module.exports = mongoose.model('Product', ProductSchema);
// module.exports = mongoose.model('Product', ProductSchema,'optiponally pass schema name ');

