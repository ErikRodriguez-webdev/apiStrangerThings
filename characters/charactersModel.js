const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function add(character) {
  return db("characters").insert(character);
}

function find() {
  return db("characters");
}

function findById(id) {
  return db("characters").where({ id });
}

function update(changes, id) {
  return db("characters")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("characters")
    .where({ id })
    .del();
}
