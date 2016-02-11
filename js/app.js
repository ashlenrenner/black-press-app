var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {

    this.papers = [];
    var _this. = this;
    $http.get('js/data.json')
    .success(function(data){
      _this.papers = data;
      console.log(data);

    })
    .error(function(msg){
      console.log("This request failed. \n" + msg)
    });
}]);
