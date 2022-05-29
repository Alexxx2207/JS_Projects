function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchValue = document.querySelector("table.container tfoot input#searchField").value;
      
      let tableRows = Array.from(document.querySelectorAll("table.container tbody tr"));

      tableRows.forEach(row => {
         row.classList.remove("select");
      });

      tableRows.forEach(row => {
         let columnsText = Array.from(row.getElementsByTagName("td")).map(col => col.textContent);

         columnsText.forEach(col => {
            if(searchValue && col.indexOf(searchValue) >= 0) {
               row.classList.add("select");
            }
         });
      });
   }
}