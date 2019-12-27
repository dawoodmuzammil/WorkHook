var express = require('express');
var router = express.Router();


const { asyncErrorHandler} = require('../middleware/index');
const { getAnalytics, registerCompany, getJob, acceptForInterview } = require("../controllers/corporate.js");

// GET Dashboard
router.get("/", asyncErrorHandler( getAnalytics));

// POST
router.post("/register", asyncErrorHandler( registerCompany));

// GET 
router.get("/:id", asyncErrorHandler( getJob));

router.get("/:id/accept", asyncErrorHandler( acceptForInterview));



module.exports = router;
