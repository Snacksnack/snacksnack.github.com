$(document).ready(function() {
	searchURL = 'https://api.github.com/repos/Snacksnack/Ruby-Colors/contents/Ruby-Colors/colors.rb';

	$.ajax({
		type: 'GET',
		url: searchURL,
		dataType: "jsonp",
		crossDomain: true,
		success: function(response){
			console.log(response.data.content);
			var code = Base64.decode(response.data.content);
			$('#wrapper').attr('data-code', code);
			console.log(code);
		}
	});
});