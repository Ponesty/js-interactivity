//console.log("It's Alive!");



let movie = document.createElement("li");

let movieTitle = document.createElement("span");

let ul = document.querySelector("ul");

let form = document.querySelector("form");

let addMovie = (event) =>{
    event.preventDefault();
    let inputField = document.querySelector("input");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    ul.appendChild(movie);
};



form.addEventListener("submit",addMovie);
//console.log(ul);

