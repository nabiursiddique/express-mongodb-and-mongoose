// if we want to add a field in a document without effecting the original document we use addFields in aggregate but it does not affect the original document it's only add field for the existing pipeline.

db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { course: "Level 2" } },
    { $project: { name: 1, gender: 1, course: 1 } }
]);


db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { course: "Level 2", eduTech: "Programming hero" } },
    { $project: { name: 1, gender: 1, course: 1, eduTech: 1 } }
])


// If we want to make a new collection with our filtered data then we use $out. 
db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { course: "Level 2", eduTech: "Programming hero" } },
    { $project: { name: 1, gender: 1, course: 1, eduTech: 1 } },
    {$out: "course-students"}
])

// Here we are not using project so we will get all the data along with new addFields data
db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { course: "Level 2", eduTech: "Programming hero" } },
    {$out: "course-students"}
])


// if we don't want to create a new collection and just want to merge the new field to the existing data then we use $merge
db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { course: "Level 2", eduTech: "Programming hero" } },
    { $project: { name: 1, gender: 1, course: 1, eduTech: 1 } },
    { $merge: "test" }
])