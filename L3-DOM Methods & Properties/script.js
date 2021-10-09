// write a query to fetches the data-color attribute of the card on double cliking on them and attaches the fatched class to that card. Also changes the data-color attribute to used.

let allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
    card.addEventListener("dblclick", (e) => {
        let dataColor = card.getAttribute("data-color");
        card.classList.add(dataColor);
        card.setAttribute("data-color", "used");
    })
})