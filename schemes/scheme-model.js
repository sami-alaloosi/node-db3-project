const db = require('../data/connection')


// get all 
function find() {
    return db('schemes')
}

function findById (id) {
    return find().where({id}).first()
}

function findSteps (id) {
    return db("schemes")
    .join("steps", "steps.scheme_id", "schemes.id")
    .select(
      "steps.id",
      "steps.step_number",
      "steps.instructions",
      "schemes.scheme_name"
    );
}

function add(scheme){
    return find().insert(scheme)
    .then((id)=> findById(id))
}

function update(changes, id){
    return findById(id).update(changes)
    .then(()=> findById(id))
}

function remove(id){
    return findById(id).del()
}

module.exports = {find, findById, findSteps, add, update, remove}