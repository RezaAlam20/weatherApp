import './dom.js';

const api_key = 'APW8UZG2P23V9HBML6PTFQAJG';
let city = 'london';
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api_key}`;
async function getWeatherData() {
  const data = await fetch(url);
  const parsed = await data.json();
  const today = parsed.days[0];
  const description = today.description;
  const temp = today.temp;
  return { description, temp };
}

function selectCity(cityName) {
  city = cityName;
}
