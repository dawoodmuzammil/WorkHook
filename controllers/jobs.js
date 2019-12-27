const jobs = require("../models/jobs");
const jobApplication = require("../models/jobApplication");
var moment = require("moment");

module.exports = {
    async getJobs( req, res, next) {
        // 1) get all the jobs            
        let jobsList = await jobs.find({}).populate('author', 'name').sort({'_id': -1});
        
        // 2) get all job applications associated with this app
        let hasAlreadyApplied = await jobApplication.find().select('job');
        // let jobApps = await jobApplication.find({});
        
        // put all applications in the array 
        applications = [];
        hasAlreadyApplied.forEach( function( jobApp) {
            applications.push( jobApp.job.toString());
        })     
        // console.log( jobApps)   
        
        res.render("users/mainfeed", {jobs: jobsList, moment: moment, applications: applications});
    },

    async getPostJob( req, res, next) {
        // res.send("GET /jobs/new")
        res.render("corporate/postJob");
    },

    async postJob( req, res, next) {
        // 1) get the new job from user form        
        var newJob = {
            jobTitle: req.body.jobTitle,
            description: req.body.description,
            createdAt: new Date(),
            author: "5dfeab5e93315700e459fa2d",
            location: req.body.location,
            preferredSkills: req.body.preferredSkills,
            deadline: req.body.deadline
        }
        
        // 2) save the job in the database
        let job = await jobs.create( newJob);
        
        res.redirect("/corporate/" + job._id);
    },

    async getOneJob( req, res, next) {
        // 1) get the searched job            
        let job = await jobs.find({_id: req.params.id}).populate('author', 'name');
        res.send(job);
    },

    async deleteJob( req, res, next) {
        let job = await jobs.deleteOne({_id: req.params.id});
        res.redirect("/jobs");
    },

    async getInterview( req, res, next) {        
        res.render("users/interview");
    },

    async applyToJob( req, res, next) {
        var newApplication = {
            applicant: "5df94c2872c7bd295cec111a",            
            job: req.params.id,
            pastExperiences: "No prior experience",
            references: "No references. I'm a student.",
            status: "Pending"
        }

        let application = await jobApplication.create( newApplication);        
        res.render("users/jobAppSuccess");
    }
}


