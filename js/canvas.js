$(document).ready(function () {
    $("#myCanvas").fadeOut(1e3, function () {
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
            lock: "",
            pulsateTo: 0.2,
            pulsateTime: 0.5,
            wheelZoom: false
        }, "tags")
    	$("#myCanvas").fadeIn(2500);
	}).error(function () {
		$("#error").fadeIn(1e3)
	})
});