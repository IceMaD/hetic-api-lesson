DetailsController = function($scope, $http, $stateParams) {


    $http.get('http://api.themoviedb.org/3/movie/'+ $stateParams.id +'?api_key='+API_KEY)
        .success(function(data, status, headers, config) {
            $scope.movie = data;
            console.log(data);
            // this callback will be called asynchronously
            // when the response is available
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

};

module.exports = ['$scope', '$http', '$stateParams', DetailsController];
