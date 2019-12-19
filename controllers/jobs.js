const jobs = require("../models/jobs");
var moment = require("moment");

module.exports = {
    async getJobs( req, res, next) {
        // 1) get all the jobs            
        let jobsList = await jobs.find({}).populate('author', 'name').sort({'_id': -1});
        
        res.render("mainfeed", {jobs: jobsList, moment: moment});
    },

    async getPostJob( req, res, next) {
        // res.send("GET /jobs/new")
        res.render("postJob");
    },

    async postJob( req, res, next) {
        // 1) get the new job from user form        
        var newJob = {
            jobTitle: req.body.jobTitle,
            description: req.body.description,
            createdAt: new Date(),
            author: "5df94c2872c7bd295cec111a",
            location: req.body.location,
            preferredSkills: req.body.preferredSkills,
            deadline: req.body.deadline
        }
        
        // 2) save the job in the database
        let job = await jobs.create( newJob);
        
        res.redirect("/jobs");
    },

    async getOneJob( req, res, next) {
        // 1) get the searched job            
        let job = await jobs.find({_id: req.params.id}).populate('author', 'name');
        res.send(job);
    },

    async deleteJob( req, res, next) {
        let job = await jobs.deleteOne({_id: req.params.id});
        res.redirect("/jobs");
    }
}


