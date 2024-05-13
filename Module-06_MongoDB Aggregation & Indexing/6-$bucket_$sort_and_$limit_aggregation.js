//***** use of bucket*****
//todo: with the help of bucket we can set boundary. Here we have made a boundary where age of 20 will be in a boundary, age of 40 will be in a boundary, age of 60 will be in a boundary and age of 80 will be in an boundary and rest of all will be in a boundary.

//* First use case
db.test.aggregate([
    // stage-1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80 er uporer bura gula",
            output: {
                count: { $sum: 1 },
                karakaraAse: { $push: "$$ROOT" }
            }
        }
    }
]);

//* Another use case
db.test.aggregate([
    // stage-1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "80 er uporer bura gula",
            output: {
                count: { $sum: 1 },
                karakaraAse: { $push: "$$ROOT" }
            }
        }
    },
    // stage-2
    {
        $sort: { count: -1 }
    },
    // stage-3
    {
        $limit: 2
    },
    // stage-4
    {
        $project: {
            count: 1
        }
    }
])

