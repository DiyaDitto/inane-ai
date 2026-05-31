const express =
  require("express");

const router =
  express.Router();

const {
  getCurrentAffairs,
  createCurrentAffair,
  updateCurrentAffair,
  deleteCurrentAffair,
} = require(
  "../controllers/currentAffairController"
);

router.get(
  "/",
  getCurrentAffairs
);

router.post(
  "/",
  createCurrentAffair
);

router.put(
  "/:id",
  updateCurrentAffair
);

router.delete(
  "/:id",
  deleteCurrentAffair
);

module.exports =
  router;