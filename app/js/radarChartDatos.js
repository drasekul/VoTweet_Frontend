   /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
      
			////////////////////////////////////////////////////////////// 
			//////////////////////// Set-Up ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					
			////////////////////////////////////////////////////////////// 
			////////////////////////// Data ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

var data = [
		[//APROBACION
			{axis:"XV de Arica y Parinacota",value:0.22},
			{axis:"I de Tarapacá",value:0.50},
			{axis:"II de Antofagasta",value:0.28},
			{axis:"III de Atacama",value:0.29},
			{axis:"IV de Coquimbo",value:0.17},
			{axis:"V de Valparaiso",value:0.22},
			{axis:"VI del Libertador General Bernardo O'Higgins",value:0.02},
			{axis:"VII del Maule",value:0.21},
			{axis:"VIII del Bío Bío",value:0.50},
			{axis:"IX de la Araucanía",value:0.50},
			{axis:"XIV de los Ríos",value:0.50},			
			{axis:"X de los Lagos",value:0.50},
			{axis:"XI Aisén del General Carlos Ibáñez del Campo",value:0.50},
			{axis:"XII de Magallanes y Antártica Chilena",value:0.50},
			{axis:"RM Metropolitana de Santiago",value:0.50},
		],[//DESAPROBACION
			{axis:"XV de Arica y Parinacota",value:0.88},
			{axis:"I de Tarapacá",value:0.50},
			{axis:"II de Antofagasta",value:0.16},
			{axis:"III de Atacama",value:0.35},
			{axis:"IV de Coquimbo",value:0.13},
			{axis:"V de Valparaiso",value:0.20},
			{axis:"VI del Libertador General Bernardo O'Higgins",value:0.13},
			{axis:"VII del Maule",value:0.35},
			{axis:"VIII del Bío Bío",value:0.38},
			{axis:"IX de la Araucanía",value:0.50},
			{axis:"XIV de los Ríos",value:0.50},
			{axis:"X de los Lagos",value:0.50},
			{axis:"XI Aisén del General Carlos Ibáñez del Campo",value:0.50},
			{axis:"XII de Magallanes y Antártica Chilena",value:0.50},
			{axis:"RM Metropolitana de Santiago",value:0.50},
			]
		];
			////////////////////////////////////////////////////////////// 
			//////////////////// Draw the Chart ////////////////////////// 
			////////////////////////////////////////////////////////////// 

var color = d3.scale.ordinal()
			.range(["#EDC951","#CC333F","#00A0B0"]);
				
var radarChartOptions = {
	w: width,
	h: height,
	margin: margin,
	maxValue: 0.5,
	levels: 10,
	roundStrokes: true,
	color: color
	};
//Call function to draw the Radar chart
RadarChart(".radarChart", data, radarChartOptions);