Routing = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            controller: 'HomeController'
        })

};

module.exports = ['$stateProvider', '$urlRouterProvider', Routing];
