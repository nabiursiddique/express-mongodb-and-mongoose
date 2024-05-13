// $group
db.test.aggregate([
    { $group: { _id: "$address.country", count: { $sum: 1 } } }
])


db.test.aggregate([
    { $group: { _id: "$address.country", showMeName: { $push: "$name" } } }
])

db.test.aggregate([
    { $group: { _id: "$address.country", showMeName: { $push: "$name" }, count: { $sum: 1 } } }
])

// if we want to get the all field
db.test.aggregate([
    { $group: { _id: "$address.country", showMeName: { $push: "$$ROOT" }, count: { $sum: 1 } } }
])


// we can use project to get what we needed
db.test.aggregate([
    // Stage 1
    {
        $group: {
            _id: "$address.country",
            count: { $sum: 1 },
            fullDoc: { $push: "$$ROOT" },
        }
    },
    // Stage 2
    {
        $project: {
            "fullDoc.name":1,
            "fullDoc.email":1,
            "fullDoc.phone":1
        }
    }
])