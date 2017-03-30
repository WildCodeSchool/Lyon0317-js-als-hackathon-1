$(document).ready(function () {
	let urlOmdbApi = '';
	let app = new Vue({
		el: '#app',
		data: {
			movieItem: []
		},
		methods: {
			search: function (queryTitle) {
				let keyword = $('#keyword').val();
				urlOmdbApi = `http://www.omdbapi.com/?s=${keyword}`;
			},

			showResults: function () {
				sURL = urlOmdbApi;
				$.getJSON(sURL).done(function (response) {
					console.log(sURL)
					for (let item in response.Search) {
						app.movieItem.push(response.Search[item]);
					}
					sURL = '';

				});
			}
		}
	});

	// console.log('je suis méga ready');

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
