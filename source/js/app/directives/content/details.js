function DetailsComponent(app) {
  app.movieApp.controller('DetailsController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.$on('detailsSet', function (event, details) {
      $scope.details = details;
      $scope.type = details.type; //movie, tv or person
      $scope.title = details.title || details.original_name || details.name; //different prop depending on type: person, movie or tv.
      $scope.summary = details.overview || details.biography;
      $scope.backdropImg = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[3] + details.backdrop_path;
      $scope.posterPath = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[2] + details.poster_path;
      $scope.profileImg = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[2] + details.profile_path;
    });

  }])
  .directive('detailsDirective', function(){
    return {
      controller: 'DetailsController',
      template: require('./templates/details.html')
    }
  });
}

export default {DetailsComponent};
