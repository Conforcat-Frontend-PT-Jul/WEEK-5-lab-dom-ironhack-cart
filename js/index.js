// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector (".price span").innerHTML;
  const quatity = product.querySelector (".quantity input").value;
  const subtotal = price * quatity;
  

  console.log('Calculating subtotal, yey!');

  product.querySelector (".subtotal span").innerHTML = subtotal;
 return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.getElementsByClassName("product");
  let total = 0;
  for (const product of products){
    const productValue = updateSubtotal (product);
    total = productValue + total;
  }

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; //Boton que hace click


  console.log('The target in remove is:', target);
  //... your code goes here

  const tdTag = target.parentNode;
  const trTag = tdTag.parentNode;
  const tbodyTag = trTag.parentNode;

  tbodyTag.removeChild (trTag);
  
  calculateAll ();
  
}


// ITERATION 5

function createProduct() {
  //... your code goes here

 /* tbbody.innerHTML +=
  `<tr class="product">
          <td class="name">
            <span>{var}</span>
          </td>
          <td class="price">$<span>{var}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`*/


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here

  const removeProductsBtns = document.getElementsByClassName ("btn-remove");
  for (const removeProductBtn of removeProductsBtns){
    removeProductBtn.addEventListener ("click",removeProduct);
  }
  
  const createProductsBtn = document.getElementsByClassName ("create-produc");
  for (const createProductBtn of createProductsBtn){
    createProductBtn.addEventListener ("click", createProduct)
  }
});
