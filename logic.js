//array of topics
var topics = 	["planets", "astronauts", "stars", "galaxies", "robots", 
				"void", "aliens", "plasma", "moon", "space ship"];



function buttonMaker() {

	//empties div so all buttons can be rewritten when new array index included
	$("#space-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#space-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
	};


};


buttonMaker();




//on-clicik event to accept input, append to topics array,
//turn input into button
$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#space-input").val().trim();

	//if text input is empty, button will not be created
	if (!userInput == " ") {
		topics.push(userInput);
		buttonMaker();
		console.log(topics); //test
		userInput = $("#space-input").val(" ");
	}
});



/*on-click event has to be written this way because $("#target-id").on("click") will only work once
per page load and ignore updated info. This allows for new buttons to appear and have the on-click function still work. Submit button does not change, so
on-click function is fine*/
$(document).on("click", ".topic-button", function() {
	$("#space-gif").empty(); //empties out previous gifs

	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";
	

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); //test

		//targets URL in info for api results
		//something is wrong here. can't target what I need out of object
		//pulling up 5 indices when you pull info from API. 
		//need to loop through array to pull all 5 gif urls.
		//this is where results[0] is
		var results = response.data;

		//creates new <img> tag, then adds source, then alternate title
		//May change class or id's
		for (var j = 0; j < results.length; j++) {

			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
			newImage.attr("id", "new-gif" + j);

			$("#space-gif").append(newImage);

			
		}
		//when you click on gif, it should go from fixed_height_still.url to fixed_height.url
		//Could dry this up, might need to nest for loops
		//Will research 
		

		//gif #0
		var isMoving0 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url); //makes gif move
				isMoving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url); //makes gif stop
				isMoving0 = false;
			}

		});

		//gif #1
		var isMoving1 = false;
		$(document).on("click", "#new-gif1" , function() {

			if (!isMoving1) {
				$("#new-gif1").attr("src", results[1].images.fixed_height.url); //makes gif move
				isMoving1 = true;
			} else {
				$("#new-gif1").attr("src", results[1].images.fixed_height_still.url); //makes gif stop
				isMoving1 = false;
			}

		});

		//gif #2
		var isMoving2 = false;
		$(document).on("click", "#new-gif2" , function() {

			if (!isMoving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url); //makes gif move
				isMoving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url); //makes gif stop
				isMoving2 = false;
			}

		});

		//gif #3
		var isMoving3 = false;
		$(document).on("click", "#new-gif3" , function() {

			if (!isMoving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url); //makes gif move
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url); //makes gif stop
				isMoving3 = false;
			}

		});


		//gif #4
		var isMoving4 = false;
		$(document).on("click", "#new-gif4" , function() {

			if (!isMoving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url); //makes gif move
				isMoving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url); //makes gif stop
				isMoving4 = false;
			}

		});


		//gif #5
		var isMoving5 = false;
		$(document).on("click", "#new-gif5" , function() {

			if (!isMoving5) {
				$("#new-gif5").attr("src", results[5].images.fixed_height.url); //makes gif move
				isMoving5 = true;
			} else {
				$("#new-gif5").attr("src", results[5].images.fixed_height_still.url); //makes gif stop
				isMoving5 = false;
			}

		});


		//gif #6
		var isMoving6 = false;
		$(document).on("click", "#new-gif6" , function() {

			if (!isMoving6) {
				$("#new-gif6").attr("src", results[6].images.fixed_height.url); //makes gif move
				isMoving6 = true;
			} else {
				$("#new-gif6").attr("src", results[6].images.fixed_height_still.url); //makes gif stop
				isMoving6 = false;
			}

		});


		//gif #7
		var isMoving7 = false;
		$(document).on("click", "#new-gif7" , function() {

			if (!isMoving7) {
				$("#new-gif7").attr("src", results[7].images.fixed_height.url); //makes gif move
				isMoving7 = true;
			} else {
				$("#new-gif7").attr("src", results[7].images.fixed_height_still.url); //makes gif stop
				isMoving7 = false;
			}

		});


		//gif #8
		var isMoving8 = false;
		$(document).on("click", "#new-gif8" , function() {

			if (!isMoving8) {
				$("#new-gif8").attr("src", results[8].images.fixed_height.url); //makes gif move
				isMoving8 = true;
			} else {
				$("#new-gif8").attr("src", results[8].images.fixed_height_still.url); //makes gif stop
				isMoving8 = false;
			}

		});


		//gif #9
		var isMoving9 = false;
		$(document).on("click", "#new-gif9" , function() {

			if (!isMoving9) {
				$("#new-gif9").attr("src", results[9].images.fixed_height.url); //makes gif move
				isMoving9 = true;
			} else {
				$("#new-gif9").attr("src", results[9].images.fixed_height_still.url); //makes gif stop
				isMoving9 = false;
			}

		});


	});



})
