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
    res.send({type: 'PUT'})
})
//delete a ninja
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'})
})

module.exports = router;
