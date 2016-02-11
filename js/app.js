var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {

    this.papers = [];
    var _this = this;
    $http.get('/js/data.json')
    .success(function(data){
      console.log(data);
      _this.papers = data;
    })
    .error(function(msg){
      console.log("This request failed. \n" + msg)
    });

      // this.filter = function(data){
      //   for(var i in data){
      //     data [i].date = new Date(
      //       data[i].year,
      //       (data[i].month -1),
      //       data[i].day
      //     ),
      //   }
      // }
}]);
