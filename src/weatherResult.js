function createWeatherCard(weatherData) {
    const mainCard = document.createElement('div')
    mainCard.id = 'mainCard'

    const cityName = document.createElement('h2')
    cityName.id = 'cityName'
    cityName.textContent = weatherData.name

    const mainWeather = document.createElement('h3')
    mainWeather.id = 'mainWeather'
    mainWeather.textContent = `${Math.round(weatherData.main.temp-273.15)}°C`

    const feelsLike = document.createElement('div')
    feelsLike.id = 'feelsLike'
    feelsLike.textContent = `Feels Like: ${Math.round(weatherData.main.feels_like-273.15)}°C` 

    const humidity = document.createElement('div')
    humidity.id = 'humidity'
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`

    const wind = document.createElement('div')
    wind.id = 'wind'
    wind.textContent = `Wind: ${weatherData.wind.speed} km/h`

    mainCard.appendChild(cityName)
    mainCard.appendChild(mainWeather)
    mainCard.appendChild(feelsLike)
    mainCard.appendChild(humidity)
    mainCard.appendChild(wind)
    return mainCard
}

export default createWeatherCard