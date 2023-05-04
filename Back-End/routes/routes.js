const express = require("express");
const router = express.Router();

const controller = require("../controller/controllers");
const User = require("../model/User");
const Users = require("../model/User");

router.post("/register", (req, res) => {
  controller.register(req, res);
});

router.post("/login", (req, res) => {
  controller.login(req, res);
});

module.exports = router;
