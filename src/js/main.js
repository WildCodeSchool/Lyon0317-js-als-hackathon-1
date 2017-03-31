$(document).ready(function () {
	let urlOmdbApi = '';
	let app = new Vue({
		el: '#app',
		data: {
			movieItem: [],
			lastKeywordItem: []
		},
		methods: {
			search: function () {
				$('.flush').empty();
				let keyword = $('#input-keyword').val();
				let type = $('input[name]:checked').val();
				let year = $('#year-form').val();
				if (type === undefined) {
					urlOmdbApi = `http://www.omdbapi.com/?s=${keyword}&y=${year}`;
				} else {
					urlOmdbApi = `http://www.omdbapi.com/?s=${keyword}&type=${type}&y=${year}`;
				}

			},

			showResults: function (sURL) {
				sURL = urlOmdbApi;
				$.getJSON(sURL).done(function (response) {
					for (let item in response.Search) {
						app.movieItem.push(response.Search[item]);
					}
					// sURL = '';
					console.log(sURL);

				});

			},
			showLastResults: function () {
				let saveKeywordURL = 'http://localhost:3000/savedSearch';
				$.getJSON(saveKeywordURL).done(function (keywordsJSON) {
					for (let item in keywordsJSON) {
						app.lastKeywordItem.push(keywordsJSON[item]);
					}
				});
			},

			saveKeywords: function () {
				let savedKeyword = $('#input-keyword').val();
				let url = 'http://localhost:3000/savedSearch'
				$.post(url, { searchedKeyword: savedKeyword, queryURL: urlOmdbApi }).done(function () {
				});
			},

			changeSearchKeyword: function () {
				sURL = 'http://www.omdbapi.com/?s=whisky&y=default';
				showResults();
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
