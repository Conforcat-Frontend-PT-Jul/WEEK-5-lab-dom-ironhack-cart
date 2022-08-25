// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = parseFloat(price.innerHTML) * parseInt(quantity.value);
  return parseFloat(price.innerHTML) * parseInt(quantity.value);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  const total = document.querySelector('#total-value span');
  total.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const productsList = event.parentNode.parentNode.parentNode;
  const product = event.parentNode.parentNode
  productsList.removeChild(product);
}

// ITERATION 5

function createProduct(event) {
  // obtenemos los nuevos valores del producto
  const productName = document.getElementById('product-name');
  const productPrice = document.getElementById('product-price');
  //creamos una copia del html de un producto
  const productCopy = document.querySelector('.product').cloneNode(true);

  // reemplazamos los valores nuevos
  productCopy.querySelector('.name span').innerHTML = productName.value;
  productCopy.querySelector('.price span').innerHTML = productPrice.value;

  // añadimos el nuevo producto al padre
  const productsList = document.querySelector('.product').parentNode;
  productsList.appendChild(productCopy);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('mousedown', calculateAll);

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('mousedown', createProduct);
});
