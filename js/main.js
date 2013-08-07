$(document).ready(function() {
	$("#toggle").click(function() {
		$("#mobile-menu").slideToggle();
	});
});

// jQuery(function(){
//   var menuOffset = jQuery('#submenu')[0].offsetTop;
//   jQuery(document).bind('ready scroll',function() {
//     var docScroll = jQuery(document).scrollTop();
//     if(docScroll >= menuOffset) {
//       jQuery('#submenu').addClass('nav-fixed').css('width',jQuery('#masthead').width());
//     } else {
//       jQuery('#submenu').removeClass('nav-fixed').removeAttr("width");
//     }
//    });
// });

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