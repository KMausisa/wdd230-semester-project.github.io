import { apiWeatherURL } from "./constants.js";


fetch(apiWeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currentTemp').textContent = jsObject.weather[0].description;

    // Display High Temperature
    document.getElementById('highTemp').textContent = Math.round(jsObject.main.temp_max);

    // Display Current Humidity
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity);

    // Display weather Icon
    let imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '@2x.png';
    document.getElementById('icon').setAttribute('src', imagesrc);
  });
