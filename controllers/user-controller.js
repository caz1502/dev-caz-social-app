// COMPLETE - to be tested

const { User, Thought } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.jason(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user found with this ID" })
          : Thought.deleteMany({ _id: { $in: user.thought } });
      })
      .then(() => res.json({ message: "User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
