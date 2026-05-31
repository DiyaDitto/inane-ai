const express =
  require("express");

const router =
  express.Router();

const {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  bulkUploadQuestions,
} = require(
  "../controllers/questionController"
);

router.get(
  "/",
  getQuestions
);

router.post(
  "/",
  createQuestion
);

router.post(
  "/bulk-upload",
  bulkUploadQuestions
);

router.put(
  "/:id",
  updateQuestion
);

router.delete(
  "/:id",
  deleteQuestion
);

module.exports =
  router;