const express = require("express");
const router = express.Router();

var webData = {webName: "Tutor4You"}

router.get('/', (req, res) => {
    res.render('index', webData);
});

router.get('/',function(req,res){
    res.render('index.ejs', webData)
});

router.get('/about',function(req,res){
    res.render('about.ejs', webData);
});

router.get('/register', function (req,res) {
    res.render('register.ejs', webData);                                                                     
});        

router.post('/registered', function (req,res) {
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!  We will send an email to you at ' + req.body.email);                                                                              
}); 

router.get('/addsubjects', function (req,res) {
    res.render('addsubjects.ejs', webData);                                                                     
});    

router.get('/subjects', function(req, res) {
    let sqlquery = "SELECT * FROM subjects";
    db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect('./'); 
        }
        let newData = Object.assign({}, webData, {availableSubjects:result});
        console.log(newData)
        res.render("subjects.ejs", newData)
     });
});

module.exports = router;
