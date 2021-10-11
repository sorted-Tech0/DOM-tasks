// write a query to delete all the siblings before and after the red element

let redElement = document.querySelector(".red")
// deleteElement(redElement);

// first method
function deleteElement(element) {
    let beforeSiblingElement = element.previousElementSibling;
    let afterSiblingElement = element.nextElementSibling;

    while(beforeSiblingElement){
        beforeSiblingElement.remove();
        beforeSiblingElement = element.previousElementSibling;
    }

    while(afterSiblingElement){
        afterSiblingElement.remove();
        afterSiblingElement = element.nextElementSibling;
    }
}

// method-2

let allCards = document.querySelectorAll(".card");
allCards.forEach((card) => {
    if(card !== redElement) card.remove()
})