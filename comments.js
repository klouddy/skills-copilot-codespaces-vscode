// create web server
const express = require('express');
const app = express();
const port = 3000;

// require the comments module
const comments = require('./comments');

// serve static files
app.use(express.static('public'));

// serve the comments module
app.use('/comments', comments);

// start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});