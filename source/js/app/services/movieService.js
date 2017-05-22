function MovieService(app) {
  return app.movieApp.factory('movieService', ['$http', function($http) {
    function searchResultsRequest(query) {
      $http.get('https://api.themoviedb.org/3/search/movie?api_key=' + app.apiKey + '&query=' + query)
        .then(function(response) {
          console.log(response.data);
          return response.data;
        });
    }

    return {
      getSearchResults: function(query) {
        return searchResultsRequest(query);
      }
    };
  }]);
}

export default {MovieService};
