// ITERATION 1
const getCart = document.querySelector('#cart');


function updateSubtotal(product) {
  
  const price = document.querySelector('.price span ').innerText;
  const quantity = document.querySelector('input').value;
  let productX = price *quantity;
  document.querySelector('.subtotal span').innerText = productX;
}
 

  // ITERATION 2
function calculateAll() {
    const multipleProducts = document.getElementsByClassName('.product');
    let amount = 0;
    for (let i=0; i<multipleProducts.length; i++); {
      let subTo = updateSubtotal(multipleProducts);
      // product.querySelector('.subtotal span').innerHTML = subTo;
      amount += subTo;
    }
    
  // end of test
  document.querySelector('#total-value span').innerText = amount;
}

  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
