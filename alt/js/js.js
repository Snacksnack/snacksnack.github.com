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
	            $('#overlay-wrapper').fadeIn(5e2);
	            $('#overlay-wrapper img').css( { 
	            	'margin-left' : ($(window).width()-$('#overlay-wrapper img').width())/2 
	            } );
	            $('#overlay-inner').css( { 
	            	'margin-left' : ($(window).width()-$('#overlay-wrapper img').width())/2, 
	            	'margin-top' : ($(window).height()-$('#overlay-wrapper img').height())/2 - 50 
	            } );
	            $('#overlay-inner-close').css( { 
	            	'margin-right' : ($(window).width()-$('#overlay-wrapper img').width())/2
	            } );
	            $('#overlay-inner-label').empty();
	            $('#overlay-inner-label').append($(this).attr('title'));
        });
    }
    
    // Add listener to overlay to close it
    $('#overlay-inner-close').click(function() {
    	$('#overlay-wrapper').fadeOut(5e2);
    });

	// Opens/closes the menu when the menu button is clicked
	$('#menu').click(function() {
		$('header nav ul').fadeToggle();
		return false;
	});

	// CLose the menu when an option is picked
	$('header nav ul a').click(function() {
		$('header nav ul').fadeOut();
	});
});