let select = document.querySelector("select");
let allMovies = document.querySelectorAll(".movies");
select.addEventListener("change", (e) => {
    let selectValue = select.value;

    if(selectValue === "none"){
        // all movies to be shown
        allMovies.forEach((movie) => {
            movie.style.display = "block"
        })
    } else {
        // do filter with the movies
        for(let i = 0; i < allMovies.length; i++){
            let movieValue = allMovies[i].querySelector("p").getAttribute("data-category");

            if(selectValue === movieValue){
                allMovies[i].style.display = "block";
            } else {
                allMovies[i].style.display = "none";
            }
        }
    }
})