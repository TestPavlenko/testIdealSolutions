angular.module('TestApp.Main')
    .directive('repos', function () {
        return {
            controller: function ($scope, $cookieStore, $state, ContextService) {

                $scope.renderList = function (reposList) {

                    var repos = JSON.parse(reposList);

                    if (Object.keys(ContextService.favorite).length > 0) {
                        repos.forEach(function (val) {
                            if (ContextService.favorite.hasOwnProperty(val.id)) {
                                val['favorite'] = ContextService.favorite[val.id];
                            }
                        })
                    }
                    $scope.reposList = repos;
                }

                $scope.showContributor = function (owner, repo) {
                    $state.go('contributor', {owner: owner, repos: repo});
                }

                $scope.addToFavotite = function (repos) {
                    if (repos.favorite) {
                        $scope.$parent.$parent.favorite.push(repos);
                        ContextService.favorite[repos.id] = repos.favorite;
                        $cookieStore.put(repos.id, repos.id);

                    } else {
                        var filtered = $scope.$parent.$parent.favorite.filter(function (val) {
                            return val.id !== repos.id;
                        });
                        ContextService.favorite[repos.id] = repos.favorite;
                        $scope.$parent.$parent.favorite = filtered;
                        $cookieStore.remove(repos.id);
                    }
                }


            },
            restrict: 'E',
            scope: {},
            templateUrl: 'src/testApp/main/templates/reposList.html',
            replace: false,
            link: function ($scope, element, attrs) {
                attrs.$observe('component', function (component) {
                    $scope.renderList(component);
                });
            }
        }

    });