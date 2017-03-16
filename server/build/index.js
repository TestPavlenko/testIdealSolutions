"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var repos = require('./reposlist/ReposList');
var server = express();
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
server.use(bodyParser.json());
server.use("/", express.static(__dirname + './../../public'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);
var PORT = 4000;
server.get('/', function (req, res) {
    res.render('index.html');
});
server.post('/getRepoList', repos.getReposList);
server.post('/getContributorList', repos.getContributorList);
server.listen(PORT, function () {
    console.log('Listening on localhost:' + PORT);
});
