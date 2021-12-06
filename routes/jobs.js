const express = require("express");

const router = express.Router();

const {
  createJob,
  getAlljobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAlljobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
