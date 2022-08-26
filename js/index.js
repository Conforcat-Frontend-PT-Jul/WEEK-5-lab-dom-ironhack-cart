// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const sub = price * quantity;
  product.querySelector('.subtotal span').innerHTML = sub;

  return sub;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // console.log(singleProduct)
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsArr = document.querySelectorAll('.product');
  const subTotalArr = [];
  let cartTotal = 0;
  for(i=0; i<productsArr.length; i++) {
    subTotalArr.push(updateSubtotal(productsArr[i]));
  }

  // ITERATION 3
  cartTotal = subTotalArr.reduce( (sum, curr) => sum + curr, 0);
  const totalDOM = document.querySelector('#total-value span');
  totalDOM.innerHTML = cartTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const targetElem = target.parentNode.parentNode;
  targetElem.parentNode.removeChild(targetElem);
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

  const removeButtons = document.querySelectorAll('.btn-remove');
  
  for(i=0; i<removeButtons.length;i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
