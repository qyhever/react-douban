const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/in_theaters', (req, res, next) => {
  const url = 'http://api.douban.com/v2/movie/in_theaters';
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
});

app.get('/getMovieDetail/:id', (req, res, next) => {
  const id = req.params.id;
  const url = `http://api.douban.com/v2/movie/subject/${id}`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
});

app.listen(3000, () => {
  console.log('running...');
});