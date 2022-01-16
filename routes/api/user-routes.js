// COMPLETE - to be tested

const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../controllers/user-controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser).post(updateUser);

module.exports = router;
