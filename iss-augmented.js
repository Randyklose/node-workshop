/*### Augmenting our application
  * Create a file called `iss-augmented.js`. It will be similar to `iss.js` but more difficult!
  * Augment your ISS application to tell the user how "far" the ISS is from them. Here is how you will do it:
  * Using the `prompt` module, ask the user to enter their location (e.g. "montreal")
  * Using Google's Geolocation API, find out the latitude and longitude of the provided location. Here is how:
    * This URL: https://maps.googleapis.com/maps/api/geocode/json?address=montreal
    will show the lat/long for montreal
    * Explore this URL in your web browser to figure out where the lat/lng is located.
    Try to pass different values for "address" for educational purposes :)
  * When you are comfortable with finding the location based on an input address, you can then calculate 
  the distance between the ISS and the user:
    * Look at this URL: http://www.movable-type.co.uk/scripts/latlong.html
    * It specifies a formula for calculating the distance. Scroll the page to the JavaScript portion,
    and create a function that uses the provided code. You don't need to understand what is going on in there,
    it is **very** mathy!
    * **NOTE**: In order for this code to work, you'll need to add the following code at the beginning of
    your program:
```javascript
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
```
  * Finally, display a message to the user telling them what their "distance" to the ISS is.
  * Save/commit/push*/
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  } 
  
  var url = "http://api.open-notify.org/iss-now.json";
  var url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  var request = require('request');
  var prompt = require('prompt');
  
  
  prompt.get(['location'], function(err, result) {
              if (err) {
                  console.log("Error");
              }
              else {
                  var cityUrl = url1 + result.location;


                  request(cityUrl, function(err, response) {
                      if (err) {
                          console.log("Error");
                      }
                      else {
                          var cityCoordinates = JSON.parse(response.body);

                          var lon1 = cityCoordinates.results[0].geometry.location.lng;
                          var lat1 = cityCoordinates.results[0].geometry.location.lat;

                          request(url, function(err, response) {
                              if (err) {
                                  console.log("Error");
                              }
                              else {
                                  var coordinates = JSON.parse(response.body);

                                  var lon2 = parseFloat(coordinates.iss_position.longitude);
                                  var lat2 = parseFloat(coordinates.iss_position.latitude);

                                console.log("The ISS is: " + distance(lat1,lat2,lon1,lon2)+ " kilometers away from " + result.location + "!")
                              }
                          })
                      }
                  })
              }
  })
    
  
function distance(lat1, lat2, lon1, lon2) {  
    console.log(lat1, lat2, lon1, lon2)
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    var d = R * c;
    return Math.floor(d/1000);

}

