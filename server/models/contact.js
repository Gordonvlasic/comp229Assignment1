const mongoose = require('mongoose');

// create a model class
const contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "users"
});

module.exports = mongoose.model('Contact', contactModel);