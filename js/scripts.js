// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

// SPOKANE Weather

$.simpleWeather({
    location: '098646',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
// Display Data
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
      $('i').addClass( 'icon-' + weather.code );
      $('figcaption').text(weather.currently);
    
        
// Display Future Weather
      // Day 1
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) .high').text(weather.forecast[0].high);
      $('aside figure:nth-child(1) .low').text(weather.forecast[0].low);
      $('i').addClass( 'icon-' + weather.code );
        
      // Day 2
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) .high').text(weather.forecast[1].high);
      $('i').addClass( 'icon-' + weather.code );
        
      // Day 3
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) .high').text(weather.forecast[2].high);
      $('i').addClass( 'icon-' + weather.code );
        
// Get Condition Code
      console.log(weather.code);
            
      //If functions
      if ( weather.code >= 0 && weather.code <= 7 ) {
         $('div').addClass('bad');
      }
          
      if ( weather.code >= 8 && weather.code <= 17 ) {
         $('div').addClass('wet');
      }      
    
      if ( weather.code >= 18 && weather.code <= 19 ) {
         $('div').addClass('misty');
      }
          
      if ( weather.code >= 20 && weather.code <= 22 ) {
         $('div').addClass('crummy');
      }
          
      if ( weather.code >= 23 && weather.code <= 29 ) {
         $('div').addClass('cloudy');
      } 
    
      if ( weather.code >= 30 && weather.code <= 36 ) {
         $('div').addClass('sunny');   
      }
    
      if ( weather.code >= 37 && weather.code <= 40 ) {
         $('div').addClass('thunderstorms');   
      }
      if ( weather.code >= 41 && weather.code <= 43 ) {
         $('div').addClass('snow');   
      }
      if ( weather.code >= 41 && weather.code <= 43 ) {
         $('div').addClass('gross');   
      }
          
          
          
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });