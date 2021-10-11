// when the mouse goes on the box, cell will be shown like jail and of mouse goes unplace it came in initial state

let cell = document.querySelector(".cell");

cell.addEventListener("mouseenter", (e) => {
    cell.style.backgroundImage = "url('../jail-1.jpg')";
})

cell.addEventListener("mouseleave", (e) => {
    cell.style.backgroundImage = "none";
})