// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  [].forEach.call(allProducts, product => updateSubtotal(product));
  
  // ITERATION 3
  const allSubtotals = document.querySelectorAll('.subtotal span');
  let totalValue = 0;
  [].forEach.call(allSubtotals, subtotal => {
    totalValue += +subtotal.innerHTML;
  });
  document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToRemove = target.parentNode.parentNode;
  const parentProductToRemove = productToRemove.parentNode;
  parentProductToRemove.removeChild(productToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product input[type=text]').value;
  const productUnitPrice = document.querySelector('.create-product input[type=number]').value;
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
  document.querySelector('.create-product input[type=text]').value = "";
  document.querySelector('.create-product input[type=number]').value = 0;

  createEventListener('btn-remove', 'click');
}

function createEventListener(className, eventType) {
  const elements = document.getElementsByClassName(className);
  [].forEach.call(elements, element => {
    element.addEventListener(eventType, removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  createEventListener('btn-remove', 'click');
  
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
