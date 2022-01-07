const {
  createUser,
  getUsers,
  getproductsByUserId,
  Userlogin,
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/", getproductsByUserId);
router.post("login", Userlogin);
module.exports = router;
