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
    this.images = "";
    this.bio = "";
    this.storyInfo = true;
    this.storyTitle = "";
    this.storyLink = "";

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
      this.images.generalPic = paperInfo;
      this.bio = paperInfo;

      for (var i = 0; i < this.papers.length; i++){
        console.log(i);
        if (paperInfo == this.papers[i].name){
          this.currentPaper = this.papers[i];
          var paperInfo = "";

          paperInfo += '<h3>' + this.papers[i].name + '</h3>';

          if(this.papers[i].images.generalPic !== undefined){
          //  console.log("loading");
            paperInfo += '<img class= "front-img" src =' + this.papers[i].images.generalPic + '/>';
          //  console.log("loaded");
          }

          if(this.papers[i].bio !== undefined){

            paperInfo += '<p>' + this.papers[i].bio + '</p>'

          }

          document.getElementById("paperInfo").innerHTML = paperInfo;
        }

      }

    }

    //function for story tab

      this.storyInfo = function(getStory){

        this.storyTitle = getStory;
        this.storyLink = getStory;

        for (var i = 0; i < this.papers.length; i++){
          console.log(i);

          if (storyInfo == this.papers[i].storyTitle){
            this.currentPaper = this.papers[i];

            var getStory = "";

            if (storyInfo == this.papers[i].storyLink){
              storyInfo += '<p>' + this.papers[i].storyTitle + '</p>'
            }

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
