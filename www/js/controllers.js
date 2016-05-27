angular.module('bollywood.controllers', [])

  .controller('HomeCtrl', function ($scope) {

    $scope.searchKey = "";

    $scope.clearSearch = function () {
      $scope.searchKey = "";

    }


    $scope.heroes = [{
      id: 'b396c2fd',
      name: 'Salman Khan'
    },
      {
        id: 'bdd53ba7',
        name: 'Shahrukh Khan'
      },
      {
        id: '0dcc2bbb',
        name: 'Amir Khan'
      },
      {
        id: 'e97ded72',
        name: 'Ranbir Kapoor'
      },
      {
        id: '9999',
        name: 'Surprise Me...'
      }];

    $scope.setMyHero = function(hero) {
      $scope.myHero = hero;
    }




  })
  .controller('MoviesCtrl', function ($scope, $stateParams, Movies, RandomMovies) {
    if ($stateParams.heroId === '9999') {
      RandomMovies.query({ year: '2016' }).$promise.then(function(data) {
        $scope.movies = data;
        $scope.movie = data[Math.floor(Math.random() * data.length)];

      });
    } else {
      Movies.query({ heroId: $stateParams.heroId }).$promise.then(function(data) {
        $scope.movies = data;
        $scope.movie = data[Math.floor(Math.random() * data.length)];
      });
    }

  })
  .controller('MovieDetailsCtrl', function($scope, $stateParams, Movie) {
    Movie.get({movieId: $stateParams.movieId}).$promise.then(function(data) {
      $scope.movie = data;
    });
  })
