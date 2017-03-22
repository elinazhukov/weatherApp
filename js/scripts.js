// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

// SPOKANE Weather

$.simpleWeather({
    location: 'Spokane',
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
            
      //If functions
      if ( weather.code >= 0 && weather.code <= 7 ) {
         $('body').addClass('really bad');
          
      if ( weather.code >= 8 && weather.code <= 17 ) {
         $('body').addClass('wet');      
    
      if ( weather.code >= 18 && weather.code <= 19 ) {
         $('body').addClass('misty');
          
      if ( weather.code >= 20 && weather.code <= 22 ) {
         $('body').addClass('crummy');
          
      if ( weather.code >= 23 && weather.code <= 29 ) {
         $('body').addClass('cloudy');
          
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