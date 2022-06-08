function sort(data, criteria) {
    let criteriaInfo = criteria.split('-');

    let counter = 0;
    JSON.parse(data).forEach(employee => {
        if(employee[criteriaInfo[0]] == criteriaInfo[1])
        {
            console.log(`${counter++}. ${employee["first_name"]} ${employee["last_name"]} - ${employee["email"]}`);
        }
    });
}

sort(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);