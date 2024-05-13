//* Indexing, COLLSCAN Vs IXSCAN
// COLLSCAN is searching page by page for an element
// IXSCAN is searching by looking at the index (it is faster)

//? we create index so that we can find data quickly 

db.getCollection("massive-data").createIndex({ email: 1 })
