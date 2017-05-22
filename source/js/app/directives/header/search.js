function SearchComponent(app){

  app.movieApp.controller('SearchController', ['$scope', '$http', function($scope, $http){

    $scope.searchActive = function(isFocus) {
      var $searchWrapper = $('.ma-search');
      if(isFocus) {
        $searchWrapper.addClass('ma-search--search-state');
        $scope.isSearchActive = true;
      }

      if(!isFocus) {
        $searchWrapper.removeClass('ma-search--search-state');
        $scope.searchQuery = '';
        $scope.searchResults = [];
        $scope.isSearchActive = false;
      }
    }

    // selectResult, searchResultGet and searchGet need to go into a service. Might be reused in the compare page.
    function searchResultGet(query) {
      //MULTI search: this searches movies, tv-shows and people
      $http.get('https://api.themoviedb.org/3/search/multi?api_key=' + app.apiKey + '&query=' + query)
        .then(function(response) {
          $scope.searchResults = response.data.results;
          $scope.searchResultImgPath = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[0];
          console.log($scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[0] + response.data.results[0].poster_path);

          // return response.data;
        });
    }

    $scope.searchGet = function() {
      searchResultGet($scope.searchQuery);
    }

    $scope.selectResult = function(id, type) {
      //Get full data of movie/tv show/person clicked in results
      $http.get('https://api.themoviedb.org/3/' + type + '/' + id + '?api_key=' + app.apiKey)
        .then(function(response) {
          console.log(response);
          $scope.searchActive(false);
          // return response.data;
        });
    }
  }])
  .directive('searchDirective', function(){
    return {
      controller: 'SearchController',
      template: require('./templates/search.html')
    }
  });
};

export default {SearchComponent};
