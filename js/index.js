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
    item.querySelector(".subtotal span").innerHTML = subTotal;
  // ITERATION 3
    total += subTotal;
  }
    document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  //console.log(target);
  let tbodyTag = target.closest('tbody');
  tbodyTag.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtnCollection = document.getElementsByClassName('btn btn-remove');

  for (let item of removeBtnCollection) {
    console.log("btn ",item);
    item.addEventListener('click', removeProduct);
  }
});
