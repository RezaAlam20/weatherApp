const content = document.querySelector('#content');
const submit = document.querySelector('#submitBtn');
const input = document.querySelector('#name');
let city;
submit.addEventListener('click', (e) => {
  e.preventDefault();
  city = input.value;
});
