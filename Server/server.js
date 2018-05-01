const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const routes = require('./routes/userRoutes');
var models = require('./sequelizeModels/models');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});

app.use('/ors/v1', routes);
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/ors/users', function (req, res) {
    var request = new db.Request();
    request.execute('getUsers', function (err, recordsets, returnValue, affected) {
        if (err) console.log(err);
        res.end(JSON.stringify(recordsets)); // Result in JSON format
    });
});

app.get('/ors/titles', function (req, res) {
       var request = new db.Request();
    request.execute('getTitles', function (err, recordsets, returnValue, affected) {
        if (err) console.log(err);
        res.end(JSON.stringify(recordsets)); // Result in JSON format
    });
});

app.get('/ors/orsFunctions', function (req, res) {
    var request = new db.Request();
    request.execute('getOrsFunctions', function (err, recordsets, returnValue, affected) {
        if (err) console.log(err);
        res.end(JSON.stringify(recordsets)); // Result in JSON format
    });
});

app.get('/ors/degrees', function (request, response, next) {
    models.degrees.findAll()
    .then(degrees => {
            const data = {
                error: "false",
                data: degrees
            };
            response.send(data);
            next();
        });
});

app.get('/ors/positions', function (request, response, next) {
    models.positions.findAll()
    .then(positions => {
            const data = {
                error: "false",
                data: positions
            };
            response.send(data);
            next();
        });
});

app.get('/ors/departments', function (request, response, next) {
    models.departments.findAll()
    .then(departments => {
            const data = {
                error: "false",
                data: departments
            };
            response.send(data);
            next();
        });
});

app.get('/ors/academicUnit', function (request, response, next) {
    models.AUs.findAll()
    .then(academicUnits => {
            const data = {
                error: "false",
                data: academicUnits
            };
            response.send(data);
            next();
        });
});

app.get('/ors/institutions', function (request, response, next) {
    models.institutions.findAll()
    .then(institutions => {
            const data = {
                error: "false",
                data: institutions
            };
            response.send(data);
            next();
        });
});