import express = require("express");
var Promise = require('promise');
var _ = require('lodash');
import request = require("request");


class GitHubQuery {
    url: string;
    method: any;
    headers: any;
    constructor(url: string) {
        this.url = url;
        this.headers = {'user-agent': 'node.js'};
    }
}

export function getReposList(req: express.Request, res: express.Response) {
    var repos: any;
    var q = new GitHubQuery(
        'https://api.github.com/users/' + req.body.owner + '/repos'
    );


    var getReposData = new Promise(function (resolve, reject) {
        request(q, function (error, response, body) {
            repos = JSON.parse(body) || {};
            resolve(repos);
        });
    });
    getReposData.then(function (data) {
        res.send(data)
    })

}

export function getContributorList(req: express.Request, res: express.Response) {
    var repos: any;
    var q = new GitHubQuery(
        'https://api.github.com/repos/' + req.body.repos + '/' + req.body.owner + '/contributors'
    );
    var getContributorsData = new Promise(function (resolve, reject) {
        request(q, function (error, response, body) {
            if (!_.isEmpty(body)) {
                repos = JSON.parse(body);
                resolve(repos);
            }
            else {
                repos = {
                    data: "Data not available"
                }
                resolve(repos);
            }
        });
    });
    getContributorsData.then(function (data) {
        res.send(data)
    })
}




