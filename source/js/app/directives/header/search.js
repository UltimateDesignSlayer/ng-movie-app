import MovieServices from '../../services/movieService';

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

    $scope.searchGet = function() {
      MovieServices.getSearchResults(app, $scope.searchQuery, (results) => {
        $scope.searchResults = results.results;
        $scope.searchResultImgPath = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[0];
        $scope.$apply(); // refresh
      });
    }

    $scope.selectResult = function(id, type) {
      MovieServices.getItemData(app, id, type, (item) => {
        console.log(item);
        $scope.searchActive(false);
        $scope.$apply(); // refresh
      });

      // //Get full data of movie/tv show/person clicked in results
      // $http.get('https://api.themoviedb.org/3/' + type + '/' + id + '?api_key=' + app.apiKey)
      //   .then(function(response) {
      //     console.log(response);
      //     $scope.searchActive(false);
      //     // return response.data;
      //   });
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
