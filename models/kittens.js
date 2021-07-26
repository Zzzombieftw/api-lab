import mongoose from 'mongoose'
const Schema =mongoose.Schema 
export{
    Kitten
}

const kittenSchema = new Schema({
    name: {type: String, required: true},
    breed: {type: String, required: "Mixed"},
    age: {type: Number, default: 0}, 
 })
 
 const Kitten = mongoose.model('Kitten', kittenSchema)