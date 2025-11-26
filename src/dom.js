import { getWeatherData } from './index.js';
import { selectCity } from './index.js';

const content = document.querySelector('#content');
const submit = document.querySelector('#submitBtn');
const input = document.querySelector('#name');
let weatherData;
let city;
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  city = input.value.toUpperCase();
  selectCity(city);
  weatherData = await getWeatherData();
  makeWeatherSheet(weatherData);
  input.value = '';
});

function makeWeatherSheet(data) {
  while (content.firstElementChild) {
    content.removeChild(content.firstElementChild);
  }
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <h1 class="cityName">${city}</h1>
    <p class="info temp">TEMPRATURE : ${data.temp}</p>
    <p class="info description">DESCRIPTION : ${data.description}</p>
    <p class="info sunrise">SUNRISE : ${data.sunrise}</p>
    <p class="info sunset">SUNSET :${data.sunset}</p>
    <p class="info windspeed">WINDSPEED :${data.windspeed}</p>`;
  content.appendChild(div);
}
