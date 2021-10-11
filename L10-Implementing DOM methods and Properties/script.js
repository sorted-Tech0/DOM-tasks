let cards = document.querySelectorAll(".card")
let prevCard;

cards.forEach((card) => {
    card.addEventListener("mouseleave", (e) => {
        prevCard = e.currentTarget;
    })

    card.addEventListener("mouseenter", (e) => {
        if(!prevCard) return
        prevCard.classList.remove("solid");
        cards.forEach((card) => {
            if(prevCard !== card)
                card.classList.add("solid")
        })
    })
})