import loadForm from "./basicpage";

loadForm()

const searchButton = document.getElementById('searchButton')
const searchBar = document.getElementById('searchBar')
searchButton.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('lmao');
    fetchCity()
    searchBar.value = ''
})

async function fetchCity() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=c160d4fba327252f4b47fe6b0176d29c`,{mode:"cors"})
    let weatherData = await response.json()
    console.log(weatherData);
}