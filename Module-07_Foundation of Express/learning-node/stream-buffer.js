const http = require('http');
const fs = require('fs');
const { dirname } = require('path');

// creating a server using raw nodejs
const server = http.createServer();

// server listener
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET');

    // streaming file reading
    const readableStream = fs.createReadStream(__dirname + '/texts/read.txt')

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer);
    })

    readableStream.on("end", () => {
        res.statusCode = 200;
        res.end("Hello from world!")
    })

    readableStream.on("error", (error) => {
        console.log(error);
        res.statusCode = 500;
        res.end("something went wrong")
    })

})

server.listen(5000, () => {
    console.log(`server is listening on port 5000`);
})