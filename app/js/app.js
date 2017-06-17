var app = angular.module('voTweet', [
    'ngRoute', 'googlechart'
    ]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/vistaInicio.html',
      controller: 'controlCdtos'
    })

    .when('/vistaDetalleAprobacion', {
      templateUrl: 'views/vistaDetalleAprobacionPinera.html',
      controller: 'controlCdtos'
    })

    .when('/popup', {
      templateUrl: 'views/ventanaModal.html',
      controller: 'controlCdtos'
    })

    .when('/inicioCandidato',{
      templateUrl:'views/inicioCandidato.html',
      controller: 'controlCdtos'
    });
});
