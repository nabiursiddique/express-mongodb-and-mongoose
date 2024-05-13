//! Note: By using null in _id we target all the elements 

//* For total salary of all the field 
db.test.aggregate([
    //stage 1
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" }
        }
    }
]);

//* If we want the max salary
db.test.aggregate([
    //stage 1
    {
        $group: {
            _id: null,
            maxSalary: { $max: "$salary" }
        }
    }
]);

//* If we want the min salary
db.test.aggregate([
    //stage 1
    {
        $group: {
            _id: null,
            minSalary: { $min: "$salary" }
        }
    }
]);

//* If we want average salary
db.test.aggregate([
    //stage 1
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" },
            avgSalary: { $avg: "$salary" }
        }
    }
]);


//* Range between max and min salary
db.test.aggregate([
    //stage-1
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" },
            avgSalary: { $avg: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" }
        }
    },
    //stage-2
    {
        $project: {
            totalSalary: 1,
            maxSalary: 1,
            minSalary: 1,
            averageSalary: "$avgSalary",
            rangeBetweenMaxAndMin: { $subtract: ["$maxSalary", "$minSalary"] }
        }
    }
]) 