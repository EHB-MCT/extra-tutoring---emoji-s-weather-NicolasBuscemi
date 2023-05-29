"use strict";

const weatherApp = {
  init() {
    const form = document.getElementById('form');
    form.addEventListener('submit', this.handleFormSubmit);
  },
  
  handleFormSubmit(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search').value;
    weatherApp.fetchWeatherData(searchInput);
  },

  fetchWeatherData(city) {
    const apiKey = 'd7b955c4c268fe54649d6f0d702b39d1';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        weatherApp.renderWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherApp.renderError();
      });
  },

  renderWeatherData(weatherData) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
      <h2>Weather</h2>
      <ul>
        <li>Average temperature: ${weatherData.main.temp} °C</li>
        <li>Min temperature: ${weatherData.main.temp_min} °C</li>
        <li>Max temperature: ${weatherData.main.temp_max} °C</li>
        <li>Description: ${weatherData.weather[0].description}</li>
      </ul>
    `;
  },

  renderError() {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = '<h2>Error fetching weather data</h2>';
  }
};

weatherApp.init();