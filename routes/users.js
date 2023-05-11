const router = require("express").Router();
const {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
  update,
  updateFriends,
  // deleteAllUser,
} = require("../controllers/users");

router.get("/", getAllUsers);
router.post("/create", newUser);
router
  // .delete("/", deleteAllUser)
  .route("/:id")
  .get(getUser)
  .post(updateFriends)
  .delete(deleteUser)
  .patch(update);

module.exports = router;
