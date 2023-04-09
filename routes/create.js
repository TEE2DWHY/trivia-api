const router = require("express").Router();
const create = require("../controllers/create")

router.post("/create", create);

module.exports = router;