const express = require('express');
const router = express.Router();

//get ninja list from db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'})
})

//add a new ninja
router.post('/ninjas', function(req, res){
    //from body parser to get req data
    console.log(req.body)
    res.send({type: 'POST'})
})
//update nninja list
router.put('/ninjas', function(req, res){
    res.send({type: 'PUT'})
})
//delete a ninja
router.delete('/ninjas', function(req, res){
    res.send({type: 'DELETE'})
})

module.exports = router;
