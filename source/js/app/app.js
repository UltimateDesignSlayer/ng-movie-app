var appConfig = {
  movieApp: angular.module('movieApp', []),
  apiKey: '6eec2a195b8611ad792849889f58cbc1',
  masterController: function() {
    this.movieApp.controller('MasterController', ['$scope', '$http', function($scope, $http){

      //api configuration needed to perform some jobs - https://developers.themoviedb.org/3/configuration/get-api-configuration
      $http.get('https://api.themoviedb.org/3/configuration?api_key=' + appConfig.apiKey)
        .then(function(response) {
          $scope.tmdbConfig = response;
          console.log("TMDB API config received. ", response)
        });

    }])
  }
}

export default {appConfig};
