const mongoose = require("mongoose");
module.exports = mongoose.model(
    "userPost",
    new mongoose.Schema({
        title: String,
        postedBy : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userRegistration',
        },
        comments : [{
            text : String,
            postedBy : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'userRegistration'
            }
        }]
    })
    )