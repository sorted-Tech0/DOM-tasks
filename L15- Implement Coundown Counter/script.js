let h1 = document.querySelector("h1")
let input = document.querySelector("input")
let button = document.querySelector("button")

button.addEventListener("click", (e) => {
    let value = input.value;
    if(!value) return;

    h1.innerText = value;
    value--;
    let id = setInterval(() => {
        if(value <= 0) {
            clearInterval(id);
        }
        h1.innerText = value;
        value--;
    }, 1000);
})