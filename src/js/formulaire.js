$(document).ready(function () {

	for (let i = 1950; i < 2017; i += 1) {
		$('#year-form').append(`  <option value=${i} v-on:selected="search();showResults()">${i}</option>`)
	}





});