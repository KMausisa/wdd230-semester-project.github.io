const cityId = '5391959';
const apiId = '0d648c9f2d64c1cd646caf6d06eb1492';

// URL for current forecast information
export const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiId}&units=imperial`;

// URL for weekyl forecast information
export const apiForecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiId}&units=imperial`;