const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    jobTitle: String,
    location: String,
    author: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Company' 
        }
    ],
    // author: String,
    createdAt: Date,
    description: String,
    preferredSkills: String,
    deadline: Date
});

module.exports = mongoose.model('Job', JobSchema);