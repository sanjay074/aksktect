const express = require("express");
const router = express.Router();

const {userSendMessage}= require("../controllers/userController")

router.post("/send",userSendMessage);
module.exports = router;