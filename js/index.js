// ITERATION 1





function updateSubtotal(product) {
  
  const price = document.querySelector('.price span ').innerText;
  const quantity = document.querySelector('input').value;
  let productX = price *quantity;

  document.querySelector('.subtotal span').innerText = productX;
}
 







function calculateAll(products) {
 
  const multipleProducts = document.getElementsByClassName(".product");
  

  updateSubtotal(multipleProducts);

     // Para modificar un estado:
    // status.innerText = 'offline';
  }





  // const multipleProducts = document.getElementsByClassName('.product');
  // for (let i=0; i<multipleProducts.length; i++); {

  
  
  //   



 





  // it runs when only iteration 1 is completed. at later point, it can be removed.


 //document.querySelector('#total-value').innerText = update;







  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// // ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
