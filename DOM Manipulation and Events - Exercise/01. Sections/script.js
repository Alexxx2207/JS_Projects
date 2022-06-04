function create(words) {

   words.forEach(el => {
      let newParagraphElement = document.createElement("p");
      newParagraphElement.appendChild(document.createTextNode(el));
      newParagraphElement.style.display = "none";

      let newDivElement = document.createElement("div");

      newDivElement.appendChild(newParagraphElement);

      newDivElement.addEventListener("click", function (e) {
         e.currentTarget.children[0].style = "block";
      });

      let divContainerElement = document.getElementById("content");

      divContainerElement.appendChild(newDivElement);
   });
   
}