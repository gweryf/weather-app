function createWeatherCard(weatherData) {
    const mainCard = document.createElement('div')
    mainCard.id = 'mainCard'

    const cityName = document.createElement('h2')
    cityName.id = 'cityName'
    cityName.textContent = weatherData.name

    const mainWeather = document.createElement('h3')
    mainWeather.id = 'mainWeather'
    mainWeather.textContent = weatherData.main.temp

    const feelsLike = document.createElement('div')
    feelsLike.id = 'feelsLike'
    feelsLike.textContent = weatherData.main.feels_like

    const humidity = document.createElement('div')
    humidity.id = 'humidity'
    humidity.textContent = weatherData.main.humidity

    const wind = document.createElement('div')
    wind.id = 'wind'
    wind.textContent = weatherData.wind.speed

    mainCard.appendChild(cityName)
    mainCard.appendChild(mainWeather)
    mainCard.appendChild(feelsLike)
    mainCard.appendChild(humidity)
    mainCard.appendChild(wind)
    return mainCard
}

export default createWeatherCard