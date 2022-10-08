

// ITERATION 
function updateSubtotal() {
  // const product =document.getElementsByClassName ('product')
  const price = document.querySelector('.price span').innerText;

  const quantity = document.querySelector('.quantity input').value;
  console.log(quantity)
  let sum = price *quantity;
  console.log(sum);
  document.querySelector('.subtotal span').innerHTML = sum;
};
 

  // ITERATION 2
function calculateAll() {
    const multipleProducts = document.querySelectorAll('.product');
    console.log(multipleProducts)
    for (let i = 0; i < multipleProducts.length; i++){
      let total = updateSubtotal(multipleProducts[i])
      document.querySelector('#total-value span').innerHTML = total;
    }  
  // end of test

}

  //... your code goes here

  // ITERATION 3
  //... your code goes here




// ITERATION 4

const remove = document.getElementsByClassName('btn-remove')
for( let i = 0; i < remove.length; i++){
  let removeBtn = remove[i]
  removeBtn.addEventListener('click', function(event){
    const btnclick = event.target
    btnclick.parentElement.parentElement.remove()

  })
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll)

  //... your code goes here
});