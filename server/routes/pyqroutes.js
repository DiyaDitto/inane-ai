const express =
  require("express");

const router =
  express.Router();

const {
  getPYQs,
  createPYQ,
  updatePYQ,
  deletePYQ,
} = require(
  "../controllers/pyqController"
);

router.get(
  "/",
  getPYQs
);

router.post(
  "/",
  createPYQ
);

router.put(
  "/:id",
  updatePYQ
);

router.delete(
  "/:id",
  deletePYQ
);

module.exports =
  router;