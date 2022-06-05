function solve() {
    let quickCheckButtonElement = document.querySelector('tfoot button');
    let clearButtonElement = document.querySelector('tfoot button:nth-of-type(2)');

    quickCheckButtonElement.addEventListener("click", function() {

        let table = [];

        let tableRows = Array.from(document.querySelectorAll("tbody tr"));
    
        tableRows.forEach((row, indexRow) => {
            let cols = Array.from(row.getElementsByTagName("input"));
    
            table.push([]);
    
            cols.forEach((col) => {
                table[indexRow].push(Number(col.value));
            });
        });

        let isCorrect = checkWin(table);
        
        let tableElement = document.getElementsByTagName("table")[0];
        let statusParagraphElement = document.querySelector("div#check p");

        if(isCorrect) {
            tableElement.style.border = "2px solid green";
            statusParagraphElement.textContent = "You solve it! Congratulations!";
            statusParagraphElement.style.color = "green";
        } else {
            tableElement.style.border = "2px solid red";
            statusParagraphElement.textContent = "NOP! You are not done yet...";
            statusParagraphElement.style.color = "red";
        }
    });

    clearButtonElement.addEventListener("click", function() {
        let tableElement = document.getElementsByTagName("table")[0];
        let statusParagraphElement = document.querySelector("div#check p");
        
        tableElement.style.border = "none";
        statusParagraphElement.textContent = "";

        let tableCellsElement = document.querySelectorAll("table tbody tr td input");

        tableCellsElement.forEach(cell => {
            cell.value = "";
        });
    });

    function checkWin(table) {
        let correct = true;

        let sumRequired = permutation(table.length);

        for (const row of table) {
            let sumRow = row.reduce((acc, current) => {
                return acc + current;
            }, 0);

            if (sumRow != sumRequired) {
                correct = false;
                break;
            }
        }

        if (correct) {
            for (let col = 0; col < table.length; col++) {

                let colSum = 0;

                for (let row = 0; row < table.length; row++) {
                    colSum += table[row][col]
                }

                if (colSum != sumRequired) {
                    correct = false;
                    break;
                }
            }
        }

        return correct;
    }

    function permutation(n) {
        if (n == 1) {
            return n;
        }
        return n * permutation(n - 1);
    }
}