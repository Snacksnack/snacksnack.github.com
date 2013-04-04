$(document).ready(function() {
	// Add listeners to image anchors to open the overlay
	var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
    if (imageLinks.children('img').length) {
        imageLinks.children('img').each(function() {
        	$(this).attr('title', 'Click to enlarge');
        });
        imageLinks.click(function(e) {
                e.preventDefault();
                $('#overlay-wrapper img').attr('src', $(this).context);
                $('body').css({ overflow: 'hidden' })
	            $('#overlay-wrapper').fadeIn(5e2);
	            $('#overlay-wrapper img').attr('title', 'Click anywhere to close');
	            $('#overlay-wrapper img').css( { 'margin-left' : ($(window).width()-$('#overlay-wrapper img').width())/2, 'margin-top' : ($(window).height()-$('#overlay-wrapper img').height())/2 } )
        });
    }
    
    // Add listener to overlay to close it
    $('#overlay-wrapper').click(function(e) {
    	$('body').css({ overflow: 'visible' })
    	$(this).fadeOut(5e2);
    });
});