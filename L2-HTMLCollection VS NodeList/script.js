// insert missing element by using .querySelectorAll

let ul = document.querySelector("ul")
let allLiElements = document.querySelectorAll("li");

let eightElement = allLiElements[6];
let seventhElement = document.createElement("li");
seventhElement.innerHTML = "7";

ul.insertBefore(seventhElement, eightElement);
