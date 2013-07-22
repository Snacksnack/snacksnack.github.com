$(document).ready(function() {
	var type = getURLParameter('type');

	switch(type) {
		case 'full':
		    $('.list').append('<tr id="rownames"></tr>');
		    $.each(rownames, function(key, value) {
		    	if (key > 1) {
		       		$('#rownames').append('<th>' + value + '</th>');
		    	}
		    });

			$.each(data, function(id, entry) {
			    $('.list').append('<tr id="row-' + id + '"></tr>');
		    	$.each(entry, function(key, value) {
		    		var appender;
		    		switch(key) {
		    			case 3: appender = '<td>' + value + '</td><td>' + getAge(value) + '</td>'; break;
		    			case 5: appender = '<td><a href="mailto:' + value + '">' + value + '</a></td>'; break;
		    			default: appender = '<td>' + value + '</td>';
		    		}
		    		$('#row-' + id).append(appender);
		    	});
		    });
			break;
		case 'checked':
			var rows = getURLParameter('rows').split('');
			var columns = getURLParameter('columns').split('');
			var extras = getURLParameter('extra').split('');
			var extratextbox = getURLParameter('extratextbox').split('~');

			$('.list').append('<tr id="rownames"></tr>');
		    $.each(rownames, function(key, value) {
		        if (key != 0 && columns[key] == 1) {
		       		$('#rownames').append('<th>' + value + '</th>');
		    	}
		    });

		    $.each(extranames, function(key, value) {
		    	if (extras[key] == 1) {
		       		$('#rownames').append('<th>' + value + '</th>');
		    	}
		    });

		    for (var i = 0; i < extratextbox[0]; i++) {
		    	$('#rownames').append('<th></th>');
		    }

			$.each(data, function(id, entry) {
				if (rows[id] == 1) {
				    $('.list').append('<tr id="row-' + id + '"></tr>');
			    	$.each(entry, function(key, value) {
			    		var appender;
			    		switch(key) {
			    			case 3: appender = '<td>' + getAge(entry[2]) + '</td>'; break;
			    			case 5: appender = '<td><a href="mailto:' + value + '">' + value + '</a></td>'; break;
			    			default: appender = '<td>' + value + '</td>';
			    		}
			    		if (columns[key + 1] == 1) {
			    			$('#row-' + id).append(appender);
			    		}
			    	});

			    	$.each(extranames, function(key, value) {
				    	if (extras[key] == 1) {
				       		$('#row-' + id).append('<td></td>');
				    	}
				    });

				    for (var i = 0; i < extratextbox[0]; i++) {
				    	$('#row-' + id).append('<td></td>');
				    }
			    }
		    });
			break;
		default:
			$('body').append('Can\'t generate a list without a type!');
	}
});

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function getAge(dateString) {   
    var dates = dateString.split("-");
    var d = new Date();
    var userday = dates[0];
    var usermonth = dates[1];
    var useryear = dates[2];
    var curday = d.getDate();
    var curmonth = d.getMonth()+1;
    var curyear = d.getFullYear();
    var age = curyear - useryear;
    if((curmonth < usermonth) || ( (curmonth == usermonth) && curday < userday   )){
        age--;
    }
    return age;
}
