// Create web server
// Create a web server that listens on port 3000 and serves the content of the comments.json file.

// If the file is not found, the server should respond with a 500 status code and the message "Internal Server Error".

// Use the readFile function from the fs module to read the file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});