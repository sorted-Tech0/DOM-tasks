/*without using media queries implement

1. For desktop sizes make the background of div lightpink
2. For tablet sizes make the background of div lightblue
3. For mobile sizes make the background of div lightgreen
*/

let div = document.querySelector("div");

window.addEventListener("resize", (e) => {
    let width = window.innerWidth;
    if(width <= 600) {
        div.style.backgroundColor = "lightgreen";
    } else if (width <= 1024) {
        div.style.backgroundColor = "lightblue";
    } else {
        div.style.backgroundColor = "lightpink";
    }
})