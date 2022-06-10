function calculator() {
    let calculate = {
        num1Element: null,
        num2Element: null,
        resultElement: null,
        init(selector1, selector2, resultSelector) {
            this.num1Element = document.querySelector(selector1);
            this.num2Element = document.querySelector(selector2);
            this.resultElement = document.querySelector(resultSelector);
        },
        add(){
            this.resultElement.value = Number(this.num1Element.value) + Number(this.num2Element.value);
        },
        subtract() {
            this.resultElement.value = Number(this.num1Element.value) - Number(this.num2Element.value);
        }
    };
    return calculate;
}