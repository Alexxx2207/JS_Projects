function solve() {
   let buttonsElements = Array.from(document.querySelectorAll('div.product div.product-add button'));

   let textAreaElement = document.getElementsByTagName("textarea")[0];

   let prooductsNames = [];
   let prooductsPrice = [];

   buttonsElements.forEach(el => {
      el.addEventListener("click", addButtonClicked);
   });

   let checkoutButtonElement = document.getElementsByClassName("checkout")[0];

   checkoutButtonElement.addEventListener("click", checkoutButtonClicked);

   function addButtonClicked(e) {
      let productName = e.target.parentElement.parentElement.querySelector("div.product-details div.product-title").textContent;
      let productPrice = e.target.parentElement.parentElement.querySelector("div.product-line-price").textContent;
      
      prooductsNames.push(productName);
      prooductsPrice.push(Number(productPrice));

      textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`
   }

   function checkoutButtonClicked() {
      let total = prooductsPrice.reduce((acc, currentItem) => {
         return acc + currentItem;
      }, 0)

      prooductsNames = prooductsNames.filter((el, index) => {
         return prooductsNames.indexOf(el) === index;
      });

      textAreaElement.textContent += `You bought ${prooductsNames.join(', ')} for ${total.toFixed(2)}.`;

      buttonsElements.forEach(el => {
         el.removeEventListener("click", addButtonClicked);
      });

      checkoutButtonElement.removeEventListener("click", checkoutButtonClicked)
   }
}