// Adds a listener to the banner for a nice scrolling effect
$(function addBannerListener() {
	$('#sidebar').css({
		'top': $(window)[0].innerHeight
	});
	$(window).scroll(function() {
		// Scroll the banner
		var diff = $(this)[0].innerHeight / 100;
		scrollPos = $(this).scrollTop();
		$('#banner').css({
			'background-position': '50% ' + (-scrollPos/diff) + 'px'
		});
		var sidebarPos = $(window)[0].innerHeight - scrollPos;
		if (sidebarPos < 0) {
			sidebarPos = 0;
		}
		$('#sidebar').css({
			'top': sidebarPos
		});
	});

	// Make the more button scroll down
	$('#banner-button').click(function() {
		$('html,body').animate({
			scrollTop: $(window)[0].innerHeight
		}, 1000);
	});
});
