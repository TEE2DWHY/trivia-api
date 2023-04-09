const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name field cannot be empty"],
        trim: true,
        maxLength: [20, "name cannot be more than 20 characters"]
    },
    // gender:{
    //     type: String,
    //     required: [true, "specify gender"]
    // },
    user:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("User", userSchema)