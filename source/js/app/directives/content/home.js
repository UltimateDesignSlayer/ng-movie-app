function HomeComponent(app){
  app.movieApp.controller('HomeController', ['$scope', function($scope){
    $scope.title = "HOMEPAGE";
  }])
  .directive('homeDirective', function(){
    return {
      controller: 'HomeController',
      template: require('./templates/home.html')
    }
  });
}

export default {HomeComponent};
