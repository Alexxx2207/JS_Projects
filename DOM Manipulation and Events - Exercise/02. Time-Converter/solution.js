function attachEventsListeners() {

    let buttonElement = Array.from(document.querySelectorAll('input[type="button"]'));

    buttonElement.forEach(el => {
        el.addEventListener("click", function (e) {
            let dataType = e.target.parentElement.getElementsByTagName("label")[0].textContent;
            dataType = dataType.replace(": ", "").toLowerCase();
            let data = Number(e.target.parentElement.getElementsByTagName("input")[0].value);

            //convert it into seconds
            if (dataType == "days") {
                data = data * 24 * 60 * 60;
            } else if (dataType == "hours") {
                data = data * 60 * 60;
            } else if (dataType == "minutes") {
                data = data * 60;
            }

            let allInputFieldElements = Array.from(document.querySelectorAll("div input:nth-of-type(1)"));

            allInputFieldElements[0].value = data / 60 / 60 / 24;
            allInputFieldElements[1].value = data / 60 / 60;
            allInputFieldElements[2].value = data / 60;
            allInputFieldElements[3].value = data;
        });
    });
}