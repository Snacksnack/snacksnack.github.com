/*
/*
 * Author: 73 6E 61 63 6B 27 
 * Last edit: 04/04/2013 15:22 +0100
 */
$(document).ready(function() {	
	// Hide the javascript notice
	$('#notice').hide();
	
	// Add listeners to image anchors to open the overlay
	var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
    if (imageLinks.children('img').length) {
        imageLinks.children('img').each(function() {
        	$(this).attr('title', 'Click to enlarge');
        });
        imageLinks.click(function(e) {
                e.preventDefault();
                $('#overlay-wrapper img').attr('src', $(this).context);
	            $('#overlay-wrapper').fadeIn(300);
	            $('#overlay-wrapper img').attr('title', 'Click anywhere to close');
	            $('#overlay-wrapper img').css( { 'margin-left' : ($(window).width()-$('#overlay-wrapper img').width())/2, 'margin-top' : ($(window).height()-$('#overlay-wrapper img').height())/2 } )
        });
    }
    
    // Add listener to overlay to close it
    $('#overlay-wrapper').click(function() {
    	$(this).fadeOut(300);
    });
});
