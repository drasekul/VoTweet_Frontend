app.service('servAprobacionN', function($http){
        var urlBase = null;


        var _debugAprobacion = [
		    {
     			"fecha": "17/06",
     			"aprobacion": "55",
    			"desaprobacion": "45",
    		},
    		{
    			"fecha": "17/06",
     			"aprobacion": "25",
    			"desaprobacion": "75",
    		}
		  ];

        this.getAprobacion = function(){
        	if (urlBase)
            	return $http.get(urlBase);
            else
            	return getDebugAprobacion();
        };
        this.postCdtoId = function(id){
        	console.log("El candidato: " + id);
        	if (urlBase)
        		return $http.post(urlBase)
        }
        function getDebugAprobacion(){
			return angular.copy(_debugAprobacion);
        }

});