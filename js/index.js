// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const priceProduct = product.querySelector('.price span');
    const quantityProduct = product.querySelector('.quantity input');
    
    const price = priceProduct.innerText;
    const quantity = quantityProduct.value;

    const subtotalProduct = product.querySelector('.subtotal span');
    const subtotal = price * quantity;

    subtotalProduct.innerText = subtotal
    return subtotal;
    
    //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const cart = document.querySelectorAll('.product');
  let contador = 0;
  for (let productos of cart) {
    contador += updateSubtotal(productos);
  }
  //... your code goes here

  // ITERATION 3
  const totalCompra = document.querySelector('#total-value span');
  totalCompra.innerText = contador; 
  //... your code goes here
}

// ITERATION 4 BONUS

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
