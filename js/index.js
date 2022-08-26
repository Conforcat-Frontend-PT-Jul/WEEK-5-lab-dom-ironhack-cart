// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const result = Number(price * quantity);

  let subtotal = (product.querySelector('.subtotal span').innerText = result);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let finalPrice = document.querySelector('#total-value span');

  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    let subtotalPrice = updateSubtotal(allProducts[i]);
    totalPrice += Number(subtotalPrice);
  }
  alert(totalPrice);
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
