angular.module('bollywood.controllers', [])

  .controller('HomeCtrl', function ($scope) {

    $scope.searchKey = "";

    $scope.clearSearch = function () {
      $scope.searchKey = "";

    }

    $scope.heroes = [{
      id: '1',
      name: 'Salman Khan'
    },
      {
        id: '2',
        name: 'Shahrukh Khan'
      },
      {
        id: '3',
        name: 'Amir Khan'
      },
      {
        id: '4',
        name: 'Ranbir Kapoor'
      },
      {
        id: '5',
        name: 'Surprise Me...'
      }];

    $scope.setMyHero = function(hero) {
      $scope.myHero = hero;
    }




  })

  .controller('EmployeeDetailCtrl', function($scope, $stateParams, Movies) {
    console.log('details');
    $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
  })

  .controller('MoviesCtrl', function ($scope, $stateParams, Movies) {
    $scope.movie = Movies.getMoviesByHero($stateParams.heroId);
  });
