$(document).ready(function(){
  // Video Modal
  $('.launch-modal').on('click', function(e){
      e.preventDefault();
      $( '#' + $(this).data('modal-id') ).modal();
  });
  // Hours
  $('.opening-hours li').eq(new Date().getDay()).addClass('today');

  // Weather //

  $.simpleWeather({
    location: 'Janvier, Alberta',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<p>Current weather: '+weather.temp+'&deg;'+weather.units.temp+'</p>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

});

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.home-navigation').fadeOut();
     }
    else
     {
      $('.home-navigation').fadeIn();
     }
 });
