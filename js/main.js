$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 0 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
$(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      fixedElements: 'header',
      navigationTooltips:['intro','Web Design','Mobile Application','Branding','Markitting','Softwear Solution'],
      showActiveTooltip:true,
      scrollOverflow:true,
    });
});
