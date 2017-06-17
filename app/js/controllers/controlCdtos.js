
app.controller('controlCdtos',function ($scope,$http, servAprobacionN) {

  //$scope.candidatos=  ServCandidatos.getCandidatos();
  //console.log(candidatos);
  $scope.aprobacionN = servAprobacionN.getAprobacion();
  console.log($scope.aprobacionN);

  $scope.candidatos=[];
  $scope.candidatoActivo=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/restfull-war/webresources/com.voto.jaxrs.candidato'
   }).then(function (data){
        $scope.candidatos=data.data;
   },function (error){

   });


  $scope.add=function () {
  	var nuevoCandidato={
  	  "cdto_nombre":$scope.Modelcdto_nombre,
      "pdto_id": $scope.Modelpdto_id,
      "cdto_cuenta_twitter": $scope.Modelcdto_cuenta_twitter,
      "cdto_fecha_nacimiento": $scope.Modelcdto_fecha_nacimiento,
      "cdto_edad":$scope.Modelcdto_edad,
      "cdto_imagen": $scope.Modelcdto_imagen
  	};

  	$scope.candidatos.push(nuevoCandidato);
  	$scope.Modelcdto_nombre='';
  	$scope.Modelpdto_id='';
  	$scope.Modelcdto_cuenta_twitter='';
  	$scope.Modelcdto_fecha_nacimiento='';
  	$scope.Modelcdto_edad='';
  	$scope.Modelcdto_imagen='';
  };

  $scope.loadActivo=function(idCandidato){
      $scope.candidatoActivo=idCandidato;
  }



  $scope.delete=function ($index){
  	$scope.candidatos2.splice($scope.candidatos2.indexOf($index),1);
  };

  /*
  app.factory("LoadChart", function ($http, $q){

    return function(){
      var deferedobject = $q.defer();
      $http.post('/loadFunction').success(function(data){
        deferedobject.resolve({data:data});
      }).error(function(){
        deferedobject.resolve({data: false});
      });
      return deferedobject.promise;
    }

  });

  app.directive("chart2", function(LoadChart){
      return {
        restrict: 'A',
        link: function ($scope, $elm, $attr){
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'header');
          data.addColumn('number', 'Count');

          var result= LoadChart();
          result.then(function(output){

            angular.forEach(output.data, function(value,key){
              data.addRow([value.name, value.count]);
            });

            var options = {
              'title':'Title',
              'width' : 500,
              'height': 500
            }
            var chart = new google.visualization.PieChart($elm[0]);
            chart.draw(data, options);
          });
        }
      }
    });
  google.load('visualization','1', {packages: ['corechart']});*/
});