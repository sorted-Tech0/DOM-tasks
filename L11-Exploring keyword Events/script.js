// Write a script which keeps checking the password being entered. It should check if capslock is on or off.  If its on, it should not allowed ti type and show "caps on" on the screen, also it should only allow to type if the shift in pressed down.

let inputElement = document.querySelector("input");
let pElement = document.querySelector("p")
let shiftKey;


inputElement.addEventListener("keydown", (e) => {
    if(e.getModifierState("CapsLock")){
        pElement.style.display = "block"
        e.preventDefault();
    } else {
        pElement.style.display = "none"
    }

    if(!shiftKey) e.preventDefault();
})


// shift toggelling
document.documentElement.addEventListener("keydown", (e) => {
    let myKey = e.key;
    if(myKey === 'Shift') shiftKey = true;
})
document.documentElement.addEventListener("keyup", (e) => {
    let myKey = e.key;
    if(myKey === 'Shift') shiftKey = false;
})