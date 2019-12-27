const jobs = require("../models/jobs");
const jobApplications = require("../models/jobApplication");
var moment = require("moment");
const companies = require("../models/companies");

module.exports = {
    async getAnalytics( req, res, next) {
        res.render("corporate/analytics");
    },

    async registerCompany( req, res, next) {
        var newCompany = {
            name: req.body.name,
            email: req.body.email
        }
    
        let company = await companies.create( newCompany);
        successMSg = newCompany.name;
        successMSg += " registered successfully in the companies database!";
        res.send( successMSg);
    },

    async getJob( req, res, next) {
        // 1) get the searched job            
        let jobInstance = await jobs.find({_id: req.params.id}).populate('author', 'name');
        let applications  = await jobApplications.find({job: req.params.id}).populate('applicant');
        
        // res.send(job);
        console.log( applications);
        res.render("corporate/viewJob", { job: jobInstance, moment: moment, applications: applications});
    },

    async acceptForInterview( req, res, next) {
        var newStatus = "accepted";
        filter = { job:  req.params.id };
        updatedValue = { status: newStatus };
        var oldStatus = await jobApplications.findOneAndUpdate( filter, updatedValue);

        res.redirect("/corporate/" + req.params.id);
        // res.send("Here");
    }
}


