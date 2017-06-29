// ID 1
app.controller('tweetRelevantes',function ($scope,$http) {

  $scope.personas=[];
  $scope.tweets=[
  {"autor":"ACatapluto",
  "fecha":"2017-06-22 09:26:26.0",
  "texto":"Felipe Kast desmiente a Piñera y dice q no se creó un millón de empleos. Él era Min de Planificacion y sabe lo q dice. Piñera miente.",
  "region":"none",
  "ciudad":"none",
  "cantidadRt":723,
  "cantidadLikes":448
  },
  {"autor":"EstoyConPinera","fecha":"2017-06-23 16:49:00.0","texto":"No le fallemos a Chile este domingo 2 de julio. Ganemos las primarias votando por @SebastianPinera para lograr #TiemposMejores.","region":"null","ciudad":"null","cantidadRt":180,"cantidadLikes":194},{"autor":"Chile_Alerta","fecha":"2017-06-25 03:12:55.0","texto":"Cuando Piñera x CORRUPTO fue incluido en el INFORME de TRANSPARENCIA INTERNACIONAL https://t.co/zGjoOXyqNk","region":"null","ciudad":"null","cantidadRt":123,"cantidadLikes":42},{"autor":"thecliniccl","fecha":"2017-06-25 10:07:03.0","texto":"“El político circense”: La columna de Carlos Peña sobre Sebastián Piñera y su inaceptable chiste machista\nhttps://t.co/ZFRM0Z8zVJ","region":"null","ciudad":"null","cantidadRt":114,"cantidadLikes":87},{"autor":"GAMBA_CL","fecha":"2017-06-23 11:06:02.0","texto":"VIDEO: Formalizado por cohecho Pablo Longueira, llamó a votar por el evasor de impuestos Sebastián Piñera… https://t.co/nCR7f3z0g5","region":"none","ciudad":"none","cantidadRt":90,"cantidadLikes":25},{"autor":"udipopular","fecha":"2017-06-22 21:06:16.0","texto":"¡MIRA, COMENTA Y COMPARTE LA FRANJA ELECTORAL DE HOY!\n#ArribaLosCorazones que vienen #TiemposMejores https://t.co/k1L4ycZTva","region":"null","ciudad":"null","cantidadRt":80,"cantidadLikes":93},{"autor":"editordelmedio","fecha":"2017-06-25 13:39:24.0","texto":"La increíble historia de maltrato laboral de Sebastián Piñera en LAN que terminó con el suicidio de la afectada:… https://t.co/EYcdiYS9Fw","region":"null","ciudad":"null","cantidadRt":62,"cantidadLikes":18},{"autor":"Kafkava","fecha":"2017-06-24 21:02:35.0","texto":"Alberto Mayol: Si crees que tirarse encima de una mujer que se hace la muestra es hacerse el vivo: Sebastian Piñera no has entendido nada","region":"BíoBío","ciudad":"Chillán","cantidadRt":54,"cantidadLikes":70},{"autor":"Chile_Alerta","fecha":"2017-06-06 15:40:04.0","texto":"RN molesto porque @mjossandon DESENMASCARA A PIÑERA ante los chilenos https://t.co/XJr7cc94W7","region":"null","ciudad":"null","cantidadRt":28,"cantidadLikes":14},{"autor":"enavonbaer","fecha":"2017-06-17 09:56:24.0","texto":"Gran jornada en #Valdiviacl apoyando a #PiñeraPresidente #ChileVamos todos unidos trabajando x #TiemposMejores… https://t.co/lhXclpaU5a","region":"none","ciudad":"none","cantidadRt":26,"cantidadLikes":32},{"autor":"abalosfelipe","fecha":"2017-06-24 18:00:07.0","texto":"Hermosa jornada de apoyo por #PiñerPresidente, desde todos los rincones de Chile hoy se dijo #TiemposMejores y… https://t.co/3faW080wfr","region":"null","ciudad":"null","cantidadRt":26,"cantidadLikes":21},{"autor":"LosPROgresistas","fecha":"2017-06-25 17:49:00.0","texto":".@marcoporchile vuelve recargado y con ganas de debatir de economía con Piñera https://t.co/elHKFadZrS @diarioconce #PROcesoDeCambio","region":"null","ciudad":"null","cantidadRt":21,"cantidadLikes":13},{"autor":"prensa_diputada","fecha":"2017-06-23 20:11:16.0","texto":"¡Porque queremos #TiemposMejores, en El Valle de #Aconcagua #TodosConPiñera!  #PiñeraPresidente 💪🏼 @andreamolina_o… https://t.co/wjQZUmTiCH","region":"none","ciudad":"none","cantidadRt":21,"cantidadLikes":34}];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/1/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});

//ID 2
app.controller('tweetRelevantes2',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/2/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes3',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/3/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});



app.controller('tweetRelevantes4',function ($scope,$http) {
  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/4/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes5',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/5/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});



app.controller('tweetRelevantes6',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/6/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes7',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/7/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes8',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/8/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes9',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/9/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes10',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/10/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes11',function ($scope,$http) {
  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/11/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes12',function ($scope,$http) {
  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/12/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});



app.controller('tweetRelevantes13',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/13/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});


app.controller('tweetRelevantes14',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/14/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});

app.controller('tweetRelevantes15',function ($scope,$http) {

  $scope.personas=[];
  $http({
      method: 'GET',
      url: 'http://localhost:8080/votweet-backend-master/candidatos/15/tweetsImportantes'
   }).then(function (data){
        $scope.personas=data.data;
   },function (error){

   });
});
