'use strict';

// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'vistas/vistaAdministradorUsuario.html',
            controller  : 'mainController'
        }),
        .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
});

angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});
