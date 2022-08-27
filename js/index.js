// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subtotalPrice = price.innerText * quantity.value;
  
  const subtotal = product.querySelector('.subtotal span');

  return subtotal.innerText = subtotalPrice;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0;
  
  [...products].map((product) => {
    const subtotalPrice = updateSubtotal(product);
    total += subtotalPrice;
  });

  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  return totalPrice.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const parent = document.querySelector('tbody');
  const productToRemove = target.parentNode.parentNode;

  parent.removeChild(productToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input[type="text"]');
  const productPrice = document.querySelector('.create-product input[type="number"]');

  const parent = document.querySelector('tbody');

  const newRow = document.createElement("tr");
  newRow.setAttribute('class', 'product');

  newRow.innerHTML = `    
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
    </td>`;

  parent.appendChild(newRow);

  productName.value = "";
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  [...removeProductBtn].map((button) => {
    button.addEventListener('click', removeProduct);
  });

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
