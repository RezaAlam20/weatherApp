import './dom.js';

const api_key = 'APW8UZG2P23V9HBML6PTFQAJG';
let city;

async function getWeatherData() {
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api_key}`;
  const data = await fetch(url);
  const parsed = await data.json();
  const today = parsed.days[0];

  return today;
}

function selectCity(cityName) {
  city = cityName;
}

export { getWeatherData };
export { selectCity };
