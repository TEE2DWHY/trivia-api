const router = require("express").Router();
const {newUser, getAllUsers, getUser, deleteUser, update} = require("../controllers/create")

router.get("/", getAllUsers)
router.post("/create", newUser)
router.route("/:id").get(getUser).delete(deleteUser).patch(update);


module.exports = router;