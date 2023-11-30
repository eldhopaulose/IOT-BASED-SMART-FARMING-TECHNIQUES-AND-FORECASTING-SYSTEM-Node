var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
 name: String,
 email: String,
 mobile: String
});
var SomeModel = mongoose.model('Customers', SomeModelSchema, 'Customers' );

module.exports = SomeModel