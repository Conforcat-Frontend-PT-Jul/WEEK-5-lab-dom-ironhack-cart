// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  let subtotal = price.innerHTML*quantity.value;

  let subtotal2 = product.querySelector('.subtotal span');
    subtotal2.innerHTML= subtotal;

      return subtotal;
    
}

function calculateAll() {
 
  // ITERATION 2
  let allProducts =document.getElementsByClassName('product');
  let sum = 0;

  for (let i = 0; i < allProducts.length; i++) {
    sum += Number(updateSubtotal(allProducts[i])
    )}

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

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
