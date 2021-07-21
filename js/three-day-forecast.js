import { apiForecastURL } from "./constants.js";


fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let day = 0;
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('12:00:00'));
    fiveDayForecast.pop();
    fiveDayForecast.pop();

    // loop through each forecast day up to three days
    fiveDayForecast.forEach(x => {
        let d = new Date(x.dt_txt);
        let imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '@2x.png';
        document.getElementById(`dayOfWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        day++;
    });
});