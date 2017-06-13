import MovieServices from '../../services/movieService';

function HomeComponent(app){
  app.movieApp.controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope){

    MovieServices.getPopularData(app, 'movie', (results) => {
      $scope.homePopularMoviesData = results.results;
      $scope.$apply(); // refresh
    });

    $scope.selectItem = function(id, type) {
      MovieServices.getItemData(app, id, type, (item) => {
        $rootScope.currentItemDetails = item;
        $rootScope.currentItemDetails.type = type;
        console.log($rootScope.currentItemDetails);
        $rootScope.$broadcast('detailsSet', $rootScope.currentItemDetails);
        $scope.$apply(); // refresh
      });
    }

  }])
  .directive('homeDirective', function(){
    return {
      controller: 'HomeController',
      template: require('./templates/home.html')
    }
  });
}

export default {HomeComponent};
