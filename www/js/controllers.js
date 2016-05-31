angular.module('bollywood.controllers', [])

  .controller('HomeCtrl', function ($scope) {

    $scope.searchKey = "";

    $scope.clearSearch = function () {
      $scope.searchKey = "";

    }


    $scope.heroes = [{
      id: 'b396c2fd',
      name: 'Salman Khan',
      pic: 'https://s3-ap-southeast-1.amazonaws.com/cinemalytics/person/DFD1E5E17535E6091829DBBD7F78D545.jpg'
    },
      {
        id: 'bdd53ba7',
        name: 'Shahrukh Khan',
        pic: 'https://s3-ap-southeast-1.amazonaws.com/cinemalytics/person/6BE2F15208E8041CC897FA468AA44512.jpg'
      },
      {
        id: '0dcc2bbb',
        name: 'Amir Khan',
        pic: 'https://s3-ap-southeast-1.amazonaws.com/cinemalytics/person/FDFD62EE33839A948E7CB371B5B949D4.jpg'
      },
      {
        id: 'e97ded72',
        name: 'Ranbir Kapoor',
        pic : 'https://s3-ap-southeast-1.amazonaws.com/cinemalytics/person/A4501C1E4CC1D360715AF0ABEA0ABE6C.jpg'
      },
      {
        id: '9999',
        name: 'Surprise Me...',
        pic: '../images/random.png'
      }];

    $scope.setMyHero = function (hero) {
      $scope.myHero = hero;
    }


  })
  .controller('MoviesCtrl', function ($scope, $stateParams, Movies) {
    var showMovie = function () {
      if ($stateParams.heroId === '9999') {
        Movies.getRandomMovie();
      } else {
        Movies.getMovieByHero($stateParams.heroId);
      }
    }

    showMovie();


    $scope.getMoreMovie = function () {
      showMovie();
    }
  })
  .controller('MovieDetailsCtrl', function ($scope) {
  })
