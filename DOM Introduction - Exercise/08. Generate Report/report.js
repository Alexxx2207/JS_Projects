function generateReport() {
    let checkBoxes = Array.from(document.querySelectorAll("table thead tr th input"));
    let tableData = Array.from(document.querySelectorAll("table tbody tr"));

    let checked = [];

    checkBoxes.forEach((checkBox, index) => {
        if(checkBox.checked) {
            checked.push({
                colName: checkBox.name,
                colIndex: index+1
            });
        }
    });

    let reportObject = [];

    tableData.forEach(row => {
        let dataToRecord = {};

        checked.forEach(col => {
            dataToRecord[col.colName] = row.querySelector(`td:nth-of-type(${col.colIndex})`).textContent;
        });

        reportObject.push(dataToRecord);
    });

    let jsonFormatOutput = JSON.stringify(reportObject, null, 2);

    let textArea = document.getElementById("output");

    textArea.textContent = jsonFormatOutput;
}