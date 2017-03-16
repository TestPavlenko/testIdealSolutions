/// <reference path="../declarations/node.d.ts" />
/// <reference path="../declarations/express.d.ts" />
/// <reference path="../declarations/body-parser.d.ts" />
/// <reference path="../declarations/request.d.ts" />
/// <reference path="../declarations/es6-promise.d.ts" />

import http = require('http');
import express = require("express");
import bodyParser = require("body-parser");
import repos = require('./reposlist/ReposList')
var server = express();
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
server.use(bodyParser.json());
server.use("/", express.static(__dirname + './../../public'));
server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

var PORT : number = 4000;

server.get('/', function (req : express.Request, res : express.Response) {
    res.render('index.html');
});

server.post('/getRepoList', repos.getReposList);

server.post('/getContributorList', repos.getContributorList);

server.listen(PORT, function () {
    console.log('Listening on localhost:' + PORT);
});