function attachEventsListeners() {
    let convertButtonElement = document.getElementById("convert");

    convertButtonElement.addEventListener("click", function(e) {
        let valueToConvert = Number(document.getElementById("inputDistance").value);
        let valueType = document.getElementById("inputUnits").value;
        
        let typeConvertion = document.getElementById("outputUnits").value;
        let inputForResultElement = document.getElementById("outputDistance");

        if(valueType == 'km') {
            valueToConvert *= 1000;
        } else if(valueType == 'cm') {
            valueToConvert /= 100;
        } else if(valueType == 'mm') {
            valueToConvert /= 1000;
        } else if(valueType == 'mi') {
            valueToConvert *= 1609.34;
        } else if(valueType == 'yrd') {
            valueToConvert *= 0.9144;
        } else if(valueType == 'ft') {
            valueToConvert *= 0.3048;
        } else if(valueType == 'in') {
            valueToConvert *= 0.0254;
        }

        if(typeConvertion == 'km') {
            valueToConvert /= 1000;
        } else if(typeConvertion == 'cm') {
            valueToConvert *= 100;
        } else if(typeConvertion == 'mm') {
            valueToConvert *= 1000;
        } else if(typeConvertion == 'mi') {
            valueToConvert /= 1609.34;
        } else if(typeConvertion == 'yrd') {
            valueToConvert /= 0.9144;
        } else if(typeConvertion == 'ft') {
            valueToConvert /= 0.3048;
        } else if(typeConvertion == 'in') {
            valueToConvert /= 0.0254;
        }

        inputForResultElement.value = valueToConvert;
        inputForResultElement.disabled = false;
    });

}