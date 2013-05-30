$(document).ready(function() {
	// Opens/closes the menu when the menu button is clicked
	$('#menu').click(function() {
		$('header nav ul').fadeToggle();
		return false;
	});

	// CLose the menu when an option is picked
	$('header nav ul a').click(function() {
		$('header nav ul').fadeOut();
	});

	// Fades the menu on load
	$('header nav ul').fadeOut();
});