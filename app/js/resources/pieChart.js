// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var jsonData = $.ajax({
  url: "http://localhost:8080/votweet-backend-master/metricasCandidatos/ultimasAprobacionesNacionales",
  dataType: "json",
  async: false
}).responseJSON;
console.log(jsonData);

function procesarArray(json) {
  var datos = [];
  datos.push(['Candidato','Aprobacion'],)
  for (var i = 0, l = json.length; i < l; i++) {
    datos.push([json[i].nombreCandidato,json[i].aprobacion],);
  }
  return datos;
}

var datosPre = procesarArray(jsonData);

function drawChart() {
  console.log("datosProcesados?");
  console.log(datosPre);
  var data = google.visualization.arrayToDataTable(
    datosPre);

  var aux2=google.visualization.arrayToDataTable(datosPre);
  console.log(data);
  console.log(aux2);

        var options = {
          title: 'Detalle de Aprobación',
          is3D: true,
          pieStartAngle: 100,
        };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
