import loadForm from "./basicpage";
import createWeatherCard from "./weatherResult";

loadForm()

const weatherArea = document.getElementById('weatherArea')
const searchButton = document.getElementById('searchButton')
const searchBar = document.getElementById('searchBar')
searchButton.addEventListener('click',(event)=>{
    while(weatherArea.firstChild){
        weatherArea.removeChild(weatherArea.firstChild);
    }
    event.preventDefault()
    console.log('lmao');
    let data = fetchCity()
    console.log(data);
    // content.appendChild(createWeatherCard(fetchCity()))
    searchBar.value = ''
})

async function fetchCity() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=c160d4fba327252f4b47fe6b0176d29c`,{mode:"cors"})
    let weatherData = await response.json()
    weatherArea.appendChild(createWeatherCard(weatherData))
}