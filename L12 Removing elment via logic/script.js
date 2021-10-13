// remove the deepest node or deepest color

let outerColor = document.querySelector(".pink");

// one way
// while(outerColor.children.length > 0){
//     outerColor = outerColor.children[0];
// }

// outerColor.remove()

// second way by recursion

function removeColor(outerColor) {
    if(outerColor.children.length > 0){
        removeColor(outerColor.children[0])
    } else {
        outerColor.remove()
    }
}

removeColor(outerColor)

// third way (not convenient in my opinion)

// let allDivElements = document.querySelectorAll("div");
// allDivElements[4].remove()