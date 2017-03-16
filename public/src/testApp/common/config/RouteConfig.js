var app = angular.module('TestApp.Common', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('/', {
            url: "/",
            controller: 'MainCtrl',
            templateUrl: "/src/testApp/main/templates/main.html"
        })
        .state('contributor', {
            url: "/:owner/:repos",
            controller: 'ContributorCtrl',
            templateUrl: "/src/testApp/contributor/templates/contributors.html"
        })
}]);


