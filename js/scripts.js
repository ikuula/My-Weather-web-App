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
	  $('#spokane .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#spokane figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#spokane figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#spokane figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#spokane figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#spokane figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#spokane figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#spokane figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#spokane figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#spokane figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#spokane figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#spokane figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#spokane figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#spokane figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#spokane figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#spokane figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#spokane figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#spokane figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#spokane figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#spokane figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var iconCode = 'icon-' + weather.code;
	  var iconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var iconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var iconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var iconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var iconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#spokane i:nth-child(1)').attr('class', iconCode );
		$('#spokane .day1 i').attr('class', iconCodeDay1 );
		$('#spokane .day2 i').attr('class', iconCodeDay2 );
		$('#spokane .day3 i').attr('class', iconCodeDay3 );
		$('#spokane .day4 i').attr('class', iconCodeDay4 );
		$('#spokane .day5 i').attr('class', iconCodeDay5 );
		
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
	  $('#seattle .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#seattle figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#seattle figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#seattle figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#seattle figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#seattle figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#seattle figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#seattle figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#seattle figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#seattle figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#seattle figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#seattle figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#seattle figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#seattle figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#seattle figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#seattle figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#seattle figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#seattle figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#seattle figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#seattle figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var seattleIconCode = 'icon-' + weather.code;
	  var seattleIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var seattleIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var seattleIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var seattleIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var seattleIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#seattle i:nth-child(1)').attr('class', seattleIconCode );
		$('#seattle .day1 i').attr('class', seattleIconCodeDay1 );
		$('#seattle .day2 i').attr('class', seattleIconCodeDay2 );
		$('#seattle .day3 i').attr('class', seattleIconCodeDay3 );
		$('#seattle .day4 i').attr('class', seattleIconCodeDay4 );
		$('#seattle .day5 i').attr('class', seattleIconCodeDay5 );
		
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
	  $('#portland .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#portland figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#portland figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#portland figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#portland figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#portland figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#portland figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#portland figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#portland figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#portland figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#portland figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#portland figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#portland figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#portland figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#portland figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#portland figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#portland figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#portland figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#portland figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#portland figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var portlandIconCode = 'icon-' + weather.code;
	  var portlandIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var portlandIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var portlandIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var portlandIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var portlandIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#portland i:nth-child(1)').attr('class', portlandIconCode );
		$('#portland .day1 i').attr('class', portlandIconCodeDay1 );
		$('#portland .day2 i').attr('class', portlandIconCodeDay2 );
		$('#portland .day3 i').attr('class', portlandIconCodeDay3 );
		$('#portland .day4 i').attr('class', portlandIconCodeDay4 );
		$('#portland .day5 i').attr('class', portlandIconCodeDay5 );
		
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
	


