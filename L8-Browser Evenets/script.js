let blue = document.querySelector(".blue")
let pink = document.querySelector(".pink")
let yellow = document.querySelector(".yellow")

blue.addEventListener("click", (e) => {
    alert("blue")
    // e.stopImmediatePropagation()
})

blue.addEventListener("click", (e) => {
    alert("blue 1")
})

pink.addEventListener("click", (e) => {
    alert("pink")
})

yellow.addEventListener("click", (e) => {
    alert("yellow")
    // e.stopPropagation()
})