angular.module('TestApp.Contributor')
    .controller('ContributorCtrl', function ($scope, $stateParams, backendSrv, $state) {
        function activateContext() {

            var reposDetails = {};
            reposDetails['owner'] = $stateParams.owner;
            reposDetails['repos'] = $stateParams.repos;

            backendSrv.post('/getContributorList', reposDetails
            ).then(function (data) {
                if (!data.data) {
                    $scope.contributorList = data;
                } else {
                    $scope.dataNotAvailable = true;
                }
            });

        }

        activateContext();

        $scope.back = function () {
            $state.go('/');
            $scope.$apply();
        }


    });