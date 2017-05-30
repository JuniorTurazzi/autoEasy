angular.module('autoEasyApp')

    .controller('listaServicoCtrl', function ($scope, $state, BancoDadosValues) {
        $scope.listaServicos = [];
        $scope.abrirServico = function () {
            var onClose = function (servico) {
                $scope.listaServicos.push(servico);
            }
            $state.go('app.servico', { onClose: onClose });
            BancoDadosValues.setup();
            BancoDadosValues.bancoDeDados.transaction(function (transacao) {
                transacao.executeSql('INSERT INTO servico(tipo, data, odometro, tipoServico, valor, local, obs) VALUES (?, ?, ?, ?, ?, ?, ?',
                    [servico.tipo, servico.data, servico.odometro, servico.tipoServico, servico.valor, servico.local, servico.obs]);
            })
        }
    });
