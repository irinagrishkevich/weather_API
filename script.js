let url = document.getElementById('link')
const weather = document.querySelector('.weather')
const spinner = document.getElementById('spinner')
const town = document.getElementById('town')
const wind = document.getElementById('wind')
const cloud = document.getElementById('cloud')
const temperature = document.getElementById('temperature')
const pressure = document.getElementById('pressure')
const lastUpdate = document.getElementById('last_update')
const condition = document.getElementById('condition')
const img = document.getElementById('img')

function update_href(id, value) {
  url = document.getElementById(id).href =
    'http://api.weatherapi.com/v1/current.json?key=bba60fdf0f7744d1a9e181057232001&q=' +
    value +
    '&aqi=no'
  console.log(url)
  spinner.removeAttribute('hidden')
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json()
      } else {
        alert('Введите правильно название города.')
      }
    })
    .then((res) => {
      spinner.setAttribute('hidden', '')
      const info = res.current
      cloud.innerHTML += info.cloud
      wind.innerHTML += info.wind_mph + ' м/с '
      temperature.innerHTML += info.temp_c + ' С'
      pressure.innerHTML += info.pressure_mb
      town.innerHTML += res.location.name
      lastUpdate.innerHTML += info.last_updated
      condition.innerHTML = info.condition.text
      img.src = 'https:' + info.condition.icon
    })
    .catch((error) => {
      alert('что-то пошло не так')
    })
}

const currentDay = document.getElementById('current_date')
const today = new Date()
const yyyy = today.getFullYear()
let mm = today.getMonth() + 1 // Months start at 0!
let dd = today.getDate()

if (dd < 10) dd = '0' + dd
if (mm < 10) mm = '0' + mm

const formattedToday = dd + ' января ' + yyyy
currentDay.innerHTML = formattedToday
