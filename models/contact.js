// Import
let mongoose = require('mongoose');

// Create a model class
let ContactModel = mongoose.Schema(
    {
        id: Number,
        name: String,
        email: String,
        phone: String,
    },
    {
        collection: "users"
    }
);

module.exports = mongoose.model("Contact", ContactModel);