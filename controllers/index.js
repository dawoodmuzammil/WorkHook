const users = require("../models/users");

module.exports = {
    async postRegister( req, res, next) {  
        var newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            dob: "1997-01-08",
            userType: req.body.userType,
            isStudent: true
        }                      
                
        let user = await users.create( newUser);
        
        successMSg = req.body.name;
        successMSg += " registered successfully!";
        res.send( successMSg);
    }
}