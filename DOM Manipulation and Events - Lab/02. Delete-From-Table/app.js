function deleteByEmail() {
    let providedEmail = document.querySelector('input[name="email"]').value;

    let emailsInTheTable = document.querySelectorAll('table#customers tbody tr td:nth-of-type(2)');

    let resultElement = document.getElementById("result");
    
    emailsInTheTable = Array.from(emailsInTheTable);

    let found = false;

    emailsInTheTable.forEach(el => {
        if(el.textContent == providedEmail) {
            resultElement.textContent = 'Deleted.';
            el.parentElement.remove();
            found = true;
        } else if(!found){
            resultElement.textContent = 'Not found.';
        }
    });

}