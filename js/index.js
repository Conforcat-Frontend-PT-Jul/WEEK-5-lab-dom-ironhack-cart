// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

  console.log(price);
  console.log(quantity);

  const calculation = price * quantity;
  console.log(calculation);

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = calculation;
  console.log(subtotal);
  return subtotal;

  // console.log('calCalculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');
  console.log(multipleProducts);
  let finalCalculation = 0;
  for (let i = 0; i < multipleProducts.length; i++) {
    finalCalculation += parseFloat(
      updateSubtotal(multipleProducts[i]).innerHTML
    );
    console.info(updateSubtotal(multipleProducts[i]).innerHTML);
  }
  console.log(finalCalculation);

  // // ITERATION 3
  let subtotal = document.querySelector('#total-value span');
  subtotal.innerHTML = finalCalculation;
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
