const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({
    applicant: 
        { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ,    
    job: 
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Job' 
        }
    ,
    pastExperiences: "String",
    references: "String",
    status: "String"
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);