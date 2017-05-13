'use strict';


// Declare app level module which depends on filters, and services
angular.module('voTweet', [
  'ngRoute',
  'voTweet.filters',
  'voTweet.services',
  'voTweet.directives',
  'voTweet.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'view/vistaAdministrador.html', controller: 'listUsuariosCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
