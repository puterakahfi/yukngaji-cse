var app = angular.module('yukngajiApp', ['ui.router', 'ui.bootstrap']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/beranda");
    //
    // Now set up the states
    $stateProvider
            .state('beranda', {
                url: "/beranda",
                templateUrl: "partials/beranda.html"
            });

});


app.controller('berandaCtrl', function ($scope, $modal, $log) {
    $scope.openAbout = function () {
        var modalInstance = $modal.open({
            templateUrl: 'partials/about.html',
            controller: 'aboutCtrl',
        });
    }

});


app.controller('aboutCtrl', function ($scope, $modal) {
    $scope.ok = function () {
        console.log('close modal');
    }

});

