(function() {
    'use strict';

    function Tabulator($http, $q) {
        return {
            name: 'tabulator',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/tabulator/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.tabulator')
        .factory('Tabulator', Tabulator);

    Tabulator.$inject = ['$http', '$q'];

})();
