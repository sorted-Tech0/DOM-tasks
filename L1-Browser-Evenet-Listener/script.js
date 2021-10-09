// On clicking the button append to the page
let btn = document.querySelector("button");

btn.addEventListener('click', function(e){
    let divElement = document.createElement('div')
    divElement.innerHTML = "Hello!";
    let body = document.querySelector('body');
    body.appendChild(divElement);
})