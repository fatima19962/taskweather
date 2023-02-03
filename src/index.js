import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = message;
}

let city = "yazd";
// let cityInput = document.querySelector("#city-input");
let key = "5293d8454b519c30f6f6331f38c85b4c";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
axios.get(url).then(displayWeather);

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
function searchCity(city) {
  let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  // document.querySelector("#description").innerHTML =
  //   response.data.weather[0].main;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}
