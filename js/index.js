// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const result = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  return subtotal.innerHTML = result;  
}

function calculateAll() {

  // ITERATION 2

  const products = document.getElementsByClassName('product');
  let totalValue = 0;
  [...products].forEach(product => {
  
    totalValue += updateSubtotal(product);


  });

  // ITERATION 3

  const totalPrice = document.querySelector('#total-value span');
  return totalPrice.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  const productRemove = target.parentNode.parentNode;
  const parent = productRemove.parentNode;

  parent.removeChild(productRemove);

  calculateAll();
  
}

// ITERATION 5

function createProduct() {

  let name = document.querySelector('#newProductName')
  let price = document.querySelector('#newProductPrice')
  let productParent = document.querySelector('tbody') 
  let newProduct = document.createElement('tr');

  newProduct.setAttribute('class', 'product');
  newProduct.innerHTML =

  `<td class="name">
  <span>${name.value}</span>
</td>
<td class="price">$<span>${price.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

productParent.appendChild(newProduct);

let newRemoveBtn = newProduct.querySelector('.btn-remove');
newRemoveBtn.addEventListener('click', removeProduct);

name.value = '';
price.value = 0;

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeItemsBtn = document.querySelectorAll('.btn-remove');
  removeItemsBtn.forEach( (button) => {
    button.addEventListener('click', removeProduct);    
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  
 
});
