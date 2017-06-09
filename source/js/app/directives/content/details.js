function DetailsComponent(app) {
  app.movieApp.controller('DetailsController', ['$scope', function($scope){
    $scope.title = "Yeah";
  }])
  .directive('detailsDirective', function(){
    return {
      controller: 'DetailsController',
      template: require('./templates/details.html')
    }
  });
}

export default {DetailsComponent};
