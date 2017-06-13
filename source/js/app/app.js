var appConfig = {
  movieApp: angular.module('movieApp', ['ui.router']),
  apiKey: '6eec2a195b8611ad792849889f58cbc1',
  masterController: function() {
    this.movieApp.controller('MasterController', ['$scope', '$http', function($scope, $http){

      //api configuration needed to perform some jobs - https://developers.themoviedb.org/3/configuration/get-api-configuration
      $http.get('https://api.themoviedb.org/3/configuration?api_key=' + appConfig.apiKey)
        .then(function(response) {
          $scope.tmdbConfig = response;
          $scope.stillImgSmall = response.data.images.base_url + response.data.images.still_sizes[0];
          $scope.stillImgMedium = response.data.images.base_url + response.data.images.still_sizes[1];
          $scope.stillImgLarge = response.data.images.base_url + response.data.images.still_sizes[2];
          $scope.stillImgOriginal = response.data.images.base_url + response.data.images.still_sizes[3];

          $scope.posterImg92 = response.data.images.base_url + response.data.images.poster_sizes[0];
          $scope.posterImg154 = response.data.images.base_url + response.data.images.poster_sizes[1];
          $scope.posterImg185 = response.data.images.base_url + response.data.images.poster_sizes[2];
          $scope.posterImg342 = response.data.images.base_url + response.data.images.poster_sizes[3];
          $scope.posterImg500 = response.data.images.base_url + response.data.images.poster_sizes[4];
          $scope.posterImg780 = response.data.images.base_url + response.data.images.poster_sizes[5];
          $scope.posterImgOriginal = response.data.images.base_url + response.data.images.poster_sizes[6];
          console.log("TMDB API config received. ", response)
        });

    }]);

    this.movieApp.config(function($stateProvider) {
      var details = {
        name: 'details',
        url: '/details',
        template: '<details-directive></details-directive>'
      }

      var home = {
        name: 'home',
        url: '/',
        template: '<home-directive></home-directive>'
      }

      // If not found, just send user to homepage.
      var catchAll = {
        name: 'catchAll',
        url: '{path:.*}',
        template: '<home-directive></home-directive>'
      }

      $stateProvider.state(details);
      $stateProvider.state(home);
      $stateProvider.state(catchAll);
    });
  }
}

export default {appConfig};
