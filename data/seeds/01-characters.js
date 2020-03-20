exports.seed = function(knex) {
  return knex("characters").insert([
    {
      name: "Eleven",
      age: 12,
      city: "Hawkins"
    },
    {
      name: "Mike Wheeler",
      age: 12,
      city: "Hawkins"
    },
    {
      name: "Dustin Henderson",
      age: 13,
      city: "Hawkins"
    },
    {
      name: "Nancy Wheeler",
      age: 17,
      city: "Hawkins"
    },
    {
      name: "Jonathan",
      age: 17,
      city: "Hawkins"
    }
  ]);
};
