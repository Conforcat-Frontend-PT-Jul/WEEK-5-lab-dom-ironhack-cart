// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subresult = price * quantity;

  const subtotal = (product.querySelector('.subtotal span').innerText =
    subresult);

  return subresult;
}
// ITERATION 2

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let finalPrice = document.querySelector('#total-value span');

  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    let subtotalPrice = updateSubtotal(allProducts[i]);
    totalPrice += subtotalPrice;
  }
  // ITERATION 3
  return (finalPrice.innerText = totalPrice);
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
