angular.module('autoEasyApp')
    .controller('listaDespesaCtrl', function ($scope, $state, BancoDadosValues) {
        $scope.listaDespesas = [];
        $scope.abrirDespesa = function () {
            var onClose = function (despesa) {
                $scope.listaDespesas.push(despesa);
            }
            $state.go('app.despesa', { onClose: onClose });

            BancoDadosValues.setup();
            BancoDadosValues.bancoDeDados.transaction(function (transacao) {
                transacao.executeSql('INSERT INTO despesa(tipo, data, odometro, tipoDespesa, valor, local, obs) VALUES (?, ?, ?, ?, ?, ?, ?',
                    [despesa.tipo, despesa.data, despesa.odometro, despesa.tipoDespesa, despesa.valor, despesa.local, despesa.obs]);
            })
        }
    });
