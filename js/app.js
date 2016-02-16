var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {
    //ajax request from data.json
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

    this.panelInfo = true;
    this.name = "";
    this.sort = "name";
    this.reverse = false;
    this.generalPic = "";
    this.bio = "";

    // Sorting function
          this.setSort = function(colNam) {

            if (this.sort === colNam) {
              this.reverse = !this.reverse;
            }

            this.sort = colNam;

          };


    //toggle commands for info panel
    this.panelInfo = function(paperInfo){

      this.name = paperInfo;
      this.generalPic = paperInfo;
      this.bio = paperInfo;

      for (var i = 0; i < this.papers.length; i++){
        console.log(i);
        if (paperInfo == this.papers[i].name){
          this.currentPaper = this.papers[i];
          var paperInfo = "";

          if(this.papers[i].generalPic !== undefined){
            paperInfo += '<img src =' + this.papers[i].generalPic + '/>';
          }

          paperInfo += '<h3>' + this.papers[i].name + '</h3>';

        //  paperInfo += '<p>' this.papers[i].bio + '</p>';
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
