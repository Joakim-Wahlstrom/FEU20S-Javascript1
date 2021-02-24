import { getData, buildDate } from './functions.js'

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const city = document.querySelector('.city');

// FUNKTIONER

const displayResults = data => {
  city.innerText = `${data.name}, ${data.sys.country}`

  const date = document.querySelector('.date');
  let now = new Date();
  date.innerText = buildDate(now);

  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}<span>&degC</span>`;
  document.querySelector('.icon').style.background = `url('http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`;
  
}


form.addEventListener('submit', e => {
  e.preventDefault();

  getData(input.value)
    .then(data => {
      console.log(data)
      displayResults(data)
    })
})