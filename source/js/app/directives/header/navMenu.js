function NavMenuComponent(app) {
  app.movieApp.controller('NavMenuController', ['$scope', function($scope){
    $scope.menuItems = [
      {
        name: 'Home'
      },
      {
        name: 'Reviews'
      },
      {
        name: 'Compare'
      }
    ];

  }])
  .directive('navMenu', function(){
    return {
      controller: 'NavMenuController',
      template: require('./templates/navMenu.html')
    }
  });
}

export default {NavMenuComponent}
