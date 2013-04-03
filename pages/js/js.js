$(document).ready(function() {
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

	$.ajax({
		type: 'GET',
		url: baseURL + searchURL,
		dataType: "jsonp",
		crossDomain: true,
		success: function(response){
			$('#content-wrapper').attr('data-code', Base64.decode(response.data.content));
		}
	});
	
	var imageLinks = $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]');
    if (imageLinks.children('img').length) {
        imageLinks.children('img').each(function() {
        	$(this).attr('title', 'Click to enlarge');
        });
        imageLinks.click(function(e) {
                e.preventDefault();
                $('#overlay-wrapper img').attr('src', $(this).context);
                $('#overlay-wrapper img').load(function() {
	                $('#overlay-wrapper').fadeIn(5e2);
	                $(this).attr('title', 'Click anywhere to close');
	                $('#overlay-wrapper img').css( { "margin-left" : ($(window).width()-$('#overlay-wrapper img').width())/2, "margin-top" : ($(window).height()-$('#overlay-wrapper img').height())/2 } )
                });
        });
    }
    
    $('#overlay-wrapper').click(function(e) {
    	$(this).fadeOut(5e2);
    });
});