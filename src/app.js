import "../dist/assets/styles/scss/styles.scss";
import { Weather } from "./utility/weather";
import { UI } from "./UI/ui";
import { Storage } from "./utility/storage";

const ui = new UI();
const storage = new Storage();
const storedLocation = storage.getLocationData();
const weather = new Weather(storedLocation.city, storedLocation.state);

class App {
  constructor() {
    document.addEventListener("DOMContentLoaded", this.getWeather);
    document.getElementById("w-change-btn").addEventListener("click", (e) => {
      e.preventDefault();
      const city = document.getElementById("city").value;
      const state = document.getElementById("state").value;
      // change location
      weather.changeLocation(city, state);
      // store new location
      storage.setLocationData(city, state);
      // get weather again
      this.getWeather();
      // close the modal
      document.getElementById("city").value = "";
      document.getElementById("state").value = "";
    });
  }

  async getWeather() {
    try {
      const results = await weather.getWeather();
      ui.paint(results);
    } catch (error) {
      alert(error);
    }
  }
}

const app = new App();
