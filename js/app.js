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

    this.panelInfo = function(paperInfo){
      this.name = paperInfo;

      for (var i = 0; i < this.data.length; i++){
        if (paperInfo == this.data[i].name){
          this.currentPaper = this.data[i];
          var paperInfo = "";
          paperInfo += '<h3>' + this.data[i].name + '</h3>';
          document.getElementById("paperInfo").innerHTML = paperInfo;
        }
      }
    }

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
