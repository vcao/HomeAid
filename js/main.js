$(document).ready(function() {
	$("#toggle").click(function() {
		$("#mobile-menu").slideToggle('fast');
	});

});

function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top) {
    $('#submenu').addClass('nav-fixed');
  } else {
    $('#submenu').removeClass('nav-fixed');
  }
}

$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});

$(function(){
     $('#slider-stories').liquidSlider({
        dynamicArrows: true,
        dynamicTabs: false,
        autoHeight:true,
        minHeight: 300,
        responsive:true,
        swipe:true
      });
});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});