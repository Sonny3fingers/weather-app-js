export class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.main = document.getElementById("w-main");
    this.temp = document.getElementById("w-temp");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.maxTemp = document.getElementById("w-max-temp");
    this.minTemp = document.getElementById("w-min-temp");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent =
      `${weather.name}, ${weather.sys.country}`.toUpperCase();
    this.main.textContent = weather.weather[0].main;
    this.temp.textContent = `${weather.main.temp}\u00B0C`;
    this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    this.humidity.textContent = `humidity: ${weather.main.humidity} %`;
    this.maxTemp.textContent = `max temp: ${weather.main.temp_max}\u00B0C`;
    this.minTemp.textContent = `min temp: ${weather.main.temp_min}\u00B0C`;
    this.feelsLike.textContent = `feels like: ${weather.main.feels_like}\u00B0C`;
    this.wind.textContent = `wind speed: ${weather.wind.speed} m/s`;
  }
}
