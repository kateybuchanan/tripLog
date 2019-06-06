//this is a java script file
$(document).ready(function() {
$(".close, .hamburger").click(function(e){
    e.preventDefault();
    $("nav ul").toggleClass('open-nav');
    $("body").toggleClass('nav-opened');
  });
  // $("nav a").on("click", function(){
  //   var hash= this.hash;
  //   $("html, body").animate({scrollTop:$(hash).offset().top},800, function() {window.location.hash=hash;
  //   });
  // });
  var scroll = new SmoothScroll('a[href*="#"]', {
  	speed: 300
  });
  	$('.popup-gallery').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: true,
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				return item.el.attr('title');
  			}
  		}
  	});
  });
   // $('.flexslider').flexslider();
});
