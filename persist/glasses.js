const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    name: {type: String, default: "" },
    description: {type: String, default: ""},
    forSale: {type: Boolean, default: true },
    brand: {type: [String], default: []},
    color: {type: [String], default: []},
});

const Glasses = mongoose.model('Glasses', todoSchema);

module.exports = Glasses;
