function SearchComponent(app){
  app.controller('SearchController', ['$scope', function($scope){
    

  }])
  .directive('searchDirective', function(){
    return {
      controller: 'SearchController',
      template: require('./templates/search.html')
    }
  });
};

export default {SearchComponent};
