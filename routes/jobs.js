var express = require('express');
var router = express.Router();

const { asyncErrorHandler} = require('../middleware/index');
const {  getJobs, getPostJob, postJob, getOneJob, deleteJob } = require('../controllers/jobs');


// GET job
router.get("/", asyncErrorHandler(getJobs));

// GET postJob
router.get("/new", asyncErrorHandler( getPostJob));
// POST job
router.post("/new", asyncErrorHandler(postJob));

// GET one job
router.get("/:id", asyncErrorHandler( getOneJob));

// DELETE one job
router.delete("/:id", asyncErrorHandler( deleteJob));

module.exports = router;