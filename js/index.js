// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let quantity = product.querySelector(".quantity input");
  let price = product.querySelector(".price span");
  let subtotal = product.querySelector(".subtotal span");
  total = Number(quantity.value * price.innerText);
  subtotal.innerText = total
  return total
  // console.log(subtotal.innerText)
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // iteration 1
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  total = 0
  let bothProducts = document.querySelectorAll(".product");
  bothProducts.forEach((item) => {
   total = total + updateSubtotal(item);
  });

  // ITERATION 3

  let totalPrice = document.querySelector("#total-value span ");
         totalPrice.innerText = total
  // Question > Why my Total doesnt go back to zero?
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
