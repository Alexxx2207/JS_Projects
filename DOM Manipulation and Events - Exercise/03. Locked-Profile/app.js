function lockedProfile() {
    let showMoreButtonElements = Array.from(document.getElementsByTagName('button'));

    showMoreButtonElements.forEach(el => {
        el.addEventListener("click", function(e) {
            if(e.target.parentElement.querySelectorAll('input[type="radio"]')[1].checked) {
                if(e.target.textContent == "Show more") {
                    e.target.parentElement.querySelector("[id$=HiddenFields]").style.display = "block";
                    e.target.textContent = "Hide it";
                } else if(e.target.textContent == "Hide it") {
                    e.target.parentElement.querySelector("[id$=HiddenFields]").style.display = "none";
                    e.target.textContent = "Show more";
                }
            }
        });
    });
}