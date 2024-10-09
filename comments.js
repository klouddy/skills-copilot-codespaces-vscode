// create web server
// npm install express
const express = require('express');
const app = express();
const PORT = 3000;

// read JSON data
// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// comments data
let comments = [
  { id: 1, author: 'John', content: 'Hello World!' },
  { id: 2, author: 'Jane', content: 'Hello, John!' },
  { id: 3, author: 'Tom', content: 'Hello, Jane!' }];