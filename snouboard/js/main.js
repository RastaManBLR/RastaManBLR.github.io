$(document).ready(function(){
  $(".slider").owlCarousel({
  	items: 1,
  	autoplay: true,
  	loop: true
  	  });
  $(".slider_snowbords").owlCarousel({
  	items: 3,
  	autoplay: true,
  	loop: true,
  	nav: true,
  	center: true,
  	navText: ['','']
  	  });
});