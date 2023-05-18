const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

//get ninja list from db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'})
})

//add a new ninja
//next used in catch() to goto next middleware
router.post('/ninjas', function(req, res, next){
    //req data is posted from POSTMAN in viewport
    //from body parser to get req data
    console.log(req.body)
    // res.send({
    //     type: 'POST',
    //     //to view the req data...in postman
    //     name: req.body.name,
    //     rank: req.body.rank
    // })

    //post to db by instantiating Ninja model
    //option 1...save
    // var ninja = new Ninja(req.body)
    // ninja.save()//save to db

    //option 2...create(simpler)
    //create returns Promise that returns ninja
    //err handled check index.js for middleware 
    Ninja.create(req.body)
        .then(ninja => res.send(ninja))
        .catch(next)
})
//update ninja list
router.put('/ninjas/:id', function(req, res){
    //req.body is 2nd arg to update existing db doc
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(ninja => res.send(ninja))

    //ninja sent above is older version so to ensure new one
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => { 
        Ninja.findOne({_id: req.params.id})
            .then(ninja => res.send(ninja))
    });
});
//delete a ninja
router.delete('/ninjas/:id', function(req, res){
    // console.log(req.params.id);
    Ninja.findByIdAndRemove({_id: req.params.id})
        .then(ninja => res.send(ninja))//to DOM/POSTMAN 
});

module.exports = router;
