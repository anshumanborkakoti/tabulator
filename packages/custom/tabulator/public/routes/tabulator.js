(function() {
    'use strict';

    function Tabulator($stateProvider) {
        $stateProvider.state('tabulator example page', {
            url: '/tabulator/example',
            templateUrl: 'tabulator/views/index.html'
        }).state('tabulator circles example', {
            url: '/tabulator/example/:circle',
            templateUrl: 'tabulator/views/example.html'
        });
    }

    angular
        .module('mean.tabulator')
        .config(Tabulator);

    Tabulator.$inject = ['$stateProvider'];

})();
