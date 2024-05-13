//****** Same operation in two method normal and aggregation *****

//! using normal system
db.test.find({});
//* using aggregate
db.test.aggregate([])


//! using normal system
db.test.find({
    gender: "Male"
});

//* using aggregate 
db.test.aggregate([
    { $match: { gender: "Male" } }
])

//! using normal system
db.test.find({
    gender: "Male",
    age: { $lt: 30 }
})

//* same thing using aggregate
db.test.aggregate([
    { $match: { gender: "Male", age: { $lt: 30 } } }
])


//! using normal system
db.test.find({
    gender: "Male",
    age: { $lt: 30 }
}).project({
    name: 1,
    gender: 1,
    age: 1
})

//* same thing using aggregate 
db.test.aggregate([
    { $match: { gender: "Male", age: { $lt: 30 } } },
    { $project: { name: 1, gender: 1, age: 1 } }
])

