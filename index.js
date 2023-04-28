const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');

const app = express();

app.use(morgan('dev'));
app.use(express.json());


//endpoint to get all users. In this API users are allowed to query using gender and isVerified field.
app.get('/api/users', async (req, res) => {
  //getting the data from filesystem
  let data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));

  //if there is no query then we are sending the whole data to the user
  if (!Object.keys(req.params).length && !Object.keys(req.query).length) {
    return res.json({ results: data.length, data: data });
  }

  //if there is any query then I create a logic and then send response to the users through query.
  const gender = req.query.gender ?? null;
  const isVerified = req.query.isVerified ?? null;

  let filteredData = data;

  if (gender !== null) {
    filteredData = filteredData.filter(user => user.gender === gender);
  }
  if (isVerified !== null) {
    filteredData = filteredData.filter(user => user.isVerified === (isVerified === 'true'));
  }
  if (gender && isVerified) {
    filteredData = data.filter(user => user.isVerified && user.gender === gender);
  }
  //send final response
  return res.json({ results: filteredData.length, data: filteredData });
});

//Endpoint to stream data
app.get('/api/users/stream', async (req, res) => {
  //Created a read stream
  const stream = new Readable({
    read() {
      try {
        //getting the data from our file and pushing the chunks to the pipe
        let data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8');
        this.push(data);
        this.push(null);
      } catch (error) {
        //handle if there is any error
        this.emit('error', error);
      }
    },
  });

  //setting the header as json as the user/client get the response in json format
  res.setHeader('Content-Type', 'application/json');

  //stream data
  stream.pipe(res);
});

//not found handler
app.all('*', (req, res) => {
  res.json('Your requested url was not found');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is alive on PORT:${PORT}`));
