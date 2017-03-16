/**
 * Created by root on 16.03.17.
 */
angular.module('TestApp.Main')
    .directive('favoriteList', function () {
        return {
            controller: function ($scope,  $cookieStore, $state) {

                $scope.renderList = function (favoriteList) {
                    $scope.favoriteList = JSON.parse(favoriteList)
                }

                $scope.showContributor =function (owner, repo) {
                    $state.go('contributor', {owner: owner, repos: repo});
                }

            },
            restrict: 'E',
            scope: {},
            templateUrl: 'src/testApp/main/templates/favoriteList.html',
            replace: false,
            link: function ($scope, element, attrs) {

                attrs.$observe('favorite', function (favorite) {
                    $scope.renderList(favorite);
                });
            }
        }

    });