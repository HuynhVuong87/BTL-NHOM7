app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/component/home/home.html",
        controller : "homeController",
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});