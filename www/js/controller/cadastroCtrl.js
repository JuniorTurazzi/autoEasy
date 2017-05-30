angular.module('autoEasyApp')
    .controller('cadastroCtrl', function ($scope, $location, $stateParams, $ionicHistory) {
        var onClose = $stateParams.onClose;
        $scope.carro = {};
        $scope.salvarCarro = function (carro) {
            onClose(carro);
            $ionicHistory.goBack();
        }
    });