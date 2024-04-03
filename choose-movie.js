const fs = require('fs');

let data = fs.readFileSync('filmes-terror.txt', 'utf-8');

const movies = JSON.parse(data);

const randomIndex = Math.floor(Math.random() * movies.length);

const randomMovie = movies[randomIndex];

const formattedMovie = JSON.stringify(randomMovie, null, 2);

console.log(formattedMovie);