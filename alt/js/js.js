$(document).ready(function() {
	$('#menu').click(function() {
		$('header nav ul').fadeToggle();
		return false;
	});

	$('header nav ul a').click(function() {
		$('header nav ul').fadeOut();
	});
});