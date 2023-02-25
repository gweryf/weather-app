function searchCity() {
    const formBdy = document.createElement('form')
    const searchBar = document.createElement('input')
    searchBar.type = 'text'
    searchBar.placeholder = 'Enter a City Name'
    searchBar.id = 'searchBar'

    const searchButton = document.createElement('button')
    searchButton.textContent = 'Search!'
    searchButton.type = 'submit'
    searchButton.id = 'searchButton'

    formBdy.appendChild(searchBar)
    formBdy.appendChild(searchButton)
    return formBdy
}

function loadForm() {
    const body = document.getElementById('content')
    const weatherArea = document.createElement('div')
    weatherArea.id = 'weatherArea'
    body.append(searchCity())
    body.append(weatherArea)
}

export default loadForm