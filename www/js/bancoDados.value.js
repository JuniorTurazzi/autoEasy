angular.module('autoEasyApp') //, $cordovaSQLite ['ngCordova']
.value('BancoDadosValues', {
    bancoDeDados : null,
    setup : function(){
        this.bancoDeDados = window.openDatabase('bancoDados', '1.0', 'Banco de dados da AutoEasy', 5000);
                           // $cordovaSQLite.openDatabase('bancoDados', '1.0', 'Banco de dados da AutoEasy', 5000);
    }
});