const URL_IMAGE = 'https://api.unsplash.com/photos/?client_id=' + API_BACK
const body = document.querySelector('body');

const bgImage = document.createElement('img');

axios.get(URL_IMAGE)
  .then(response => {
    bgImage.src = response.data[_.random(9)].urls.regular
    bgImage.classList.add('class', 'bgImage')
    body.appendChild(bgImage)
    console.log(response.data)
  })