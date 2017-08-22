// SMOOTH SCROLLING

$(document).ready(function() {
	$(".navbar a, footer a[href='myPage']").on("click", function() {
		// Make sure this.hash has a value before overriding default behaviour
		if (this.hash !== "") {
			// Prevent default anchor click behaviour
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 900, function() {
				// Add hash to URL when done scrolling
				window.location.hash = hash;
			});
		}
	});
});

// SCROLL IN ELEMENTS
$(window).scroll(function() {
	$(".slideanim").each(function() {
		var pos = $(this).offset().top;

		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
	})
})

function myMap() {
	var myCenter = new google.maps.LatLng(28.411367, -16.565719);
	var mapProp = {
		center: myCenter,
		zoom: 12,
		scrollwheel: false,
		draggable: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({position: myCenter});
	marker.setMap(map);
}