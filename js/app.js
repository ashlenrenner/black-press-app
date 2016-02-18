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
    this.editor = "";
    this.editorPic = "";
    this.imgCaption = "";

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

          paperInfo += '<h3>' + this.currentPaper.name + '</h3>';

          if(this.papers[i].images.generalPic !== undefined){

            paperInfo += '<img class="front-img" src="' + this.currentPaper.images.generalPic + '" />';

          }

          if(this.papers[i].bio !== undefined){

            paperInfo += '<p>' + this.currentPaper.bio + '</p>'

          }

          document.getElementById("paperInfo").innerHTML = paperInfo;
        }

      }

      this.storyInfo();
      this.editorInfo();

    }

    //function for story tab

       this.storyInfo = function(){
         var storyInfo = "";

          if (this.currentPaper.storyTitle !== undefined){

            // storyInfo += '<p>' + this.papers[i].storyTitle + '</p>'

            if (this.papers[i].storyLink !== undefined){
              storyInfo += '<a href="' + this.currentPaper.storyLink + '>' + this.currentPaper.storyTitle + '</a>';

            }
              document.getElementById("stories").innerHTML = storyInfo;
          }


      }

      //function for editor tab

        this.editorInfo = function(){
          var editorInfo = "";

          if (this.currentPaper.editor !== undefined){
            editorInfo += '<h3>' + this.currentPaper.editor + '</h3>';
          }if (this.currentPaper.editor == ""){
            editorInfo += '<p> The editor of ' + this.currentPaper.name + ' is unknown. </p>';
          }

          if (this.currentPaper.images.editorPic !== undefined){
            editorInfo += '<img src= "' + this.currentPaper.images.editorPic + '" />';
          }

          if (this.currentPaper.imgCaption !== undefined){
            editorInfo += '<p>' + this.currentPaper.imgCaption + '</p>';
          }

          document.getElementById("editor").innerHTML = editorInfo;

        }


}]);
