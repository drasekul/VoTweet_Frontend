// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['corechart']});
  
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var jsonData = $.ajax({
	url: "../js/resources/d.json",
	dataType: "json",
	async: false
}).responseJSON;

function procesarArray(json) {
	var datos = [];
	for (var i = 0, l = json.length; i < l; i++) {
		datos.push("{ \"c\": [ {\"v\": \"" + json[i].fecha + "\"}, {\"v\": " + json[i].aprobacion + "}, {\"v\": " + json[i].desaprobacion + "}]}");
	}
	return datos;
}

var datosPre = procesarArray(jsonData);

var datosFinal = "{\"cols\": [ {\"id\": \"f\", \"label\": \"Fecha\", \"type\": \"string\"}, {\"id\": \"s\", \"label\": \"Aprobación\", \"type\": \"number\"}, {\"id\": \"r\", \"label\": \"Desaprobación\", \"type\": \"number\"} ], \"rows\": [" + datosPre + " ]}";

function drawChart() {
	/*
	var jsonData = $.ajax({
	  url: "datos.json",
	  dataType: "json",
	  async: false
	  }).responseText;
	*/
	// Create our data table out of JSON data loaded from server.
	var data = new google.visualization.DataTable(datosFinal);

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, {width: 850, height: 500});
}