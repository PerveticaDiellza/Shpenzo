const mongoose = require('mongoose');
const PSchema = new mongoose.Schema(
    {
        pName: {
            type: String,
            required: [true, "Friend Name is required!!!"],
            minLength: [3, "Friend name must be at least 3 characters long!!!"],
        },
        pType: {
            type: String,
            required: [true, "The type of purchase is required!!!"],
            minLength: [3, "Purchases type must be at least 3 characters long!!!"],
        },
        pDescription: {
            type: String,
            required: [true, "The description of the reason of your purchase is required!!!"],
            minLength: [3, "Purchase reason must be at least 3 characters long!!!",]
        },
        pItemOne: {
            type: String,
            required: [true, "Please fill out the price of the purchase!!!"],
        },
        pItemTwo: {
            type: String,
        },
        pItemThree: {
            type: String,
        },
        pItemFour: {
            type: String,
        },
        pItemFive: {
            type: String,
        },
        pItemSix: {
            type: String,
        }
    }, { timestamps: true }
);

const P = mongoose.model('P', PSchema);

module.exports = P;