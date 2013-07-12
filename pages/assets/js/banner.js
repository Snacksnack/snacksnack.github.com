// Adds a listener to the banner for a nice scrolling effect
$(function addBannerListener() {
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
		location.href = 'https://github.com/nohm';
	})
	// Make the more button scroll down
	$('#banner-button').click(function() {
		$('html,body').animate({
			scrollTop: $(window)[0].innerHeight
		}, 1000);
	});
});
