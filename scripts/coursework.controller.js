$(document).ready(function() {
  $('.button-collapse').sideNav();

  // sets the correct offset for the side nav in both mobile and desktop versions
  var offset = $('.nav-wrapper').height();

  $('.side-nav').css('margin-top', offset);
});
