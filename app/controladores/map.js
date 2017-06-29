Desaprobacion : //Angular App Module and Controller
var mapApp = angular.module('mapApp', []);
//MapaArtes
mapApp.controller('MapArtesCtrl', function ($scope, $http) {
 /*
  var cities = [
            {
                  Ciudad : 'Arica',
                  Aprobacion : 0.0,
                  Desaprobacion: 10,
                  lat : -18.485489,
                  long : -70.291897
              },
              {
                  "Ciudad" : 'Antofalombia',
                  "Aprobacion" : 0.0,
                  "Desaprobacion": 10,
                  "lat" : -23.654726,
                  "long" : -70.396271
              }
          ];*/

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/12/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });
          });

//Bea
mapApp.controller('MapBeaCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/6/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion :  ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });
          });
mapApp.controller('MapCaneloCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/11/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion :  ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapGoicCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/5/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion :  ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapGuillerCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/4/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion: ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapJoseKastCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/8/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapKastCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/3/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });
          });

mapApp.controller('MapLarrainCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/10/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapMayolCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/7/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });
          });

mapApp.controller('MapNavarroCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/15/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });
          });

mapApp.controller('MapOminamiCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/14/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });
          });

mapApp.controller('MapOssandonCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/2/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapParisiCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/13/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });

mapApp.controller('MapPineraCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/1/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        console.log($scope.cities);

        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }
        console.log($scope.cities.length);
        for (i = 0; i < $scope.cities.length; i++){
          console.log($scope.cities[i]);
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
      });
   },function (error){
     console.log("SALUDOS!!!");

   });


mapApp.controller('MapSheaCtrl', function ($scope, $http) {

  $scope.cities=[];

  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/metricasCandidatos/9/aprobacionPromedioPorCiudad'
   }).then(function (data){
        $scope.cities=data.data;
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-30,-71),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

          var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.Ciudad
          });
          marker.content = '<div class="infoWindowContent">' + 'Aprobacion : ' + info.Aprobacion + '<br />' +'Desaprobacion : ' + info.Desaprobacion + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';

          google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
            marker.content);
            infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);
        }

        for (i = 0; i < $scope.cities.length; i++){
          createMarker($scope.cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
        }
   },function (error){

   });

          });
