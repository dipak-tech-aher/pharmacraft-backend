const express = require('express')
const dotenv = require('dotenv')
require('dotenv').config();
var cors = require('cors');
const app = express()
const port = 8000
app.use('/public',express.static('public'))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
var corsOptions = {
  origin:'*',
  methods: 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
  allowedHeaders: [ 'Content-Type', 'Authorization' ]
};
app.use(cors(corsOptions));
const mongoose = require("mongoose");

// const routes = require("./app/routes")

app.use(express.json());
// app.use("/api",routes);

mongoose.connect(
    process.env.MONGODB_URL,
    {
      dbName: process.env.DBNAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log('err--->',err) : console.log(
        `Connected to ${process.env.DBNAME} database`)
  );


app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('./app/routes/login.routes.js')(app);
require('./app/routes/invoice.routes.js')(app);
require('./app/routes/company.routes.js')(app);
require('./app/routes/bank.routes.js')(app);
require('./app/routes/buyer.routes.js')(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})