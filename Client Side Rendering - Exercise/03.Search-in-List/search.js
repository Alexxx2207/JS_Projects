export function search(towns, searchedText) {
   let result = [];

   towns.forEach(town => {
      let townResult = {
         name: town,
         active: false,
      };
      if(town.toLowerCase().includes(searchedText.toLowerCase())) {
         townResult.active = true;
      }
      result.push(townResult);
   })

   return result;
}
