//console.log("It's Alive!");
let addMovie = event =>{
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    let ul = document.querySelector("ul");
    ul.appendChild(movie);
};









let form = document.querySelector("form");


form.addEventListener("submit",addMovie);

