import { getWeatherData } from './index.js';
import { selectCity } from './index.js';

const content = document.querySelector('#content');
const submit = document.querySelector('#submitBtn');
const input = document.querySelector('#name');
let weatherData;
let city;
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  city = input.value;
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
    <p class="info temp">temprature : ${data.temp}</p>
    <p class="info description">description : ${data.description}</p>
    <p class="info sunrise">sunrise : ${data.sunrise}</p>
    <p class="info sunset">sunset :${data.sunset}</p>
    <p class="info windspeed">windspeed :${data.windspeed}</p>`;
  content.appendChild(div);
}
