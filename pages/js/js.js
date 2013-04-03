$(document).ready(function() {
	// Get an URL to display code from
	var baseURL = 'https://api.github.com/repos/Snacksnack/';
	var searchURLs = [
	      			'Ruby-Colors/contents/Ruby-Colors/colors.rb',
	      			'Ruby-Fighters/contents/Ruby-Fighters/fighters.rb',
	      			'dotfiles/contents/dotfiles/Console2/console.xml',
	      			'Ircbot/contents/IrcBot/src/org/snack/irc/main/Startup.java',
	      			'Ruby-Pastie/contents/Ruby-Pastie/paste.rb',
	      			'Ruby-Pastie/contents/Ruby-Pastie/pastie.rb',
	      			'Ruby-Pastie/contents/Ruby-Pastie/history.rb'
	];
	var searchURL = searchURLs[Math.floor((Math.random()*(searchURLs.length-1)))];
	
	// Get the code and display it
	$.ajax({
		type: 'GET',
		url: baseURL + searchURL,
		dataType: "jsonp",
		crossDomain: true,
		success: function(response){
			$('#content-wrapper').attr('data-code', Base64.decode(response.data.content));
		}
	});
	
    // Set background width
	$('#content-wrapper').css('width', $(window).width()-161+'px');
	
	// Add listeners to image anchors to open the overlay
	var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
    if (imageLinks.children('img').length) {
        imageLinks.children('img').each(function() {
        	$(this).attr('title', 'Click to enlarge');
        });
        imageLinks.click(function(e) {
                e.preventDefault();
                $('#overlay-wrapper img').attr('src', $(this).context);
                $('#overlay-wrapper img').load(function() {
                	$("body").css({ overflow: 'hidden' })
	                $('#overlay-wrapper').fadeIn(5e2);
	                $(this).attr('title', 'Click anywhere to close');
	                $('#overlay-wrapper img').css( { "margin-left" : ($(window).width()-$('#overlay-wrapper img').width())/2, "margin-top" : ($(window).height()-$('#overlay-wrapper img').height())/2 } )
                });
        });
    }
    
    // Add listener to overlay to close it
    $('#overlay-wrapper').click(function(e) {
    	$("body").css({ overflow: 'visible' })
    	$(this).fadeOut(5e2);
    });
});