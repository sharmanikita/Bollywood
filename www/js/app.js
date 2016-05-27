// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('bollywood', ['ionic', 'bollywood.controllers', 'bollywood.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .state('movies', {
      url: '/movies/:heroId',
      templateUrl: 'templates/movies.html',
      controller: 'MoviesCtrl'
    })
    .state('movieDetails', {
      url: '/movieDetails/:movieId',
      templateUrl: 'templates/movieDetails.html',
      controller: 'MovieDetailsCtrl'
    })
/*
    .state('employee', {
      url: '/employees/:employeeId',
      templateUrl: 'templates/employee-detail.html',
      controller: 'EmployeeDetailCtrl'
    })

    .state('reports', {
      url: '/employees/:employeeId/reports',
      templateUrl: 'templates/employee-reports.html',
      controller: 'EmployeeReportsCtrl'
    });*/

  $urlRouterProvider.otherwise('/home');

});
