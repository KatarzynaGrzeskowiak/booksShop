const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);


const header = document.createElement('header');
header.classList.add('header');
container.append(header);

const h1 = document.createElement('h1');
const textNode = document.createTextNode("Book Shop");
h1.appendChild(textNode);
header.appendChild(h1);

const main = document.createElement('main');
main.classList.add('main');
container.appendChild(main);

const catalogContainer = document.createElement('div');
catalogContainer.classList.add('catalog-container');
main.appendChild(catalogContainer);

const cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
main.appendChild(cartContainer);

const catalog = new DocumentFragment();
catalog.append(catalogContainer);

fetch("./assets/JSON/books.json")
    .then(response => response.json())
    .then( data =>{
        console.log(data);
    })
    .catch(error=>{
        console.error(error);
    });
// OrderForm

const button = document.createElement('button');
button.innerHTML = "Order Form";
document.body.appendChild(button);

button.addEventListener("click", myFunction);

function myFunction() {
    location.href="./form.html";
}
