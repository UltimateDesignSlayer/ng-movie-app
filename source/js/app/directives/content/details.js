function DetailsComponent(app) {
  app.movieApp.controller('DetailsController', ['$scope', '$rootScope', '$filter', function($scope, $rootScope, $filter){
    $scope.$on('detailsSet', function (event, details) {
      $scope.details = details;
      $scope.type = details.type; //movie, tv or person
      $scope.title = details.title || details.original_name || details.name; //different prop depending on type: person, movie or tv.
      $scope.summary = details.overview || details.biography;

      //Summary list items
      let summaryListItemsArray = [
        {
          name: 'vote_average',
          label: 'TMDB rating'
        },
        {
          name: 'original_language',
          label: 'Original language'
        },
        {
          name: 'budget',
          label: 'Budget (US$)'
        },
        {
          name: 'revenue',
          label: 'Revenue (US$)'
        },
        {
          name: 'runtime',
          label: 'Runtime'
        }
      ];

      $scope.summaryListItems = [];
      summaryListItemsArray.forEach((item) => {
        let itemValue = details[item.name];
        if(item.name == 'budget' || item.name == 'revenue') {
          itemValue = $filter('currency')(itemValue, '$', 2);
        }

        if(details[item.name]) {
          $scope.summaryListItems.push({'label': item.label, 'value': itemValue, name: item.name});
        }
      });

      //Images
      $scope.backdropImg = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[3] + details.backdrop_path;
      $scope.posterPath = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[2] + details.poster_path;
      $scope.profileImg = $scope.tmdbConfig.data.images.base_url + $scope.tmdbConfig.data.images.still_sizes[2] + details.profile_path;
    });

  }])
  .directive('detailsDirective', function(){
    return {
      controller: 'DetailsController',
      template: require('./templates/details.html')
    }
  });
}

export default {DetailsComponent};
