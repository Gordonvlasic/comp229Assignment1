//require modules
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        name: String,
        number: String,
        
        username: {
            type: String,
            default: "",
            trim: true,
            required: "Username Required"
        },
        /*
        password: {
            type: String,
            default: "";
            trim: true,
            required: "Password Required"
        }
        */
       email: {
            type: String,
            default: "",
            trim: true,
            required: "E-mail Address Required"
       },
       displayName: {
            type: String,
            default: "",
            trim: true,
            required: "Display Name is Required"
       },
       created: {
            type: Date,
            default: Date.now,
       },
       update: {
            type: Date,
            default: Date.now,
        }
    },
    {
        collection: "users"
    }
);

// configure options
let options = ({missingPasswordError: 'The password field must not be empty/The password was incorrect'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);