function search() {
   let searchValue = document.getElementById("searchText").value;
   let towns = Array.from(document.querySelectorAll("article ul#towns li"));

   towns.forEach(town => {
      if(!town.textContent.indexOf(searchValue) >= 0) {
         town.style.textDecoration = "none"
         town.style.fontWeight = "normal";
      }
   }); 

   let matches = 0;

   towns.forEach(town => {
      if(searchValue.length > 0 && town.textContent.indexOf(searchValue) >= 0) {
         town.style.textDecoration = "underline"
         town.style.fontWeight = "bold";
         matches++;
      }
   }); 

   let resultContainer = document.getElementById("result");

   resultContainer.textContent = `${matches} matches found`
}
