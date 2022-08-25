// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = price * quantity;
  const subtotalHTML = product.querySelector('.subtotal span');
  subtotalHTML.innerText = subtotalPrice;
  return subtotalPrice;
}

// ITERATION 2
function calculateAll() {
  const multipleProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < multipleProducts.length; i++) {
    let subtotalPrice = updateSubtotal(multipleProducts[i]);
    totalPrice += subtotalPrice;
  }
  // ITERATION 3
  let totalHTML = document.querySelector('#total-value span');
  totalHTML.innerText = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const table = document.querySelector('#cart tbody');
  const newProductName = document.getElementById('newProductName').value;
  const newProductUnit = document.getElementById('newProductPrice').value;
  let row = document.createElement('tr');
  row.classList.add('product');
  row.innerHTML = `
<td class="name">
<span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductUnit}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>`;
  table.appendChild(row);
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
});
