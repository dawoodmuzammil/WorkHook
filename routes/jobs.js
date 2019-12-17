var express = require('express');
var router = express.Router();

const { asyncErrorHandler} = require('../middleware/index');
const {  getJob, postJob } = require('../controllers/jobs');


// GET job
router.get("/", asyncErrorHandler(getJob));

// POST job
router.post("/new", asyncErrorHandler(postJob));

module.exports = router;