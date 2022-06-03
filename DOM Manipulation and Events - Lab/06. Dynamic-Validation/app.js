function validate() {
    let emailInputElement = document.getElementById("email");

    emailInputElement.addEventListener("change", function(e) {
        if(!e.currentTarget.value.match(/[a-z]+\@[a-z]+\.[a-z]+/))
            e.currentTarget.classList.add("error");
        else 
            e.currentTarget.classList.remove("error");
    });
}