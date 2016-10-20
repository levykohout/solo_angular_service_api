angular.module('giphyApp').service('giphy', GiphyAPIService);

function GiphyAPIService($http){

	var API ='http://api.giphy.com/v1/gifs/';
	var key = 'api_key=dc6zaTOxFJmzC';


	this.getGifsData = function(){


        return $http.get(API + 'random?' + key).then(function(response){


           return response.data.data;
           console.log(response.data.data);

        });

    };

    this.getSearchData = function(q){

    	this.q = q.replace(' ','+');

        return $http.get(API +'search?q=' + this.q +'&' + key).then(function(response){

            return response.data.data;


        });

    }


}
