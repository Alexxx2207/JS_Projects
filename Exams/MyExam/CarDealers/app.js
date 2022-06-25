window.addEventListener("load", solve);

function solve() {
    document.getElementById('publish').addEventListener('click', function (e) {
        e.preventDefault();

        let makeElement = document.getElementById('make');
        let modelElement = document.getElementById('model');
        let yearElement = document.getElementById('year');
        let fuelElement = document.getElementById('fuel');
        let originalCostElement = document.getElementById('original-cost');
        let sellingPriceElement = document.getElementById('selling-price');

        if (makeElement.value && modelElement.value && yearElement.value && fuelElement.value &&
            originalCostElement.value && sellingPriceElement.value &&
            Number(originalCostElement.value) <= Number(sellingPriceElement.value)) {

            let tbody = document.getElementById('table-body');

            let tr = document.createElement('tr');
            tr.classList.add("row");

            let tdMake = document.createElement('td');
            tdMake.textContent = makeElement.value;

            let tdModel = document.createElement('td');
            tdModel.textContent = modelElement.value;

            let tdYear = document.createElement('td');
            tdYear.textContent = yearElement.value;

            let tdFuel = document.createElement('td');
            tdFuel.textContent = fuelElement.value;

            let tdOriginalCost = document.createElement('td');
            tdOriginalCost.textContent = originalCostElement.value;

            let tdSellingPrice = document.createElement('td');
            tdSellingPrice.textContent = sellingPriceElement.value;

            let tdButtons = document.createElement('td');

            let editBtn = document.createElement('button');
            editBtn.classList.add("action-btn");
            editBtn.classList.add("edit");
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function (e) {
                e.preventDefault();

                makeElement.value = tdMake.textContent;
                modelElement.value = tdModel.textContent;
                yearElement.value = tdYear.textContent;
                fuelElement.value = tdFuel.textContent;
                originalCostElement.value = tdOriginalCost.textContent;
                sellingPriceElement.value = tdSellingPrice.textContent;

                tr.remove();
            });


            let sellBtn = document.createElement('button');
            sellBtn.classList.add("action-btn");
            sellBtn.classList.add("sell");
            sellBtn.textContent = 'Sell';
            sellBtn.addEventListener('click', function (e) {
                e.preventDefault();

                let newList = document.getElementById('cars-list');

                let newLi = document.createElement('li');
                newLi.classList.add('each-list');

                let spanMakeModel = document.createElement('span');
                spanMakeModel.textContent = tdMake.textContent + ' ' + tdModel.textContent;

                let spanYear = document.createElement('span');
                spanYear.textContent = tdYear.textContent;

                let spanProfit = document.createElement('span');
                spanProfit.textContent = Number(tdSellingPrice.textContent) - Number(tdOriginalCost.textContent);

                newLi.appendChild(spanMakeModel);
                newLi.appendChild(spanYear);
                newLi.appendChild(spanProfit);

                newList.appendChild(newLi);

                tr.remove();

                let totalMadeElement = document.getElementById('profit');

                totalMadeElement.textContent = (Number(totalMadeElement.textContent) + Number(spanProfit.textContent)).toFixed(2);
            });

            tdButtons.appendChild(editBtn);
            tdButtons.appendChild(sellBtn);

            tr.appendChild(tdMake);
            tr.appendChild(tdModel);
            tr.appendChild(tdYear);
            tr.appendChild(tdFuel);
            tr.appendChild(tdOriginalCost);
            tr.appendChild(tdSellingPrice);
            tr.appendChild(tdButtons);

            tbody.appendChild(tr);

            makeElement.value = '';
            modelElement.value = '';
            yearElement.value = '';
            fuelElement.value = '';
            originalCostElement.value = '';
            sellingPriceElement.value = '';
        }
    });
}
