var app = angular.module('giphyApp', []);

app.controller('MainController', MainController);


function MainController (giphy){

    var main = this;


    console.log('MainController loaded!');
    //
    main.random=[];
    main.searchresults=[];


    giphy.getGifsData(main.search).then(function(gif){

         main.random = gif.image_original_url;

    });


    



    main.getSearchData =function(){
         

        giphy.getSearchData(main.search).then(function(gifs){
         main.searchresults = gifs;
        });

    };
}
