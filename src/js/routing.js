Routing = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "web/partial/home.html",
            controller: 'HomeController'
        })
        .state('details', {
            url: "/details/:id",
            templateUrl: "web/partial/details.html",
            controller: 'DetailsController'
        })

};

module.exports = ['$stateProvider', '$urlRouterProvider', Routing];
