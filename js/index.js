// Iron Cart LAB resolution
// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //start: following github directions:
  const price = product.querySelector('.price span').innerHTML; //get price 
  const quantity = product.querySelector('.quantity input').value; // get value of input/quantity
  
  // product of both price * quantity
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal; // getting operation subtotal
  
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2  using indications from github "getElementsByClassName" entering DOM using document
  //... your code goes here
    const listProducts = document.getElementsByClassName('product');
    let sumTotalPrice = 0;
    // using for to iterate the array we just called using getElemntsByClassName
    for (let i = 0; i < listProducts.length; i++) {
      let subtotalProduct = updateSubtotal(listProducts[i]);
      sumTotalPrice += subtotalProduct;
    }

    // ITERATION 3 show and update the Total value of the cart show:
    //... your code goes here
    document.querySelector('#total-value span').innerHTML = sumTotalPrice;
}

// ITERATION 4 following guidelines from the github using eventlistener last part and parent and child node.

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const parent = document.querySelector('tbody');
  const removedProduct = target.parentNode.parentNode;
  parent.removeChild(removedProduct);

  calculateAll();
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

// event listeners------------------------------
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... To eliminate the remove button product
  const productBtnRemove = document.getElementsByClassName('btn-remove');
  [...productBtnRemove].forEach(button => {
    button.addEventListener('click', removeProduct)
  });

});

