const mongoose = require("mongoose");
const userRegistrationSchema = new mongoose.Schema({
    name : String,
});
module.exports = mongoose.model("userRegistration",userRegistrationSchema);