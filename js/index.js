// ITERATION 1
//variable global
let total = 0;

function updateSubtotal(product) {


  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subTotalPrice = price * quantity;

  total = total + subTotalPrice;

  const subTotal = product.querySelector('.subtotal span');
  //asigno el valor total al tag span 
  subTotal.textContent = subTotalPrice;
}

function calculateAll() {
  total = 0
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  const products = document.getElementsByClassName('product');

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');

  totalValue.textContent = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here

const productFila = target.parentNode.parentNode;
productFila.parentNode.removeChild(productFila);

//Obtenemos el nodo subtotal del elemento borrado
const subtTotal = productFila.querySelector('.subtotal span').innerHTML;
//Recalculamos el valor total, restando el valor del elemento borrado
total = total - subtTotal;
// Obtenermos el elemento del valor total y actualizamos el valor
const totalValue = document.querySelector('#total-value span');
totalValue.textContent = total;
  
}

// ITERATION 5

function createProduct() {

  //... your code goes here

  const addProductFila = document.getElementsByClassName('create-product')
  // parent.appendChild(h2Tag);
  // document.createElement("h1");
}

//Se ejecuta al cargar la página web
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Recuperar todos los botones "Remove" en el DOM
  const removeButtons = document.getElementsByClassName('btn btn-remove');
 
  //Asignar el evento click a cada botón "Remove"
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

});
