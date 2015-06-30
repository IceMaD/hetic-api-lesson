Routing = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "web/partial/home.html",
            controller: 'HomeController'
        })

};

module.exports = ['$stateProvider', '$urlRouterProvider', Routing];
