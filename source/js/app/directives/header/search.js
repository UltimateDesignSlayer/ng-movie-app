import MovieServices from '../../services/movieService';

function SearchComponent(app){

  app.movieApp.controller('SearchController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
    $rootScope.currentItemDetails = {};

    $scope.searchActive = function(isFocus) {
      var $searchWrapper = $('.ma-search');
      if(isFocus) {
        $searchWrapper.addClass('ma-search--search-state');
        $(document.body).addClass('search-active');
        $scope.isSearchActive = true;
      }

      if(!isFocus) {
        $searchWrapper.removeClass('ma-search--search-state');
        $(document.body).removeClass('search-active');
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
        $rootScope.currentItemDetails = item;
        $rootScope.currentItemDetails.type = type;
        console.log($rootScope.currentItemDetails);
        $scope.$broadcast('detailsSet', $rootScope.currentItemDetails);
        $scope.searchActive(false);
        $scope.$apply(); // refresh
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
