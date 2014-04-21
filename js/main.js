$(document).ready(function() {
	$("#toggle").click(function() {
		$("#mobile-menu").slideToggle('fast');
	});

  $('#get-involved a').click(function() {
    var $target = $(this).attr('href');
    $('#gi-options').find('.options').not($target).slideUp('fast');
    $($target).slideDown('fast');
  });

  // Load dialog on click
  $('#giving-options #checks').click(function () {
    $('.donate-options').hide();
    $('#checks-content').show();
    $('#basic-modal-content').modal();
    return false;
  });
  $('#giving-options #workplace').click(function () {
    $('.donate-options').hide();
    $('#workplace-content').show();
    $('#basic-modal-content').modal();
    return false;
  });
  $('#giving-options #stock').click(function () {
    $('.donate-options').hide();
    $('#stock-content').show();
    $('#basic-modal-content').modal();
    return false;
  });
  $('#giving-options #corporate').click(function () {
    $('.donate-options').hide();
    $('#corp-content').show();
    $('#basic-modal-content').modal();
    return false;
  });
  $('#simplemodal-overlay').click(function () {
    $('#basic-modal-content').hide();
    return false;
  });
 
 $('#slider-shelters').liquidSlider({
    dynamicArrows: true,
    hideSideArrows: false,
    dynamicTabs: false,
    autoHeight:true,
    minHeight: 300,
    responsive:true,
    swipe:true
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

$(function(){
     $('#slider-homebuild').liquidSlider({
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