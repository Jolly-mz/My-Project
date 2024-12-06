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

router.post('/subjectadded', function (req,res) {
    // saving data in database
    let sqlquery = "INSERT INTO subjects (name, level, price, hour) VALUES(?,?,?,?)";
    // execute sql query
    let newrecord = [req.body.name, req.body.level, req.body.price, req.body.hour];
    db.query(sqlquery, newrecord, (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      else {
        res.send(' The Subject is added to database, Name: '
                  + req.body.name + ' Level: '+ req.body.level + ' Price: '+ req.body.price + ' Hour: '+ req.body.hour);
      }
    });
}); 

router.get('/search',function(req,res){
    res.render("search.ejs", webData);
});

router.get('/searchresult', function (req, res) {
    res.send("You searched for: " + req.query.keyword);
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
