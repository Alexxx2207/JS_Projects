function attachGradientEvents() {
    let gradientBoxElement = document.getElementById("gradient");

    let resultBoxElement = document.getElementById("result");

    gradientBoxElement.addEventListener("mousemove", function(e) {
        resultBoxElement.textContent = Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100) + "%";
    });
    
    
    gradientBoxElement.addEventListener("mouseout", function(e) {
        resultBoxElement.textContent = "";
    });
}