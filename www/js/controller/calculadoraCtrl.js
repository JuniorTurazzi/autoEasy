angular.module('autoEasyApp')

    .controller('calculadoraCtrl', function ($scope, $ionicPopup) {

        $scope.melhorComb = function () {
            var resultado = ($scope.etanol / $scope.gasolina);
            console.log(resultado);
            if (resultado <= 0.7) {
                resultado = "Abasteça Etanol!";
            } else {
                resultado = "Abasteça Gasolina!";
            }

            if (($scope.gasolina !== undefined) && ($scope.etanol !== undefined)) {
                var alerta = $ionicPopup.alert({
                    title: 'Melhor Custo/ Benefício',
                    template: '<center><h2>' + resultado + '</h2></center>'
                });
                alerta.then();
            }

            else {
                var alerta = $ionicPopup.alert({
                    // title: 'Total',
                    template: '<center><h3> Informe Todos os Valores! </h3></center>'
                });
                alerta.then();
            }
        };

        //---------------------------------------------

        $scope.consumo = function () {
            var combGasto = $scope.kilometros / $scope.media;
            var valorGasto = combGasto * $scope.precoComb;

            combGasto.toFixed(2);
            valorGasto.toFixed(2);

            console.log(valorGasto);
            console.log(combGasto);

            if (($scope.kilometros !== undefined) && ($scope.precoComb !== undefined) && ($scope.media !== undefined)) {
                var alerta = $ionicPopup.alert({
                    title: 'Consumo Previsto',
                    template: '<center><h4>' + 'R$ ' + valorGasto.toString() + '<br><br>'
                    + combGasto.toString() + ' Litro(s)' + '</h4></center>'
                });
                alerta.then();
            }

            else {
                var alerta = $ionicPopup.alert({
                    title: 'Total',
                    template: '<center><h3> Informe Todos os Valores! </h3></center>'
                });
                alerta.then();
            }
        }


    });

