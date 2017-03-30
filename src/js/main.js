$(document).ready(function () {

	console.log('je suis méga ready');

	let urlOmdbApi = 'http://www.omdbapi.com/?';


	// $('ul').empty();
	$.getJSON(urlOmdbApi).done(function (Search) {

		for (let item of Search) {
			console.log(item.title);
			// $('ul').append(`<li>${item.content} ${item.note} /5</li>`);
		}


	});




});