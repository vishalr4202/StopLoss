const express = require("express");

const UserController = require("../controllers/auth");
const UserActionController = require("../controllers/userActions");
const UserSchema = require("../validations/validations");
const IsAuth = require("../middlewares/isAuth");
const getKeys = require("../middlewares/isAuth");
const router = express.Router();

router.post(
  "/signup",
  UserSchema.userSignupSchema,
  UserController.createSignup
);

router.post("/login", UserSchema.userLoginSchema, UserController.showLogin);

router.get("/dashboard", IsAuth, UserActionController.getDashboard);
router.post("/getAccessToken", IsAuth, UserActionController.getAccessToken);
router.post("/placeTrade", UserActionController.placeFirstTrade);
// router.get("/getTicks", UserActionController.getTicker);

module.exports = router;
