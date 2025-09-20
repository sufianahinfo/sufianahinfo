const express = require("express");
const router = express.Router();
const imagekit = require("../utils/imagekit");

// returns auth params to frontend
router.get("/auth", (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

module.exports = router;
