// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerHTML).toFixed(2);
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = parseFloat(price * quantity).toFixed(2);
  //document.querySelector(".subtotal span").innerHTML = subTotal;
  return subTotal;
}

  // ITERATION 2
function calculateAll() {
  const productList = document.getElementsByClassName('product');
  for (let item of productList) {
    let subTotal = updateSubtotal(item);
    item.querySelector(".subtotal span").innerHTML = subTotal;
  }

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
