angular.module('autoEasyApp')
    .controller('despesaCtrl', function ($scope, $location, $stateParams, $ionicHistory) {
        var onClose = $stateParams.onClose;
        $scope.despesa = {};
        $scope.salvarDespesa = function (despesa) {
            onClose(despesa);
            $ionicHistory.goBack();
        }
    });