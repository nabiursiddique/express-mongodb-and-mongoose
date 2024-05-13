//*** Explore Compound Index And Text Index 

// text indexing
db.getCollection("massive-data").createIndex({ about: "text" })
db.getCollection("massive-data").find({ $text: { $search: "dolor" } })

