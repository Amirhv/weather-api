class Ui {
    constructor() {
        this.boxOneDiv = document.querySelector('#box-1');
        this.boxTwoDiv = document.querySelector('#box-2');
        this.boxThreeDiv = document.querySelector('#box-3');
    }

    showWeatherInfo(data) {
        this.boxOneDiv.innerHTML = `
        <!-- main -->
        <div><h1>Main Info</h1></div>
        <hr>
        <div>city : ${data.name}</div>
        <div>Temp : ${(data.main.temp - 273.15).toFixed(2)} C</div>
        <div>Temp min : ${(data.main.temp_min - 273.15).toFixed(2)} C</div>
        <div>Temp max : ${(data.main.temp_max - 273.15).toFixed(2)} C</div>
        <div>Feels like: ${(data.main.feels_like).toFixed(2)} C</div>
        <div>Humidity : ${data.main.humidity}%</div>
        <div>Pressure : ${data.main.pressure} hPa</div>
        `;

        this.boxTwoDiv.innerHTML = `
        <!-- weather -->
        <div><h1>Weather Description</h1></div>
        <hr>
        <div>Main Situation : ${data.weather[0].main}</div>
        <div>Description : ${data.weather[0].description}</div>
        `;

        this.boxThreeDiv.innerHTML = `
        <!-- wind -->
        <div><h1>Wind Info</h1></div>
        <hr>
        <div>Deg : ${data.wind.deg}</div>
        <div>Speed : ${data.wind.speed} meter/sec</div>
        `;
    }
}