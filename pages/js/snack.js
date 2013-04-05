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
    
    // Add listeners to the code block titles to show/hide the code
    var codeBlocks = $('.code-wrapper');
    if (codeBlocks.children('.code-title').length && codeBlocks.children('.code').length) {
    	codeBlocks.each(function() {
        	$(this).children('.code').hide();
    		$(this).children('.code-title').css('cursor', 'pointer');
        	$(this).children('.code-title').children('.code-label').html(clExpand).show();
        });
    	codeBlocks.children('.code-title').click(function(e) {
                e.preventDefault();
                var codeLabel = $(this).children('.code-label');
                codeLabel.fadeOut('fast');
                $(this).parent().children('.code').slideToggle('slow', function() {
                	if (codeLabel.html() == clExpand) {
                		codeLabel.html(clCollapse);
        	    	} else {
        	    		codeLabel.html(clExpand);
        	    	}
                	codeLabel.fadeIn('slow');
                });
                updatePositions();
        });
    }
    
	// Updates the anchor locations
    updatePositions();
	
	// Scrollhandler to light up closest tag
	$(window).scroll(function() {
		var offset = $(window).scrollTop();
		var closest = positions[0];
		var closestPos = 0;
		var prev = Math.abs(closest.ofs - offset);
		for (var i = 0; i < positions.length; i++) {
			 $(pageAnchors[i]).removeClass('active');
			var diff = Math.abs(positions[i].ofs - offset);
			if (diff < prev && (offset - positions[i].ofs) <= 50 ) {
				prev = diff;
		        closest = positions[i];
		        closestPos = i;
		    }
		}
		$(pageAnchors[closestPos]).addClass('active');
	});
	
	// Force a scroll
	$(window).scrollTop($(window).scrollTop());
});

// Updates the anchor locations
function updatePositions() {
	pageAnchors = $('a[href^="#"]');
	positions = [];
	pageAnchors.each(function() {
		var anchor = $(this).attr('href');
		var pos = $(anchor).offset();
		positions.push({'tag':anchor, 'ofs':pos.top});
	});
	// Force a scroll
	$(window).scrollTop($(window).scrollTop());
}