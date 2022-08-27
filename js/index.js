// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = parseFloat(price * quantity);
  return subTotal;
}

  // ITERATION 2
function calculateAll() {
  let total = 0;
  const productList = document.getElementsByClassName('product');
  for (let item of productList) {
    let subTotal = updateSubtotal(item);
    item.querySelector(".subtotal span").innerHTML = subTotal.toFixed(2);
  // ITERATION 3
    total += subTotal;
  }
    document.querySelector("#total-value span").innerHTML = total.toFixed(2);
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
