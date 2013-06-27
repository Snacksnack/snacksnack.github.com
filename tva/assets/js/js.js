// Add listeners to the nav li elements, to behave like anchors
$(document).ready(function() {
	$.each( $('nav ul li'), function() {
		$(this).click(function() {
			location.href = $(this).children('a')[0].href;
		});
	});
});
