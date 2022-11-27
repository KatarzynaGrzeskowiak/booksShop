let header = document.createElement('header');
header.classList.add('header');
document.body.append(header)

let h1 = document.createElement('h1');
const textNode = document.createTextNode("Book Shop")
h1.appendChild(textNode);
document.body.appendChild(h1);

let button = document.createElement('button');
button.innerHTML = "Order Form";
document.body.appendChild(button);

button.addEventListener("click", myFunction);

function myFunction() {
    location.href="./form.html";
}




const fragment = document.createDocumentFragment();

const app = new BookShop(frag);
document.body.append(frag);
fetch('./books.json').then(res=>res.json()).then(booksData=>{
  app.update(booksData);
})
