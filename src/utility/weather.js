export class Weather {
  constructor(city, state) {
    (this.city = city.trim()), (this.state = state);
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${process.env.API_KEY}&units=metric`
    );
    if (!response) {
      throw new Error("Failed to fetch weather - please try again.");
    }
    const data = response.json();
    if (!data) {
      throw new Error("Something went wrong - please try again.");
    }
    return data;
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
