var express = require('express');
var router = express.Router();

const { asyncErrorHandler} = require('../middleware/index');
const {  getJobs, getPostJob, postJob, getOneJob, deleteJob, getInterview, applyToJob } = require('../controllers/jobs');


// GET job
router.get("/", asyncErrorHandler(getJobs));

// GET postJob
router.get("/new", asyncErrorHandler( getPostJob));

// POST job
router.post("/new", asyncErrorHandler(postJob));

// GET Schedule interview
router.get("/:id/interview", asyncErrorHandler(getInterview));

// GET one job
router.get("/:id", asyncErrorHandler( getOneJob));

// DELETE one job
router.delete("/:id", asyncErrorHandler( deleteJob));

// POST application to job
router.post("/:id/apply", asyncErrorHandler( applyToJob));


module.exports = router;