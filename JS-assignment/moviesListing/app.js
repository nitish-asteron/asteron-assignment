let search = document.querySelector('#search');
let searchBtn = document.querySelector('#searchBtn');
let searchedMovies = document.querySelector('.searchedMovies');
let popular = document.querySelector('.popular');
let loadbtn = document.querySelector('.loadBtn');

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchMovies(url){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTI1NTczODIyMDJmM2JkNmFlNTg5YTgxMWUwMGFlZiIsIm5iZiI6MTc0Mjc0MjkwOS44MjYsInN1YiI6IjY3ZTAyNTdkY2U2MDVhMWVkMWM3MjMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vIU-4acHN1YZicC9Svukzg-w9-MYSDn9a6kRXOzjs1k'
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
}

 async function searchMovie(){
    console.log(search.value);
    if(search.value){
        const movies = await fetchMovies(`https://api.themoviedb.org/3/search/movie?query=${search.value}`);
        displayMovies(movies, searchedMovies);
    }
}

function displayMovies(movies, container) {
    console.log(movies);
    container.innerHTML = ''; 
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Overview: ${movie.overview} <br> Release Date: ${movie.release_date} </p>
        `;
        container.appendChild(movieElement);
    });
}

let page = 1;
async function popularMovie(page){
    const movies = await fetchMovies(`https://api.themoviedb.org/3/movie/popular?page=${page}`);
    displayMovies(movies, popular);
}

popularMovie(page);

loadbtn.addEventListener('click', () => {
    page++;
    popularMovie(page);
    console.log('hlo');
});
