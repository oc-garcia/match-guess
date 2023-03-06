let nrGuesses = document.getElementById("nrGuesses");
let resultBtn = document.getElementById("resultBtn");
let resultField = document.getElementById("resultField");
let resultContainer = document.getElementById("resultContainer");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let results = [];

resultBtn.addEventListener("click", () => {
  event.preventDefault();
  results = [];
  if (nrGuesses.value > 20) {
    alert("Too many guesses requested, please choose less than 20.");
  } else {
    for (let i = 0; i < nrGuesses.value; i++) {
      let result = `<li>Result nr. ${i + 1} : ${getRandomInt(5)} x ${getRandomInt(5)}</li><br>`;
      results.push(result);
      resultContainer.className = "resultContainerOn";
    }
    results.forEach((result) => {
      resultField.innerHTML += result;
    });
  }
});
