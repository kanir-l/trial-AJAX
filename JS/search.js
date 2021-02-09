class Movie {
    constructor(title, year, image) {
        this.title = title;
        this.year = year;
        this.image = image;
    }
}

window.onload = function() {
    document.getElementById("search-button").addEventListener('click', search)
}

function search() {
    let searchFor = document.getElementById("search-input").value

    fetch('http://www.omdbapi.com/?apikey=cb18c9d1&s=' + searchFor)
        .then( (response) => { return response.json() })
        .then( (searchResult) => {
            //console.log(searchResult)
            
            let resultMap = searchResult.Search.map( (movieOMD) => {
                let searchMovie = new Movie(movieOMD.Title, movieOMD.Year, movieOMD.Poster)
                return searchMovie
            });

            for (i = 0; i < resultMap.length; i++) {
                createHTML(resultMap[i])
            }
        })
}

function createHTML(resultMap) {
    let container = document.getElementById("container")

    let box = document.createElement("div")
    box.setAttribute("id", "box");
    container.appendChild(box)

    let title = document.createElement("h1")
    title.innerHTML = resultMap.title
    box.appendChild(title)

    let year = document.createElement("h2")
    year.innerHTML = resultMap.year
    box.appendChild(year)

    let image = document.createElement("img")
    image.src = resultMap.image
    box.appendChild(image)

}
    

