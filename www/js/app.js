// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var db = null;
angular.module('autoEasyApp', ['ionic', 'ngCordova'])//['ionic', 'ngCordova']

  .run(function ($ionicPlatform, $cordovaSQLite) { //($ionicPlatform, $cordovaSQLite, BancoDadosValues)
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      // BancoDadosValues.setup();
      // BancoDadosValues.bancoDeDados.transaction(function (transacao) {
      // transacao.executeSql('CREATE TABLE IF NOT EXISTS automovel(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, tipo VARCHAR, ano DATE, modelo VARCHAR, placa VARCHAR, tipoCombustivel VARCHAR, volTanque INTEGER, obs VARCHAR);', []);
      // transacao.executeSql('CREATE TABLE IF NOT EXISTS servico(id INTEGER PRIMARY KEY AUTOINCREMENT, tipo VARCHAR, data DATE, odometro DOUBLE, tipoServico VARCHAR, valor DOUBLE, local VARCHAR, obs VARCHAR);', []);
      // transacao.executeSql('CREATE TABLE IF NOT EXISTS despesa(id INTEGER PRIMARY KEY AUTOINCREMENT, tipo VARCHAR, data DATE, odometro DOUBLE, tipoDespesa VARCHAR, valor DOUBLE, local VARCHAR, obs VARCHAR);', []);
      // transacao.executeSql('CREATE TABLE IF NOT EXISTS abastecimento(id INTEGER PRIMARY KEY AUTOINCREMENT, data DATE, odometro DOUBLE, tipoCombustivel VARCHAR, tipo VARCHAR, tanqueCheio BOOLEAN, preco DOUBLE, total DOUBLE, litros DOUBLE, absAnterior BOOLEAN, obs VARCHAR);', []);
      
      var db = $cordovaSQLite.openDB({ bancoDados: "bancoDados.db" });
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS automovel(id INTEGER PRIMARY KEY, nome VARCHAR)")
        .then(function(result) {
          console.log(result);
        }, function(err) {
          console.log(err);
        });
    });
      
});

