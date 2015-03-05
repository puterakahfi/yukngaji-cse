var app = angular.module('yukngajiApp', ['ui.router']);
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
            })

});
app.controller('saranCtrl', function ($scope) {
});

app.controller('berandaCtrl', function ($scope) {

});


