// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  [].forEach.call(allProducts, product => updateSubtotal(product));
  
  // ITERATION 3
  const allSubtotals = document.querySelectorAll('.subtotal span');
  let totalValue = 0;
  [].forEach.call(allSubtotals, subtotal => {
    totalValue += +subtotal.innerHTML;
  });
  document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToRemove = target.parentNode.parentNode;
  const parentProductToRemove = productToRemove.parentNode;
  parentProductToRemove.removeChild(productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtns = document.getElementsByClassName('btn-remove');
  [].forEach.call(removeBtns, removeBtn => {
    removeBtn.addEventListener('click', removeProduct);
  });
});
