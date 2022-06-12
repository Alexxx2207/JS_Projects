function validate() {
    let nonInputHtmlElements = {
        companyCheckbox: document.getElementById('company'),
        submit: document.getElementById('submit'),
        validDiv: document.getElementById('valid'),
        companyInfo: document.getElementById('companyInfo'),
    };

    let inputFields = {
        username: document.getElementById('username'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        'confirm-password': document.getElementById('confirm-password'),
        companyNumber: document.getElementById('companyNumber'),
    };

    let checkLength = (value, start, end) => value.length >= start && value.length <= end;
    let checkPassword = (value, start, end, secondValue) =>
        checkLength(value, start, end) && /^\w+$/g.test(value) && value === secondValue;

    let validators = {
        username: (value) => checkLength(value, 3, 20) && /^[a-zA-Z0-9]*$/g.test(value),
        password: (value) => checkPassword(value, 5, 15, inputFields["confirm-password"].value),
        'confirm-password': (value) => checkPassword(value, 5, 15, inputFields["password"].value),
        email: (value) => /^.*@.*\..*$/g.test(value),
        companyNumber: (value, boxChecked) => boxChecked ? value >= 1000 && value <= 9999 : true
    };



    let changeBorder = (validInput, inputField) => {
        validInput ? inputField.style = 'border: none;' : inputField.style = 'border-color: red;';
    }

    nonInputHtmlElements.submit.addEventListener('click', function (e) {
        e.preventDefault();

        let checkBoxChecked = nonInputHtmlElements.companyCheckbox.checked;
        let validForm = true;

        Object.entries(inputFields).forEach(([fieldName, fieldValue]) => {
            let validInput = validators[fieldName](fieldValue.value, checkBoxChecked);

            changeBorder(validInput, inputFields[fieldName]);

            if (!validInput) {
                validForm = false;
            }
        });

        if (validForm) {
            nonInputHtmlElements.validDiv.style.display = 'block';
        } else {
            nonInputHtmlElements.validDiv.style.display = 'none';
        }
    });

    nonInputHtmlElements.companyCheckbox.addEventListener('change', function (e) {
        if (e.target.checked === true) {
            nonInputHtmlElements.companyInfo.style.display = 'block';
        } else {
            nonInputHtmlElements.companyInfo.style.display = 'none';
        }
    });
}