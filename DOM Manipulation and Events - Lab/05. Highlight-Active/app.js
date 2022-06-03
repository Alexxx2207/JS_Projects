function focused() {
    let inputElements = Array.from(document.getElementsByTagName("input"));

    inputElements.forEach(el => {
        el.addEventListener("focus", function(e) {
            e.currentTarget.parentElement.classList.add("focused");
        });
        
        el.addEventListener("blur", function(e) {
            e.currentTarget.parentElement.classList.remove("focused");
        });
    });
}