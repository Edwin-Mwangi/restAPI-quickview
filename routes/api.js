const express = require('express');
const router = express.Router();

//get ninja list from db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'})
})

//add a new ninja
router.post('/ninjas', function(req, res){
    //req data is posted from POSTMAN in viewport
    //from body parser to get req data
    console.log(req.body)
    res.send({
        type: 'POST',
        //to view the req data...in postman
        name: req.body.name,
        rank: req.body.rank
    })
})
//update nninja list
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'})
})
//delete a ninja
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'})
})

module.exports = router;
