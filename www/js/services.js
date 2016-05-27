angular.module('bollywood.services', ['ngResource'])

.factory('Movies', function($resource) {
  return $resource('https://api.cinemalytics.com/v1/actor/:heroId/movies/?limit=5&auth_token=B547ED1E9251361042CF75186392829B');
})

  .factory('RandomMovies', function($resource) {
    return $resource('https://api.cinemalytics.com/v1/movie/year/:year/?auth_token=B547ED1E9251361042CF75186392829B');
  })
.factory('Movie', function($resource) {
    return $resource('https://api.cinemalytics.com/v1/movie/id/:movieId/?auth_token=B547ED1E9251361042CF75186392829B');
});
