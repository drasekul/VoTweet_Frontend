google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Negativo', 'Positivo', 'Proyección'],
    ['Enero', 40, 60, 60],
    ['Febrero', 30, 70,70],
    ['Marzo',40, 60,60],
    ['Abril',30, 70,70],
    ['Mayo',  20, 80,80]
  ]);

var options = {
  title : 'Grafica Historica de Aprobación',
  vAxis: {title: 'Porcentaje'},
  hAxis: {title: 'Meses'},
  seriesType: 'bars',
  series: {2: {type: 'line'}}
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}