// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalPrice = parseInt(price) * parseInt(quantity);
  const subtotalHolder = product.querySelector('.subtotal span');
  subtotalHolder.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const product = document.getElementsByClassName('product');

  let totalResult = 0;

  for (let i = 0; i < product.length; i++) {
    totalResult += updateSubtotal(product[i]);
    console.log(totalResult);
  }

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = totalResult;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let product = target.parentNode.parentNode;

  product.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let name = document.querySelector('.create-product input[type=text]');
  let price = document.querySelector('.create-product input[type=number]');

  let newProduct = document.createElement('tr');
  newProduct.className = 'product';
  newProduct.innerHTML = `
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  let newRemoveBtn = newProduct.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  let tbody = document.querySelector('tbody');
  tbody.appendChild(newProduct);

  name.value = '';
  price.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');

  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
