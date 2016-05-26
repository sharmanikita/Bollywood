angular.module('bollywood.services', [])

.factory('Movies', function() {
      return {
        getMoviesByHero: function(id) {
          return {
            id: 101,
            name: 'Dilwale',
            heorId: 1
          }
        }
      }
});
