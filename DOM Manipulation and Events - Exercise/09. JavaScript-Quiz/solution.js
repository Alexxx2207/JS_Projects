function solve() {
  
  let sectionElements = Array.from(document.getElementsByTagName("section"));
  let currentSection = 0;

  let answersGiven = [];
  let answers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let result = 0;

  let wholeQuizElement = document.getElementById("quizzie");
  wholeQuizElement.addEventListener("click", function(e) {

    if(e.target.classList.contains("answer-text")) {
      answersGiven.push(e.target.textContent);
      sectionElements[currentSection].style.display = "none";

      currentSection++;

      if(currentSection < sectionElements.length)
      {
        sectionElements[currentSection].style.display = "block";

      } else {
        let resultListElement = document.getElementById("results");
        resultListElement.style.display = "block";

        answersGiven.forEach((answerGiven, index) => {
          if(answerGiven == answers[index]) {
            result++;
          }
        });

        let resultHeadingElement = resultListElement.querySelector("h1");

        if(result == answers.length) {
          resultHeadingElement.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultHeadingElement.textContent = `You have ${result} right answers`;
        }
      }
    }
  });
}
