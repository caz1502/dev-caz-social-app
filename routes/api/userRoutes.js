// COMPLETE - to be tested

const router = require("express").Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

//  /api/users
router.route("/").get(getUsers).post(createUser);

//  /api/users/:id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// //  /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;