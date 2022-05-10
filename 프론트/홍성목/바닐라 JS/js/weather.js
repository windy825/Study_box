const API_KEY = "페이지 참조"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:nth-child(2)');
      const country = document.querySelector('#weather span:nth-child(3)');
      weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`;
      city.innerText = data.name;
      country.innerText = data.sys.country;
    });

}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

