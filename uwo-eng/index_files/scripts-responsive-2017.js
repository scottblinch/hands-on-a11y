function swapImage() {
	switch (intImage) {
		case 1:
			return document.flip1.src = "https://www.uwo.ca/web_standards/img/tab/tab-closed.gif", intImage = 2, state = "up", !1;
		case 2:
			return document.flip1.src = "https://www.uwo.ca/web_standards/img/tab/tab-open.gif", intImage = 1, state = "down", !1
	}
}
function rOut() {
	"up" == state ? document.flip1.src = "https://www.uwo.ca/web_standards/img/tab/tab-closed.gif" : document.flip1.src = "https://www.uwo.ca/web_standards/img/tab/tab-open.gif"
}
function rOver() {
	"up" == state ? document.flip1.src = "https://www.uwo.ca/web_standards/img/tab/tab-open.gif" : document.flip1.src = "https://www.uwo.ca/web_standards/img/tab/tab-closed.gif"
}
function menuOpen() {
	$(this).siblings(".open").removeClass("open"), $(this).addClass("open")
}
function menuClose() {
	$(this).removeClass("open")
}
function clearForms() {
	var e;
	for (e = 0; e < document.forms.length; e++)document.forms[e].reset()
}
$(document).ready(function () {
	"Windows" == $.client.os && "Firefox" == $.client.browser ? ($(".first").css("margin-left", "-40px"), $(".second").css("margin-left", "-242px"), $(".third").css("margin-left", "-402px"), $(".fourth").css("margin-left", "-569px"), $(".fifth").css("margin-left", "-750px")) : "Windows" == $.client.os && "Explorer" == $.client.browser && $.client.browserversion > "8" ? ($(".first").css("margin-left", "-40px"), $(".second").css("margin-left", "-241px"), $(".third").css("margin-left", "-402px"), $(".fourth").css("margin-left", "-569px"), $(".fifth").css("margin-left", "-750px")) : "Windows" == $.client.os && "Explorer" == $.client.browser && $.client.browserversion < "9" ? ($(".first").css("margin-left", "-40px"), $(".second").css("margin-left", "-241px"), $(".third").css("margin-left", "-400px"), $(".fourth").css("margin-left", "-566px"), $(".fifth").css("margin-left", "-746px")) : "Mac" == $.client.os && "Firefox" == $.client.browser ? ($(".first").css("margin-left", "-40px"), $(".second").css("margin-left", "-241px"), $(".third").css("margin-left", "-403px"), $(".fourth").css("margin-left", "-571px"), $(".fifth").css("margin-left", "-753px")) : "iPad" == $.client.os && "Safari" == $.client.browser ? ($(".first").css("margin-left", "-41px"), $(".second").css("margin-left", "-246px"), $(".third").css("margin-left", "-411px"), $(".fourth").css("margin-left", "-582px"), $(".fifth").css("margin-left", "-766px")) : "Windows" == $.client.os && "Firefox" != $.client.browser || "Explorer" != $.client.browser ? ($(".first").css("margin-left", "-40px"), $(".second").css("margin-left", "-241px"), $(".third").css("margin-left", "-400px"), $(".fourth").css("margin-left", "-566px"), $(".fifth").css("margin-left", "-746px")) : ("Mac" == $.client.os && $.client.browser, $(".first").css("margin-left", "-40px"), $(".second").css("margin-left", "-244px"), $(".third").css("margin-left", "-406px"), $(".fourth").css("margin-left", "-576px"), $(".fifth").css("margin-left", "-759px"))
}), $(document).ready(function () {
	"Windows" == $.client.os && "Firefox" == $.client.browser ? ($("#department-searchfield").css("width", "211px"), $(".dropdown_1column").css("margin", "10px auto")) : "Windows" == $.client.os && "Explorer" == $.client.browser ? ($(".dropdown_1column").css("margin", "10px auto"), $("#department-searchfield").css("width", "214px")) : "Windows" == $.client.os && "Chrome" == $.client.browser ? ($(".dropdown_1column").css("margin", "10px auto"), $("#department-searchfield").css("width", "215px")) : "Mac" == $.client.os && "Firefox" == $.client.browser ? ($(".dropdown_1column").css("margin", "10px auto"), $("#department-searchfield").css("width", "214px")) : "Mac" == $.client.os && "Chrome" == $.client.browser ? ($(".dropdown_1column").css("margin", "10px auto"), $("#department-searchfield").css("width", "216px")) : "Mac" == $.client.os && "Safari" == $.client.browser ? ($(".dropdown_1column").css("margin", "12px auto"), $("#department-searchfield").css("width", "215px")) : "iPad" == $.client.os && "Safari" == $.client.browser ? ($(".dropdown_1column").css("margin", "13px auto"), $("#department-searchfield").css("width", "214px")) : "Windows" == $.client.os && "Firefox" != $.client.browser ? ($(".dropdown_1column").css("margin", "12px auto"), $("#department-searchfield").css("width", "214px")) : ($(".dropdown_1column").css("margin", "10px auto"), $("#department-searchfield").css("width", "214px"))
}), $(document).ready(function () {
	$("#faculty-slider").flexslider({
		direction: "horizontal",
		slideshowSpeed: 6e3,
		animationSpeed: 800,
		startAt: 0,
		pauseOnAction: !0,
		pauseOnHover: !0,
		controlNav: !0,
		directionNav: !1
	}), $("#secondary-slider").flexslider({
		animation: "fade",
		startAt: 0,
		slideshow: !1,
		controlNav: !1,
		directionNav: !0,
		animationLoop: !0
	}), $("#triple-slider").flexslider({
		animation: "slide",
		animationLoop: !0,
		itemWidth: 100,
		itemMargin: 0,
		minItems: 2,
		maxItems: 3,
		controlNav: !1,
		directionNav: !0,
		slideshow: !1
	})
}), $(document).ready(function () {
	$(".flip").click(function () {
		$(".panel").slideToggle("slow")
	})
}), $(document).ready(function () {
	$("#feedback").toggleClick(function () {
		$(".feedback").animate({right: 0})
	}, function () {
		$(".feedback").animate({right: -481})
	}), $(".close").click(function () {
		return $("#feedback").click(), !1
	}), $("#send").click(function () {
		$("#feedback").click()
	})
}), $.fn.toggleClick = function () {
	var e = arguments, t = e.length;
	return this.each(function (i, n) {
		var s = 0;
		$(n).on("click", function () {
			return e[s++ % t].apply(this, arguments)
		})
	})
};
var slider, canSlide = !0, tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag), window.onYouTubeIframeAPIReady = function () {
	$(".flexslider iframe").each(function () {
		var e = new YT.Player(this, {playerVars: {autoplay: 0}});
		e.addEventListener("onStateChange", function (e) {
			switch (e.data) {
				case YT.PlayerState.PLAYING:
					slider.flexslider("stop"), canSlide = !1;
					break;
				case YT.PlayerState.ENDED:
				case YT.PlayerState.PAUSED:
					slider.flexslider("play"), canSlide = !0
			}
		}), $(this).data("player", e)
	})
}, (slider = $("#main-slider").flexslider({
	direction: "horizontal",
	slideshowSpeed: 6e3,
	animationSpeed: 800,
	startAt: 0,
	pauseOnAction: !0,
	pauseOnHover: !0,
	controlNav: !0,
	directionNav: !0,
	touch: !0,
	video: !0,
	before: function () {
		canSlide || slider.flexslider("stop")
	}
})).bind("click", ".flex-prev, .flex-next", function () {
	canSlide = !0, $(".flexslider iframe").each(function () {
		$(this).data("player").pauseVideo()
	})
}), intImage = 2, state = "up", $(document).ready(function () {
	$("#menu li.drop").hoverIntent({over: menuOpen, timeout: 500, out: menuClose})
}), $(document).ready(function () {
	$("#nav li").click(function () {
		return $("ul", this).slideToggle(100), !1
	}), $("#nav li ul li a").click(function () {
		window.location = this.href
	})
});
