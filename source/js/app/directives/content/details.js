import MovieServices from '../../services/movieService';

function DetailsComponent(app) {
  app.movieApp.controller('DetailsController', ['$scope', '$rootScope', '$filter', function($scope, $rootScope, $filter){
    $scope.$on('detailsSet', function (event, details) {
      $scope.details = details;
      $scope.type = details.type; //movie, tv or person
      $scope.title = details.title || details.original_name || details.name; //different prop depending on type: person, movie or tv.
      $scope.summary = details.overview || details.biography;

      let summaryListItemsArray = [];

      //Summary list items
      if(details.type === 'movie') {
        MovieServices.getItemCreditsData(app, details.id, details.type, (results) => {
          $scope.creditImageSize = $scope.posterImg92;
          $scope.creditCastData = results.cast;
          $scope.creditCrewData = results.crew;
          $scope.$apply(); // refresh
        });

        summaryListItemsArray = [
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
      }

      if(details.type === 'person') {
        MovieServices.getPersonMovieData(app, details.id, (results) => {
          $scope.personMoviePosterSize = $scope.posterImg92;
          $scope.personMovies = results.cast;
          $scope.$apply(); // refresh
        });

        MovieServices.getPersonTvData(app, details.id, (results) => {
          console.log(results.cast);

          $scope.personTVPosterSize = $scope.posterImg92;
          $scope.personTV = results.cast;
          $scope.$apply(); // refresh
        });

        summaryListItemsArray = [
          {
            name: 'birthday',
            label: 'DOB'
          },
          {
            name: 'place_of_birth',
            label: 'Place of birth'
          },
          {
            name: 'deathday',
            label: 'Date of death'
          }
        ];
      }

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
      $scope.backdropImg = $scope.stillImgOriginal + details.backdrop_path;
      $scope.posterPath = $scope.stillImgLarge + details.poster_path;
      $scope.profileImg = $scope.stillImgLarge + details.profile_path;
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
