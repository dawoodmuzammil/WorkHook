const users = require("../models/users");

module.exports = {
    async getLogin( req, res, next) {
        res.render("index");
    },

    async postLogin( req, res, next) {
        var user = {
            email: req.body.email,
            password: req.body.password
        }
        
        if ( user.email === "admin@arcelik.com")
            // res.render("corporate/analytics");
            res.redirect("/corporate");
        else
            res.redirect("/jobs");
        // res.send( user);
        console.log(user);
        res.send("POST /loginzzz")
    },

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