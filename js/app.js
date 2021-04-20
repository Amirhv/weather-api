// init weather object
const weather = new Weather();

const cityInput = document.querySelector('#city');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', changeCity);
function changeCity() {
    weather.getWeatherData(cityInput.value);
    console.log(cityInput.value);
}

weather.getWeatherData();