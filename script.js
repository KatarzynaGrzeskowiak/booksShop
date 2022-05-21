let header = document.createElement('header');
header.classList.add('header');
document.body.append(header)

let h1 = document.createElement('h1');
const textNode = document.createTextNode("Sorry for not creating JavaScript Bookshop page :(")
h1.appendChild(textNode);
document.body.appendChild(h1);

let button = document.createElement('button');
button.innerHTML = "Order Form";
document.body.appendChild(button);

button.addEventListener("click", myFunction);

function myFunction() {
    location.href="./form.html";
}



