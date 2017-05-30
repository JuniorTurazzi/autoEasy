angular.module('autoEasyApp')

    .controller('listaVeiculoCtrl', function ($scope, $state, BancoDadosValues) {
        $scope.listaCarros = [];
        $scope.abrirCadastro = function () {
            var onClose = function (carro) {
                $scope.listaCarros.push(carro);
                BancoDadosValues.setup();
                BancoDadosValues.bancoDeDados.transaction(function (transacao) {
                    transacao.executeSql('INSERT INTO automovel(nome, tipo, ano, modelo, placa, tipoCombustivel, volTanque, obs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?',
                        [carro.nome, carro.tipo, carro.ano, carro.modelo, carro.placa, carro.tipoCombustivel, carro.volTanque, carro.obs]);
                })
            }
            $state.go('app.cadastro', { onClose: onClose });

        }
    });