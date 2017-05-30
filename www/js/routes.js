angular.module('autoEasyApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })
      .state('app.cadastro', {
        url: '/cadastro',
        views: {
          'menuContent': {
            templateUrl: 'templates/cadastro.html',
            controller: 'cadastroCtrl'
          }
        },
        params: {
            onClose: null
        }
      })
      .state('app.abastecimento', {
        url: '/abastecimento',
        views: {
          'menuContent': {
            templateUrl: 'templates/abastecimento.html',
            controller: 'abastecimentoCtrl'
          }
        },
        params: {
            onClose: null
        }
      })
      .state('app.despesa', {
        url: '/despesa',
        views: {
          'menuContent': {
            templateUrl: 'templates/despesa.html',
            controller: 'despesaCtrl'
          }
        },
        params: {
            onClose: null
        }
      })
      .state('app.lembrete', {
        url: '/lembrete',
        views: {
          'menuContent': {
            templateUrl: 'templates/lembrete.html',
            controller: 'lembreteCtrl'
          }
        }
      })
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          }
        }
      })
      .state('app.menu', {
        url: '/menu',
        views: {
          'menuContent': {
            templateUrl: 'templates/menu.html',
            controller: 'menuCtrl'
          }
        }
      })
      .state('app.servico', {
        url: '/servico',
        views: {
          'menuContent': {
            templateUrl: 'templates/servico.html',
            controller: 'servicoCtrl'
          }
        },
        params: {
            onClose: null
        }
      })
      .state('app.calculadora', {
        url: '/calculadora',
        views: {
          'menuContent': {
            templateUrl: 'templates/calculadora.html',
            controller: 'calculadoraCtrl'
          }
        }
      }).state('app.listaServico', {
        url: '/listaServico',
        views: {
          'menuContent': {
            templateUrl: 'templates/listas/listaServico.html',
            controller: 'listaServicoCtrl'
          }
        }
      }).state('app.listaDespesa', {
        url: '/listaDespesa',
        views: {
          'menuContent': {
            templateUrl: 'templates/listas/listaDespesa.html',
            controller: 'listaDespesaCtrl'
          }
        }
      }).state('app.listaAbastecimento', {
        url: '/listaAbastecimento',
        views: {
          'menuContent': {
            templateUrl: 'templates/listas/listaAbastecimento.html',
            controller: 'listaAbsCtrl'
          }
        }
      }).state('app.listaVeiculo', {
        url: '/listaVeiculo',
        views: {
          'menuContent': {
            templateUrl: 'templates/listas/listaVeiculo.html',
            controller: 'listaVeiculoCtrl' 
          }
        }
      }).state('app.objServico', {
        url: '/objServico',
        views: {
          'menuContent': {
            templateUrl: 'templates/objetos/objServico.html',
            controller: 'objServicoCtrl'
          }
        }
      }).state('app.objDespesa', {
        url: '/objDespesa',
        views: {
          'menuContent': {
            templateUrl: 'templates/objetos/objDespesa.html',
            controller: 'objDespesaCtrl'
          }
        }
      }).state('app.objAbs', {
        url: '/objAbs',
        views: {
          'menuContent': {
            templateUrl: 'templates/objetos/objAbs.html',
            controller: 'objAbsCtrl'
          }
        }
      }).state('app.objVeiculo', {
        url: '/objVeiculo',
        views: {
          'menuContent': {
            templateUrl: 'templates/objetos/objVeiculo.html',
            controller: 'objVeiculoCtrl'
          }
        }
      });
      
//   .state('app.browse', {
//       url: '/browse',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/browse.html'
//         }
//       }
//     })
//     .state('app.playlists', {
//       url: '/playlists',
//       views: {
//         'menuContent': {
//           templateUrl: 'templates/playlists.html',
//           controller: 'PlaylistsCtrl'
//         }
//       }
//     })

//   .state('app.single', {
//     url: '/playlists/:playlistId',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/playlist.html',
//         controller: 'PlaylistCtrl'
//       }
//     }
//   });
// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/home');
  });
