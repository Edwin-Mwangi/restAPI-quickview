const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//connect to mongodb..ninjago is db name(created if nonexistent)
mongoose.connect('mongodb://localhost/ninjago')
//if mongoose promise deprecated...we can override with global Promise
mongoose.Promise = global.Promise;

//set up express app
const app = express();

//set up public files...to view static files
app.use(express.static('public'));

//3rd party middleware(middleware is anything running b2n req and res)
//body parser used to acess data from POSt request..check post method in API
//comes b4 route Handler to attach json data to req obj b4 it gets there
app.use(bodyParser.json());

//route Handler
//initialize routes...routes imported directly as arg
//routes will be used inside /api dir ie '/api/ninjas'
app.use('/api', require('./routes/api'));

//error handling middleware.
//next(in catch) used to run this next middleware as err stops code 
app.use(function(err,req,res,next){
    //err is big obj with props such as message
    // console.log(err)
    res.status(422).send({error: err.message})
})

//listen for requests..on port provided by hosting platform or 4000
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests')
})