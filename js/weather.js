const UI = new Ui();

class Weather {
    constructor() {
        this.APIKey = 'a5466a72d427871e1811714eca0e2b69';
        this.city = 'tehran'
    }

    getWeatherData(city = this.city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.APIKey}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                UI.showWeatherInfo(data);
            })
    }
}