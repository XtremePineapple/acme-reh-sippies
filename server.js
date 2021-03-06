console.log('server.js')

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/dist',   express.static(path.join(__dirname, 'dist'  )));

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3002;

db.sink()
  .then(()=> {
    app.listen(port, ()=> {
      console.log(`listening on port ${port}`)
    });
  });