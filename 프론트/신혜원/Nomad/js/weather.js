const unit = '&units=mertic'
const onGeoSucess = (position) => {
  const lat = position.coords.latitude
  const lng = position.coords.longotide
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_WEATHER}` + unit
  axios.get(urlWeather)
    .then(response => response.json())
      .then(data => {
        console.log(data)
      })
}

const onGeoErr = () => {
  alert('Can\'t find you')
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoErr)