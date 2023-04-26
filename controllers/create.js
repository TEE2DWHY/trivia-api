const create = require("../models/create");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await create.find();
    res.status(200).json({ allUser });
  } catch (err) {
    res.status(500).json({ meg: err });
  }
};

// create a new user
const newUser = async (req, res) => {
  try {
    const user = await create.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// find a user id and populate friends
const updateFriends = async (req, res) => {
  try {
    const createFriend = await create.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res
      .status(201)
      .json({ msg: `user results successfully updated`, friend: createFriend });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// get specific user
const getUser = async (req, res) => {
  try {
    const user = await create.findOne({ _id: req.params.id });
    if (!user) {
      return res
        .status(404)
        .json({ msg: `No user with id: ${req.params.id} exist in database` });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// delete specific task
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await create.findOneAndDelete({ _id: id });
    if (!users) {
      return res
        .status(404)
        .json({ msg: `No user with id: ${id} exist in database` });
    }
    res.status(200).json({ msg: `user with id : ${id} has been deleted` });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  try {
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
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
module.exports = {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
  update,
  updateFriends,
};
