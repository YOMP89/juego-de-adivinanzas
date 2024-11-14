const words = [
  {
    word: "manzana",
    hints: [
      "Es una fruta",
      "Puede ser roja o verde",
      "Es un símbolo de conocimiento",
    ],
  },
  {
    word: "sol",
    hints: [
      "Es una estrella",
      "Nos da calor",
      "Está en el centro de nuestro sistema solar",
    ],
  },
  {
    word: "avión",
    hints: [
      "Es un medio de transporte",
      "Vuela por el cielo",
      "Tiene alas y motores",
    ],
  },
];

let currentWord;
let currentHintIndex;

function startGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  currentHintIndex = 0;
  document.getElementById(
    "hint"
  ).innerText = `Pista: ${currentWord.hints[currentHintIndex]}`;
  document.getElementById("feedback").innerText = "";
}

function checkGuess() {
  const userGuess = document.getElementById("guessInput").value.toLowerCase();
  if (userGuess === currentWord.word) {
    document.getElementById("feedback").innerText =
      "¡Correcto! Has adivinado la palabra.";
  } else {
    currentHintIndex++;
    if (currentHintIndex < currentWord.hints.length) {
      document.getElementById(
        "hint"
      ).innerText = `Pista: ${currentWord.hints[currentHintIndex]}`;
      document.getElementById("feedback").innerText = "Intenta de nuevo...";
    } else {
      document.getElementById(
        "feedback"
      ).innerText = `Perdiste. La palabra era: ${currentWord.word}`;
    }
  }
}

function resetGame() {
  document.getElementById("guessInput").value = "";
  startGame();
}

window.onload = startGame;
