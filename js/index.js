var cartElement = document.querySelector('#cart tbody');

// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const amount = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * amount;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const total = Array.from(document.querySelectorAll('.product')).reduce(
    (total, product) => total + updateSubtotal(product),
    0
  );
  //console.log(total);

  // ITERATION 3
  document.querySelector('#total-value span').textContent = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  const productToRemove = target.parentNode.parentNode;
  cartElement.removeChild(productToRemove);

  calculateAll();
}

// ITERATION 5
function createProduct() {
  let nameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  let priceElement = document.querySelector(
    '.create-product input[type="number"]'
  );

  let newProductTr = document.createElement('tr');
  newProductTr.setAttribute('class', 'product');

  newProductTr.innerHTML = `
    <td class="name">
      <span>${nameElement.value}</span>
    </td>
    <td class="price">$<span>${priceElement.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  cartElement.appendChild(newProductTr);

  var newRemoveButton = newProductTr.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  nameElement.value = '';
  priceElement.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = cart.getElementsByClassName('btn-remove');
  [...removeBtn].forEach((button) =>
    button.addEventListener('click', removeProduct)
  );

  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});
