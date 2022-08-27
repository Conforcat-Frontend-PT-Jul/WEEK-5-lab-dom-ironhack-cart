// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const  quantity = product.querySelector('.quantity input')

  const subtotalValue = Number(price.innerHTML) * Number(quantity.value);

  product.querySelector('.subtotal span').innerHTML = subtotalValue
 
 
  //... your code goes here
}

// ITERATION 2

function calculateAll(event) {
  const prices = document.getElementsByClassName('product')
  const pricesArray = [...prices]
  pricesArray.forEach(updateSubtotal)

  /* console.log(pricesArray) */
   

  // ITERATION 3

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
