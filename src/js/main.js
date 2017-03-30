let app = new Vue({
	el: '#app',
	data: {
		movieItem: []
	},


});


$(document).ready(function () {

	console.log('je suis méga ready');


	let urlOmdbApi = 'http://www.omdbapi.com/?s=unicorn';

	$.getJSON(urlOmdbApi).done(function (response) {

		for (let item in response.Search) {
			app.movieItem.push(response.Search[item]);
		}


	});

});



// ready: function () {
// 	let self = this;
// 	$.ajax({
// 		url: omdbApi,
// 		method: 'GET',
// 		success: function (data) {
// 			self.movieItem = data;
// 		}
// 	})
// }
