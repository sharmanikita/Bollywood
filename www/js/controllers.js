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
  .controller('MoviesCtrl', function ($scope, $stateParams, Movies) {
	  var showMovie = function() {
		  if ($stateParams.heroId === '9999') {
			   Movies.getRandomMovie();
		  } else {
			  Movies.getMovieByHero($stateParams.heroId);
		  }
	  }
	  
	  showMovie();
	  
	  
	  $scope.getMoreMovie = function() {
		  showMovie();
	  }
  })
  .controller('MovieDetailsCtrl', function($scope) {
  })
