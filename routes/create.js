const router = require("express").Router();
const {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
  update,
  updateFriends,
} = require("../controllers/create");

router.get("/", getAllUsers);
router.post("/create", newUser);
router
  .route("/:id")
  .get(getUser)
  .post(updateFriends)
  .delete(deleteUser)
  .patch(update);

module.exports = router;
