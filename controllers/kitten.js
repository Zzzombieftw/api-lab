import { Kitten } from '../models/kittens.js'

export {
  index,
  show,
  create,
  update,
  deleteKitten as delete
}

function index(req, res) {
  Kitten.find({}, function(err, kitten) {
    res.status(200).json(kitten)
 })
}
function show(params) {
  Kitten.findById(req.params.id)
  .then(kitten =>{
      res.json(err)
  }) 
}

function create(params) {
  Kitten.create(req.body)
  .then(kitten =>{
      res.json(err)
  })
}

function update(params) {
  Kitten.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(kitten=>{
        res.json(err)
    })

}

function deleteKitten(params) {
  Kitten.findByIdAndDelete(req.params.id)
  .then(kitten=>{
      res.json(err)
  })
}