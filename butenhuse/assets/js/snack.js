$(document).ready(function() {	
	// Hide the javascript notice
	$('#notice').hide();

    // Add the rownames
    var first = true;
    $('.people').append('<tr id="rownames"></tr>');
    $('.people').append('<tr id="rowboxes"></tr>');
    $.each(rownames, function(key, value) {
        $('#rownames').append('<th>' + value + '</th>');
        if(first) {
            $('#rowboxes').append('<td></td>');
            first = false;
        } else {
            $('#rowboxes').append('<td><input type="checkbox" name="column"></td>');
        }
    });

    // Read the data and add it
    $.each(data, function(id, entry) {
    	$('.people').append('<tr id="row-' + id + '"><td><input type="checkbox" name="row"></td></tr>');
    	$.each(entry, function(key, value) {
    		var appender;
    		switch(key) {
                case 3: appender = '<td>' + getAge(entry[2]) + '</td>'; break;
    			case 4: appender = '<td><a href="mailto:' + value + '">' + value + '</a></td>'; break;
    			default: appender = '<td>' + value + '</td>';
    		}
    		$('#row-' + id).append(appender);
    	});
    });

    $('.checked').click(function() {
        var boxes = $('.information input');
        var rows = '', columns = '0', extra = '', extratextbox = '';
        $.each(boxes, function(key, value) {
            switch(value.name) {
                case 'column':
                    columns += (value.checked) ? '1' : '0';
                    break;
                case 'row':
                    rows += (value.checked) ? '1' : '0';
                    break;
                case 'extra':
                    extra += (value.checked) ? '1' : '0';
                    break;
                case 'extratextbox':
                    extratextbox += value.value + '~';
                    break;
            }
        });
        location.href = 'list.html?type=checked&rows=' + rows + '&columns=' + columns + '&extra=' + extra + '&extratextbox=' + extratextbox;
    })

    $('.unchecked').click(function() {
        location.href = 'list.html?type=full';
    });
});

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
