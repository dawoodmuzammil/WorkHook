var jobs = require("../models/jobs");

module.exports = {
    async getJob( req, res, next) {
        // res.send("GET /jobs")
        var jobs = await jobs.find({});
        res.send(jobs);
        // console.log("in get job")
    },

    async postJob( req, res, next) {
        var newJob = {
            jobTitle: "Song Listener",
            description: "Listen songs with Asena!",
            createdAt: new Date(),
            author: "Dawood Muzammil",
            location: "Ankara",
            preferredSkills: "Should have ears"
            // deadline: "2020-12-09"
        }

        // console.log( newJob);
        let job = await jobs.create( newJob);
        console.log(job);
    }
}


