function initialize() {
   	var myLatlng = new google.maps.LatLng(52.331121, 6.649524)

   	var mapOptions = {
   		zoom: 12,
   		center: myLatlng,
   		mapTypeId: google.maps.MapTypeId.ROADMAP
   	};

   	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   	var contentString = '<div id="content"><div id="siteNotice"></div>' +
   		'<h1 id="firstHeading" class="firstHeading">TVA Service Center</h1>' +
   		'<div id="bodyContent">' +
   		'<img id="map-img" src="assets/img/map.jpg" alt="tva-front" />' +
   		'<ul id="map-list" class="no-top">' +
   		'<li>Twentelaan 2</li>' +
   		'<li>7609 RE Almelo</li>' +
   		'<li>Tel: 0546-851212</li>' +
   		'<li>Fax: 084-7556073</li>' +
   		'<li>E-mail: info@tvaservice.nl</li>'
   		'</ul></div></div>';

   	var infowindow = new google.maps.InfoWindow({
   		content: contentString
   	});

   	var marker = new google.maps.Marker({
   		position: myLatlng,
   		map: map,
   		title: 'TVA Service Center'
   	});

   	google.maps.event.addListener(marker, 'click', function() {
   		infowindow.open(map, marker);
 	});
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
