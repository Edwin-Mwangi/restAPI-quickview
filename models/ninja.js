const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//ninja Schema definining model Structure

const NinjaSchema = new Schema({
    //Obj literal unecessary unless multiple properties
    name: {
        type:String,
        required: [true, 'Name is required']
    },
    rank: {
        type: String,
    },
    availability: {
        type: Boolean,
        default: false
    }
    //add geolocation data later
});

//arg 'ninja' pluralized as a collection
//model used the Schema as arg
const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja;
