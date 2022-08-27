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
  //console.log('The target in remove is:', target);
  //... your code goes here
  const targetElem = target.parentNode.parentNode;
  targetElem.parentNode.removeChild(targetElem);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  // Grab a product row (the first one) and clone it
  const firstProduct = document.querySelector('.product');
  const newProduct = firstProduct.cloneNode(true);

  // Store new inputted product name and price into variables
  const newProductName = document.querySelectorAll('.create-product input')[0].value;
  const newProductPrice = document.querySelectorAll('.create-product input')[1].value;

  // Modify DOM: replace elements with previously created variable content
  newProduct.querySelector('.price span').innerHTML =  newProductPrice;
  newProduct.querySelector('.name span').innerHTML = newProductName;
  newProduct.querySelector('.quantity input').value = 0;

  //Append the cloned and modified DOM element (tr) in the products table
  firstProduct.parentNode.appendChild(newProduct);

  // Add event liistener to the new Remove button and recalculate total
  const newRemoveButton = newProduct.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);
  calculateAll();

  //Clear the template input fields
  document.querySelectorAll('.create-product input')[0].value = '';
  document.querySelectorAll('.create-product input')[1].value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
   
  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach((button) => button.addEventListener('click', removeProduct));

  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);

});
