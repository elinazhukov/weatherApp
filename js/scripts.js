// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

// SPOKANE weather

$.simpleWeather({
    location: 'spokane',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
      $('i').addClass( 'icon-' + weather.code );
      
      // Get Condition Code
      console.log(weather.code);
            
            
      if ( weather.code >= 23 && weather.code <= 29 ) {
         $('body').addClass('cloudy');   
      }
      if ( weather.code >= 30 && weather.code <= 36 ) {
         $('body').addClass('sunny');   
      }
            
          
          
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });