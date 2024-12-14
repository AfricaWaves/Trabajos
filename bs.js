// console.log(document.getElementById("encabezado1"));
let btnMostrar = document.getElementById("btnMostrar");
let txtNombre = document.getElementById("txtNombre");
let txtRFC = document.getElementById("txtRFC");
const encabezado1 = document.getElementById("encabezado1");

console.log(encabezado1.textContent);
console.log(encabezado1.innerText);
console.log(encabezado1.innerHTML);

const listas = document.getElementsByTagName("ul");

console.log(listas);
console.log(listas.length);
console.log(listas.item(1));

//let num = 1, nombre = "Africa";

const listGroup = document.getElementsByClassName("list-group-item");
console.log(listGroup);
console.log(listGroup.length);

let segundaLista = document.querySelector("ul > li");
//console.log(segundaLista); // table>th null
console.log(segundaLista); //li

let tercerLista = document.querySelectorAll("ul > li");
console.log(tercerLista);
console.log(tercerLista.length); //10

// btnMostrar.addEventListener("click", function(event){
//     event.preventDefault();
//   console.log("click en btnMostrar...");
// });

/*btnMostrar.addEventListener("click", function(event){
  event.preventDefault();
let element = document.createElement("li");
element.innerText ="Another item"; // <li>Another Item</li>

listas.item(0).append(element);

});*/

btnMostrar.addEventListener("click", function(event){
  event.preventDefault();
let element = document.createElement("li");
element.innerText ="Another item"; // <li>Another Item</li>
element.classList.add("list-group-item");
// let element 2 = element.cloneNode();
// Agrega el elemento al final de la lista, antes el ul que cierra 
// listas.item(0).append(element);
// Inserta el elemento al principio de la lista, después del ul que abre
// listas.item(0).prepend(element2);

//Inserta el elemento previo a la lista, antes del ul que abre
//listas.item(0).before(element);
//Agrega el elemento después de la lista, despues del ul que cierra
//listas.item(0).after(element);
listas.item(1).insertAdjacentElement("beforebegin", element);

});



function toUpper(event){
  event.preventDefault();
  event.target.value = event.target.value.toUpperCase().trim();
 } //toUpper
 txtNombre.addEventListener("blur", toUpper);
 txtRFC.addEventListener("blur", toUpper);

 /*function toUpper(event){
 event.preventDefault();
 event.target.value = event.target.value.toUpperCase().trim();
} //toUpper
txtNombre.addEventListener("blur", toUpper);
txtRFC.addEventListener("blur", toUpper);*/
 

function handleImageError(img){
console.log("error al cargar la imagen ");
img.style.display="none";
//img.src=images/default.svg

}


// txtNombre.addEventListener("blur", function(event){
//     txtNombre.value = txtNombre.value.toUpperCase().trim();
//   });

// txtRFC.addEventListener("blur", function(event){
//     txtRFC.value = txtRFC.value.toUpperCase().trim();
//   });



