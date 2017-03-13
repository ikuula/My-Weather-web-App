// http://simpleweatherjs.com/

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
  location: 99203,
  
  unit: 'f',
  
  success: function(weather){
    // Check for weather
    console.log(weather);
    
    // Display Current Weather
    $('.temp').text(weather.temp);
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.image img').attr('src', weather.image);
    
   // Display Future Weather
    $('.forecast figure:nth-child(1) img').attr('src', weather.forecast[0].image);
    $('.forecast figure:nth-child(1) figcaption').text(weather.forecast[0].text + ' baby!');
  
  },
  error: function(error) {
    console.log('Look outside.');
  }
});