const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularitydesc&api_key=edbd03e460923f111d949556fc43104e&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=edbd03e460923f111d949556fc43104e&query="'
const main = document.getElementById('main')
const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
        showMovies(data.results)
    
}
function showMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie) =>{
        const { title, poster_path,vote_average, overview} = movie
     const movieEl = document.createElement('div')
     movieEl.classList.add('movie')
     movieEl.innerHTML =` 
     <div class="movie">
     <img src="${IMG_PATH + poster_path}" alt="">
     <div class="movie-info">
    <h3>${title}</h3>
    <span class="green">${vote_average}</span>
   <div class="overview">
 <h3>Overview</h3>
 ${overview}
</div>
     </div>
   `
   main.appendChild(movieEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)
        search.value= ''
    } else {
        window.location.reload()
    }
})

