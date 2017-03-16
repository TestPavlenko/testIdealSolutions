angular.module('TestApp.Common')
    .service('backendSrv', function ($http) {
        var self = this;
        self.post = post;

        function post(url, data) {
            return request({method: 'POST', url: url, data: data});
        }

        function request(options) {
            return $http(options)
                .then(function (results) {
                    return results.data;
                })
                .catch(function (error) {
                    throw error;
                })
        }
    });