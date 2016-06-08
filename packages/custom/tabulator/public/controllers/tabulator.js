(function() {
    'use strict';

    /* jshint -W098 */

    function TabulatorController($scope, Global, Tabulator, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'tabulator'
        };

        $scope.checkCircle = function() {
            Tabulator.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.tabulator')
        .controller('TabulatorController', TabulatorController);

    TabulatorController.$inject = ['$scope', 'Global', 'Tabulator', '$stateParams'];

})();
