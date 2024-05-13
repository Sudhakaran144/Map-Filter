const movieData = [{
    name: "The Shawshank Redemption",
    genre: "drama"
},
{
    name: "Forest Gump",
    genre: "drama"
},
{
    name: "Mission Impossible",
    genre: "Action"
},
{
    name: "Iron-man",
    genre: "Action"
},
{
    name: "Bolt",
    genre: "Comedy"
},
{
    name: "Mr bean",
    genre: "Comedy"
},
{
    name: "Conjuring",
    genre: "Horror"
},
]

const movieList = document.querySelector(".movie-list");
const genreSelect = document.getElementById('genre');

 
function MoviesList(movies) {
 
movieList.innerHTML = "";
 
movies.map((movie) => {
    const div = document.createElement("div");
    div.className = "movie";
    const h2 = document.createElement("h2");
    h2.textContent = movie.name;
    const p = document.createElement("p");
    p.textContent = `Genre: ${movie.genre}`;
    div.appendChild(h2);
    div.appendChild(p);
    movieList.appendChild(div);
});
}

 
MoviesList(movieData);
 
genreSelect.addEventListener("change", () => {
const selectedGenre = genreSelect.value;

if(selectedGenre === "All"){
     MoviesList(movieData)
}
else{
    const filteredMovies = movieData.filter((movie) => movie.genre === selectedGenre);
    MoviesList(filteredMovies);
}
 

 

});
