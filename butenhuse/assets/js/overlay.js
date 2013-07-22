// Adds listeners to image anchors for a nice popup, and a listener to close it again
$(function addPopupListeners() {
	// Select all the links leading to an image
	var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
	// Check if they contain an image
	if (imageLinks.children('img').length) {
		// Give them a proper title
		imageLinks.children('img').each(function() {
			$(this).attr('title', 'Click to enlarge');
		});
		// Give them a clicklistener to open to overlay
		imageLinks.click(function(e) {
			e.preventDefault();
			$('#overlay-wrapper img').attr('src', $(this).context);
			$('#overlay-wrapper').fadeIn(300);
			$('#overlay-wrapper img').attr('title', 'Click anywhere to close');
			$('#overlay-wrapper img').css({
				'margin-left': ($(window)[0].innerWidth - $('#overlay-wrapper img').width()) / 2,
				'margin-top': ($(window)[0].innerHeight - $('#overlay-wrapper img').height()) / 2
			})
		});
	}

	// Add listener to overlay to close it
	$('#overlay-wrapper').click(function() {
		$(this).fadeOut(300);
	});
});
