// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const  quantity = product.querySelector('.quantity input')

  const subtotalValue = Number(price.innerHTML) * Number(quantity.value)

  product.querySelector('.subtotal span').innerHTML = subtotalValue

  return subtotalValue
  
  
 
 
  //... your code goes here
}

// ITERATION 2

function calculateAll() {
  const prices = document.getElementsByClassName('product')
  const pricesArray = [...prices]
  const subtotalPrice = pricesArray.map(updateSubtotal) 
    let totalPrice = subtotalPrice.reduce((acc, price) => acc += price)
  
  
  
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalPrice
 
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  /* const productRemover = target.parentNode.parentNode
  const parentProductRemover = productRemover.parentNode
  parentProductRemover.removeChild(productRemover) */
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  

  //... your code goes here
  const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.addEventListener('click', removeProduct);
});
