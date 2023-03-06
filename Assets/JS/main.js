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
  resultField.innerHTML = "";
  if (nrGuesses.value > 20) {
    alert("Too many guesses requested, please choose less than 20.");
  } else {
    for (let i = 0; i < nrGuesses.value; i++) {
      let result = { id: i, score1: getRandomInt(4), score2: getRandomInt(4) };
      results.push(result);
      resultContainer.className = "resultContainerOn";
      console.log(results);
    }
    results.forEach((result) => {
      let listItem = document.createElement("li");
      listItem.classList.add("resultItem");
      resultField.appendChild(listItem);
      listItem.textContent = `Result Nr ${result.id + 1} : ${result.score1} x ${result.score2}`;
    });
  }
  nrGuesses.value = "";
});

