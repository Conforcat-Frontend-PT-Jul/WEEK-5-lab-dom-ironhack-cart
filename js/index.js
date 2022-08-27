// ITERATION 1
const cartTableBody = document.querySelector('#cart tbody');
console.log(cartTableBody);


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal;
}

 // ITERATION 2
function calculateAll() {

    const productsArray = document.getElementsByClassName('product');
    let totalPrice = 0;
    for (let i = 0; i < productsArray.length; i++) {
      let subTotalAmount = updateSubtotal(productsArray[i]);
      totalPrice += subTotalAmount;
    }

    // ITERATION 3
    document.querySelector('#total-value span').innerText = totalPrice;
  }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //... your code goes here
  const toRemoveProduct = target.parentNode.parentNode;
  console.log('The target in remove is:', toRemoveProduct);
  cartTableBody.removeChild(toRemoveProduct);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  let nameInput = document.querySelector('.create-product input[type="text"]');
  let priceInput = document.querySelector('.create-product input[type="number"]');
  console.log(`Voy a crear un producto ${nameInput.value}`);

  const newProductRow = document.createElement('tr');
  newProductRow.setAttribute('class', 'product');

  newProductRow.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${nameInput.value}</span>
      </td>
      <td class="price">$<span>${priceInput.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`

  cartTableBody.appendChild(newProductRow);

  // He intentado acceder al placeholder para que el estilo se mantenga
  //De diferentes maneras y Según pone aquí:
  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_placeholder
  //Pero no lo he conseguido
  //document.querySelector('.nameInput').placeholder = "New Product";
  priceInput.value = 0;
 nameInput.value = 'Product Name';


  let newRemoveBtn = newProductRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  [...removeProductBtn].forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
