// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const result = Number(price * quantity);

  let subtotal = (product.querySelector('.subtotal span').innerText = result);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let finalPrice = document.querySelector('#total-value span');

  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    let subtotalPrice = updateSubtotal(allProducts[i]);
    totalPrice += Number(subtotalPrice);
  }

  // ITERATION 3

  return (finalPrice.innerText = totalPrice);
}

// ITERATION 4

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

window.addEventListener('create', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
function removeProduct(event) {
  const productToRemove = event.currentTarget.parentNode.parentNode;
  productToRemove.parentNode.removeChild(productToRemove);

  calculateAll();
}

const removeButton = document.getElementsByClassName('btn-remove');

for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener('click', removeProduct);
}

const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(
    '.create-product input[type=text]'
  ).value;
  const productUnitPrice = document.querySelector(
    '.create-product input[type=number]'
  ).value;
  const newProductText = `<td class="name">
                            <span>${productName}</span>
                          </td>
                          <td class="price">$<span>${productUnitPrice}</span></td>
                          <td class="quantity">
                            <input type="number" value="0" min="0" placeholder="Quantity">
                          </td>
                          <td class="subtotal">$<span>0</span></td>
                          <td class="action">
                            <button class="btn btn-remove">Remove</button>
                          </td>`;

  let newProductHtml = document.createElement('tr');
  newProductHtml.classList.add('product');
  newProductHtml.innerHTML = newProductText;

  document.querySelector('#cart tbody').append(newProductHtml);
  document.querySelector('.create-product input[type=text]').value = '';
  document.querySelector('.create-product input[type=number]').value = 0;

  createEventListener('btn-remove', 'click');
}

function createEventListener(className, eventType) {
  const elements = document.getElementsByClassName(className);
  [].forEach.call(elements, (element) => {
    element.addEventListener(eventType, removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  [].forEach.call(removeBtns, (removeBtn) => {
    removeBtn.addEventListener('click', removeProduct);
  });
  createEventListener('btn-remove', 'click');

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
