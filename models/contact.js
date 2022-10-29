// Import
let mongoose = require('mongoose');

// Create a model class
let ContactModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection: "users"
    }
);

module.exports = mongoose.model("Inventory", ContactModel);