// ITERATION 1
const cartTableNew = document.querySelector('#cart tbody')


function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const  quantity = product.querySelector('.quantity input')

  const subtotalValue = Number(price.innerHTML) * Number(quantity.value)

  product.querySelector('.subtotal span').innerHTML = subtotalValue

  return subtotalValue
  
  
 
 
  //... your code goes here
}

// ITERATION 2

function calculateAll() {
  const prices = document.getElementsByClassName('product')
  const pricesArray = [...prices]
  const subtotalPrice = pricesArray.map(updateSubtotal) 
    let totalPrice = subtotalPrice.reduce((acc, price) => acc += price)
  
  
  
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalPrice
 
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
  const productRemover = target.parentNode.parentNode
  const parentProductRemover = productRemover.parentNode
  parentProductRemover.removeChild(productRemover)
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productNameInput = document.querySelector('.create-product input[type="text"]')
  let unitPriceInput = document.querySelector('.create-product input[type="number"]')
  
  const newProductTr = document.createElement('tr')
  newProductTr.setAttribute('class', 'product')

  newProductTr.innerHTML =` 
      <tr class="product">
        <td class="name">
          <span>${productNameInput.value}</span>
        </td>
        <td class="price">$<span>${unitPriceInput.value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>`

        cartTableNew.appendChild(newProductTr);

        let newRemoveButton = newProductTr.querySelector('.btn-remove')
        newRemoveButton.addEventListener('click', removeProduct)

        productNameInput.value = 'New Product Name'
        unitPriceInput.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  


  //... your code goes here
  const removeButton = document.querySelectorAll('.btn-remove');
  [...removeButton].forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const createProductButton = document.querySelector('#create');
  createProductButton.addEventListener('click', createProduct);

});
