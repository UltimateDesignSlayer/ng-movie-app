import SearchComponent from './search';
import NavMenuComponent from './navMenu';

function HeaderComponent(app){
  SearchComponent.SearchComponent(app); //Child component of header
  NavMenuComponent.NavMenuComponent(app); //Child component of header
  app.controller('HeaderController', ['$scope', function($scope){

  }])
  .directive('headerDirective', function(){
    return {
      controller: 'HeaderController',
      template: require('./templates/header.html')
    }
  });
}

export default {HeaderComponent};
