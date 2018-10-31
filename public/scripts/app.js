var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,  $locationProvider) {
    $routeProvider
    .when("/dashboard", {
        templateUrl : "views/dashboard/index.html",
        controller : "indexCtrl as ctrl"
    })

    .when("/", {
        templateUrl : "views/home/index.html",
        controller : "indexCtrl as ctrl"
    })

    .otherwise({
        templateUrl : "views/404/index.html",
    });

    $locationProvider.hashPrefix('');

});
