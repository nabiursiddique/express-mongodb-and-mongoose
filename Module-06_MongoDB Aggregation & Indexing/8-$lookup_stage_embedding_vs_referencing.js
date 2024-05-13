//todo: $lookup stage embedding vs referencing

// with lookup we connect two collection in a database using referencing
db.orders.aggregate([
    {
        $lookup: {
            from: "test",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }
])