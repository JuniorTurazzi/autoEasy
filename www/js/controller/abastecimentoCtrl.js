angular.module('autoEasyApp')
    .controller('abastecimentoCtrl', function ($scope, $location, $stateParams, $ionicHistory) {
        var onClose = $stateParams.onClose;
        $scope.abastecimento = {};
        $scope.salvarAbastecimento = function(abastecimento){
            onClose(abastecimento);
            $ionicHistory.goBack();
        }
    });