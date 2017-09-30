
$(document).ready(function(){

// starting pokemons buttons

var pokemons = ["pikachu", "charmander", "bulbasaur", "squirtle", "jigglypuff", "onyx", "snorlax", "dragonite", "mew", "mewtwo"];

// erase previous pokemon gifs for new gifs
function displayGifButtons (){
	$("#gifButtons").empty(); 
	for (var  = 0;  < pokemons.length; ++) {
		var gifTags = $("<button>");
		gifTags.addClass("pokemonSearch")
		gifTags.addClass("btnDefault")
		gifTags.attr("data-name", pokemons[i]);
		gifTags.text(pokemons[i]);
		$("#gifButtons").append(gifTags);
		console.log(displayGifButtons);
	}
	
}

function addNewGifButton(){
	$("#addGif").on("click", function(){
	var pokemon = $("#pokemon-input").val().trim();
	if (pokemon == ""){
		return false; 
	}
	pokemons.push(pokemons);

	displayGifButtons();
	return false;

	console.log(addNewGifButton);
	});
}

//bringing the gifs from API and displaying them

function displayGif(){
	var pokemons = $(this).attr("data-name");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + pokemon + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response) {
    	console.log(response);
    	$("#gifsImages").empty();
    	var results = response.data;
    	if (results == ""){
    		alert("No Pokemon Found");
    	}
    	for (var i = 0; i < results.length; i++) {
    		var gifDiv = $("<div>");
    		
    		var gifRating = $("<p>").text("Gif Rating: " + results[i].rating)
    	
    		var gifShow = $("<img>");
    		gifShow.attr("src",results[i].images.fixed_height_small_still.url);
    		gifShow.attr("data-still", results[i].images.fixed_heigh_small_still.url);
    		gifShow.attr("data-animate", results[i].images.fixed_heigh_small_still);
    		gifShow.attr("data-state", "still");
    		gifShow.addClass("image");
    		gifDiv.append(gifShow);

    		$("#gifsImages").prepend(gifDiv);
    	}

});



