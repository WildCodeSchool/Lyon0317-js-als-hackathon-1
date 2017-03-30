$(document).ready(function () {

	console.log('je suis méga ready');


	let urlOmdbApi = 'http://www.omdbapi.com/?s=unicorn';

	$.getJSON(urlOmdbApi).done(function (response) {
		console.log(response);

		for (let item in response.Search) {
			console.log(response.Search[item]);
		}


	});

});
