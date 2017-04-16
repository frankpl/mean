angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: "example/views/example.client.views.html"
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);