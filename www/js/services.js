angular.module('bollywood.services', ['ngResource'])

  .factory('Movies', function ($resource, $rootScope) {

    var moviesList = [];

    var years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];

    var movies = $resource('https://api.cinemalytics.com/v1/movie/year/:year/?auth_token=B547ED1E9251361042CF75186392829B');

    var movieByHero = $resource('https://api.cinemalytics.com/v1/actor/:heroId/movies/?limit=5&auth_token=B547ED1E9251361042CF75186392829B');

    var movie;

    return {
      getMovieByHero: function (heroId) {
        return movieByHero.query({heroId: heroId}).$promise.then(function (data) {
          moviesList = data;
          $rootScope.movie = moviesList[Math.floor(Math.random() * moviesList.length)];
        });
      },

      getRandomMovie: function () {
        movies.query({year: years[Math.floor(Math.random() * years.length)]}).$promise.then(function (data) {
          moviesList = data;
          $rootScope.movie = moviesList[Math.floor(Math.random() * moviesList.length)];
        });
      }
    }
  })
