/*
 * Author: 73 6E 61 63 6B 27 
 * Last edit: 04/04/2013 15:22 +0100
 */
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
    $('#overlay-wrapper').click(function() {
    	$('body').css({ overflow: 'visible' })
    	$(this).fadeOut(5e2);
    });
    
    // Code label texts
    var clExpand = "(Click to expand)";
    var clCollapse = "(Click to minify)";
    
    // Hide code block
    $('#cc-1').css('display', 'none');
    $('#cc-2').css('display', 'none');
    
    // Set code labels
	$('#cl-1').html(clExpand);
	$('#cl-2').html(clExpand);
	
    // Show code labels
    $('#cl-1').show();
    $('#cl-2').show();
    
    // Change pointer
    $('#code-1').css('cursor', 'pointer');
    $('#code-2').css('cursor', 'pointer');
    
    // Toggle code blocks
    $('#code-1').click(function() {
		$('#cl-1').fadeOut('fast');
    	$('#cc-1').slideToggle('slow', function() {
    		if ($('#cl-1').html() == clExpand) {
	    		$('#cl-1').html(clCollapse);
	    	} else {
	    		$('#cl-1').html(clExpand);
	    	}
    		$('#cl-1').fadeIn('slow');
    	});
    });
    $('#code-2').click(function() {
		$('#cl-2').fadeOut('fast');
    	$('#cc-2').slideToggle('slow', function() {
	    	if ($('#cl-2').html() == clExpand) {
	    		$('#cl-2').html(clCollapse);
	    	} else {
	    		$('#cl-2').html(clExpand);
	    	}
    		$('#cl-2').fadeIn('slow');
    	});
    });
});