function searchCity() {
    const formBdy = document.createElement('form')
    const searchBar = document.createElement('input')
    searchBar.type = 'text'
    searchBar.placeholder = 'Enter a City Name'

    const searchButton = document.createElement('button')
    searchButton.textContent = 'Search!'
    searchButton.type = 'submit'

    formBdy.appendChild(searchBar)
    formBdy.appendChild(searchButton)
    return formBdy
}

function loadForm() {
    const body = document.getElementById('content')
    body.append(searchCity())
}

export default loadForm