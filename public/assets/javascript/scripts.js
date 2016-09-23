/* main angular web application */

var app = angular.module('cbPortfolio', [
'ngRoute'
]);


/* Configure the routes */

app.config([$routeProvider, function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "views/home.html", <span class="highlight">controller: "PageCtrl"</span>})
// Pages
.when("/about", {templateUrl: "views/about.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/contact_me", {templateUrl: "views/contact_me.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/web_development", {templateUrl: "views/web_development.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/graphic_design", {templateUrl: "views/graphic_design.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/audio_video", {templateUrl: "views/audio_video.html", <span class="highlight">controller: "PageCtrl"</span>})
.when("/graphic_design", {templateUrl: "views/graphic_design.html", <span class="highlight">controller: "PageCtrl"</span>})
/* etc… routes to other pages… */
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>});

}]);


/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");
});