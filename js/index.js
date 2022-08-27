// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input'); 
  //console.log(quantity)
  const subtotal = product.querySelector('.subtotal span');
  const subtotalValue = Number(price.innerHTML)* Number(quantity.value);
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;

}
// ITERATION 3
function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach(singleProduct => {
    total += updateSubtotal(singleProduct)
  })
  
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  const product = target.parentNode.parentNode
  console.log(product)
  product.parentNode.removeChild(product)
  console.log('The target in remove is:', product);
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  const newProductName = document.querySelector('.create-product input');
  console.log(newProductName)

  console.log('Added:', newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const removeButtons = document.querySelectorAll(".action button");
  removeButtons.forEach(removeButton => {
  removeButton.addEventListener('click', removeProduct);

 });
});
