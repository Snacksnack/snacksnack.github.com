$(document).ready(function () {
    $("#myCanvas").fadeOut(500, function () {
    	$("#myCanvas").tagcanvas({
            textFont: "'Open Sans', sans-serif",
            textColour: "#444",
            textHeight: 25,
            outlineMethod: "colour",
            outlineColour: "#a16a71",
            outlineOffset: 0,
            maxSpeed: .03,
            minBrightness: .2,
            depth: .92,
            decel: .98,
            reverse: true,
            hideTags: false,
            shadow: "#444",
            shadowBlur: 1,
            weight: true,
            imageScale: null,
            shuffleTags: true,
            shape: "sphere",
            wheelZoom: false
        }, "tags")
    	$("#myCanvas").fadeIn(1000);
	}).error(function () {
		$("#error").fadeIn(1000)
	})
});