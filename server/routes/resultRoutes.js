const express =
  require("express");

const router =
  express.Router();

const protect =
  require(
    "../middleware/authMiddleware"
  );

const {
  saveResult,
  getMyResults,
} = require(
  "../controllers/resultController"
);

router.post(
  "/",
  protect,
  saveResult
);

router.get(
  "/my-results",
  protect,
  getMyResults
);

module.exports =
  router;