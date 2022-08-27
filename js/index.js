// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

}

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

   // ITERATION 2

  function calculateAll() {
    const allProducts = document.getElementsByClassName('product');
    let total = 0;
    for (let product of allProducts) {
      let subtotal = updateSubtotal(product);
      product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2);
 // ITERATION 3
      total += subtotal;
      document.querySelector('#total-value span').innerHTML = total.toFixed(2);
    }
  }
 
  //... your code goes here


/*total += subTotal;
}
  document.querySelector("#total-value span").innerHTML = total.toFixed(2);
    }
      product.querySelector('#total-value span').innerHTML = subtotal.toFixed(2);
  }
}
*/
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
