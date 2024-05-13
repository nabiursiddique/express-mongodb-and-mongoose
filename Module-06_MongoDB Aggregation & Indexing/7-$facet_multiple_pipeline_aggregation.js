//* Using facet we can create multiple pipeline in a document 

db.test.aggregate([
    {
        $facet: {
            // Pipeline-1
            "friendsCount": [
                // Stage-1
                { $unwind: "$friends" },
                // Stage-2
                {
                    $group: {
                        _id: "$friends",
                        count: { $sum: 1 }
                    }
                }
            ],
            // Pipeline-2
            "educationCount": [
                // Stage-1
                { $unwind: "$education" },
                // Stage-2
                {
                    $group: {
                        _id: "$education",
                        count: { $sum: 1 }
                    }
                }
            ],
            // Pipeline-3
            "skillsCount": [
                // Stage-1
                { $unwind: "$skills" },
                // Stage-2
                {
                    $group: {
                        _id: "$skills",
                        count: { $sum: 1 }
                    }
                }
            ]
        }
    }
])