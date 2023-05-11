const mongoose = require("mongoose");

// users schema
const friendsSchema = new mongoose.Schema({
  friend: String,
  score: String,
});

// creator's schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field cannot be empty"],
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  boy: {
    type: Boolean,
    default: false,
  },
  girl: {
    type: Boolean,
    default: false,
  },
  choice: {
    type: [String],
  },
  friends: [friendsSchema],
});

module.exports = mongoose.model("User", userSchema);
