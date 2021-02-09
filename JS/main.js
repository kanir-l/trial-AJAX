class Movie {
    constructor(title, description, image) {
        this.title = title;
        this.description = description;
        this. image = image;
    }
}

window.onload = function() {

    setTimeout(() => {
        console.log("start with set timeout 3000")
    }, 3000)

    setTimeout(() => {
        console.log("start with set timeout 2000")
    }, 2000)

    let promise = fetch('http://www.omdbapi.com/?apikey=cb18c9d1&t=harry')
    promise.then(successGotData, errorGettingData)
  
    console.log("start")

}

function successGotData(response) {
    let p = response.json()
    p.then(presentData)
    

    console.log(response)
}

function presentData(movie) {
    console.log(movie)

    let heading = document.createElement("h1")
    heading.innerHTML = movie.Title
    document.body.appendChild(heading)

    let description = document.createElement("p")
    description.innerHTML = movie.Plot
    document.body.appendChild(description)

    let image = document.createElement("div")
    image.innerHTML = movie.Poster
    document.body.appendChild(image)
}

function errorGettingData() {
}