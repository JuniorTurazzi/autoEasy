angular.module('autoEasyApp')
    .controller('servicoCtrl', function ($scope, $location, $stateParams, $ionicHistory) {
        
        var onClose = $stateParams.onClose;
        $scope.servico = {};
        $scope.salvarServico = function (servico) {
            onClose(servico);
            $ionicHistory.goBack();
        }
    });

