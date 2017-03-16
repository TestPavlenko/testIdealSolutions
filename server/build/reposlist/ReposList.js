"use strict";
var Promise = require('promise');
var _ = require('lodash');
var request = require("request");
var GitHubQuery = (function () {
    function GitHubQuery(url) {
        this.url = url;
        this.headers = { 'user-agent': 'node.js' };
    }
    return GitHubQuery;
}());
function getReposList(req, res) {
    var repos;
    var q = new GitHubQuery('https://api.github.com/users/' + req.body.owner + '/repos');
    var getReposData = new Promise(function (resolve, reject) {
        request(q, function (error, response, body) {
            repos = JSON.parse(body) || {};
            resolve(repos);
        });
    });
    getReposData.then(function (data) {
        res.send(data);
    });
}
exports.getReposList = getReposList;
function getContributorList(req, res) {
    var repos;
    var q = new GitHubQuery('https://api.github.com/repos/' + req.body.repos + '/' + req.body.owner + '/contributors');
    var getContributorsData = new Promise(function (resolve, reject) {
        request(q, function (error, response, body) {
            if (!_.isEmpty(body)) {
                repos = JSON.parse(body);
                resolve(repos);
            }
            else {
                repos = {
                    data: "Data not available"
                };
                resolve(repos);
            }
        });
    });
    getContributorsData.then(function (data) {
        res.send(data);
    });
}
exports.getContributorList = getContributorList;
