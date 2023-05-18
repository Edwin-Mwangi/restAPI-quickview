const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//check geojson.org

//geolocation schema
//2dsphere & 2d is a mongo index property in geolocation
const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],//num array
        index: "2dsphere"//accounts for 3d when mapping
    }
})

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
    },
    //add geolocation data
    geometry: GeoSchema
});

//arg 'ninja' pluralized as a collection
//model used the Schema as arg
const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja;
