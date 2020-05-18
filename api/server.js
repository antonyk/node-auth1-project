const express = require('express');
const server = express();

const apiRouter = require('express').Router();
server.use('/api', apiRouter);

const port = process.env.PORT || 5000;
function run() {
  return server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
}

module.exports = run;
