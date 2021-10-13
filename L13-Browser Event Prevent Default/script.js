// on typing data value, hiting submit data should be add to the table

let formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let marks = document.querySelector("#marks").value;
    let sno = document.querySelectorAll("tbody tr").length + 1;

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${sno}</td>
        <td>${name}</td>
        <td>${marks}</td>
    `;

    let tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
})