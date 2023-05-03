const create = require("../models/create");
const asyncWrapper = require("../middle-wear/async");

// get all users
const getAllUsers = asyncWrapper(async (req, res) => {
  const allUsers = await create.find();
  res.status(200).json({ allUsers });
});

// create a new user
const newUser = asyncWrapper(async (req, res) => {
  const user = await create.create(req.body);
  res.status(201).json({ user });
});

// find a user id and populate with friends
const updateFriends = asyncWrapper(async (req, res) => {
  const user = await create.findById({ _id: req.params.id });
  user.friends.push({
    friend: req.body.friend,
    score: req.body.score,
  });

  user.save();
  res
    .status(201)
    .json({ msg: "user friends list is successfully updated", user });
});

// get specific user
const getUser = asyncWrapper(async (req, res) => {
  const user = await create.findOne({ _id: req.params.id });
  if (!user) {
    return res
      .status(404)
      .json({ msg: `No user with id: ${req.params.id} exist in database` });
  }
  res.status(200).json({ user });
});

// delete specific user
const deleteUser = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const users = await create.findOneAndDelete({ _id: id });
  if (!users) {
    return res
      .status(404)
      .json({ msg: `No user with id: ${id} exist in database` });
  }
  res.status(200).json({ msg: `user with id : ${id} has been deleted` });
});

// update creator's data
const update = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const updatedUser = await create.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedUser) {
    return res
      .status(404)
      .json({ msg: `user with id: ${id} does not exist in database` });
  }
  res.status(201).json({ msg: "user update is successful", updatedUser });
});
module.exports = {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
  update,
  updateFriends,
};
