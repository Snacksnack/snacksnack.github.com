//[2013-07-11 15:22 nohm <nohm@github.com>]

// Handles the image overlay and banner scrolling
$(document).ready(function() {
	addPopupListeners();
	addBannerListener();
});


// Adds listeners to image anchors for a nice popup, and a listener to close it again
function addPopupListeners() {
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
}

// Adds a listener to the banner for a nice scrolling effect
function addBannerListener() {
	$(window).scroll(function() {
		// Scroll the banner
		var diff = ($(this)[0].innerHeight / $('#banner-text').height()) * 2;
		scrollPos = $(this).scrollTop();
		var opacity = 1 - (scrollPos/($('#banner-text').height() * (diff/8)));
		$('#banner').css({
			'background-position': '50% ' + (-scrollPos/diff) + 'px'
		});
		$('#banner-text').css({
			'margin-top': (scrollPos/diff) + 'px',
			'opacity': opacity
		});
		// Hide the banner if it's opacity <= 0
		if (opacity <= 0) {
			$('#banner-text').hide();
		} else {
			$('#banner-text').show();
		}
	});
	// Make the banner redirect to my github
	$('#banner-text').click(function() {
		location.href = 'https://github.com/Snacksnack';
	})
	// Make the more button scroll down
	$('#banner-button').click(function() {
		$('html,body').animate({
			scrollTop: $(window)[0].innerHeight
		}, 1000);
	});
}
