angular.module('TestApp.Main')
    .controller('MainCtrl', function ($scope, ContextService, backendSrv, $cookieStore) {

        $scope.active = $cookieStore.get('lastActive') || false;

        $scope.goToRepos = function () {
            $scope.active = false;
            $cookieStore.put('lastActive', $scope.active);
        }

        $scope.goToFavorite = function () {
            $scope.active = true;
            $cookieStore.put('lastActive', $scope.active);
        }

        function activateContext() {
            $scope.userData = {};
            $scope.userData['owner'] = 'angular'
            $scope.favorite = [];
            backendSrv.post('/getRepoList', $scope.userData).then(function (data) {
                data.forEach(function (val) {
                    if($cookieStore.get(val.id)){
                        val['favorite'] = true;
                        $scope.favorite.push(val)
                    }
                })
                $scope.component = data;
            });

        }
        activateContext();
    });