app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/component/home/home.html",
        controller : "homeController",
    })
    .when("/stego", {
        templateUrl : "app/component/stego/stegoView.html",
        controller : "stegoController"
    })
    $locationProvider.html5Mode(false);
});