//!Note: $unwind make multiple elements from an array but doesn't change the id of the object all id will be same

//* Example-01 of $unwind
db.test.aggregate([
    // stage-1
    {
        $unwind: "$friends"
    },
    // stage-2
    {
        $group: {
            _id: "$friends",
            count: { $sum: 1 }
        }
    }
]);


//* Example-02 of $unwind
//? Here first we are dividing the array using $unwind then making group according the interests of that age group

db.test.aggregate([
    // Stage-1
    {
        $unwind: "$interests"
    },
    // Stage-2
    {
        $group: {
            _id: "$age",
            interestPerAge: { $push: "$interests" }
        }
    }
]) 