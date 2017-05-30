angular.module('autoEasyApp')

    .controller('listaAbsCtrl', function ($scope, $state, BancoDadosValues ) {
        $scope.listaAbastecimentos = [];

        $scope.abrirAbastecimento = function () {
            var onClose = function (abastecimento) {
                $scope.listaAbastecimentos.push(abastecimento);
            }
            $state.go('app.abastecimento', { onClose: onClose });

            BancoDadosValues.setup();
            BancoDadosValues.bancoDeDados.transaction(function (transacao) {
                transacao.executeSql('INSERT INTO abastecimento(data, odometro, tipoCombustivel, tipo, tanqueCheio, preco, total, litros, absAnterior, obs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?',
                    [abastecimento.data, abastecimento.odometro, abastecimento.tipoCombustivel, abastecimento.tipo, abastecimento.tanqueCheio, abastecimento.preco, abastecimento.total, abastecimento.litros, abastecimento.absAnterior, abastecimento.obs]);
            })
        }
    });