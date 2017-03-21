// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})

// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});

//// Get Weather - Location
//var getWeather = function(location) {
//  
//    $.simpleWeather({
//    location: location,
//    unit: 'f',
//    success: function(weather) {
//      
//      // Entire weather object
//      console.log(weather);
//      
//      // Display Data
//      $('#currentLocation .temp').text(weather.temp);
//      $('#currentLocation .city').text(weather.city);
//      $('#currentLocation img').attr('src', weather.image);
//      
//		// Change Icon w/ Condition code
//      var iconCode = 'icon-' + weather.code;
//      $('i').attr('class', iconCode );
//		
//    },
//    error: function(error) {
//      // Show if weather cannot be retreived
//      console.log('Look Outside.');
//    }
//  
//  }); 
	
	// Spokane
$.simpleWeather({
    location: 99203,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#spokane .currently').text(weather.currently);
      $('#spokane .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane img').attr('src', weather.image);
      
		// Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
      $('#spokane i').attr('class', iconCode );
		
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Seattle
$.simpleWeather({
    location: 98105,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
		$('#seattle .currently').text(weather.currently);
      $('#seattle .temp').text(weather.temp);
      $('#seattle .city').text(weather.city);
      $('#seattle img').attr('src', weather.image);
      
		// Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
      $('#seattle i').attr('class', iconCode );
		
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Portland
$.simpleWeather({
    location: 97214,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#portland .currently').text(weather.currently);
		$('#portland .temp').text(weather.temp);
      $('#portland .city').text(weather.city);
      $('#portland img').attr('src', weather.image);
      
		// Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
      $('#portland i').attr('class', iconCode );
		
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
	


