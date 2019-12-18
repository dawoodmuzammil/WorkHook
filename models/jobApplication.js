const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({
    applicant: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ],
    company: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ],
    job: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Job' 
        }
    ],
    
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);