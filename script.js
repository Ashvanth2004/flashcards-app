const flashcards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped. let and const are block-scoped. const cannot be reassigned."
  },
  {
    question: "What is JavaScript?",
    answer: "A programming language for the web."
  },
  {
    question: "What is DOM?",
    answer: "Document Object Model."
  }
];

let currentIndex = 0;
let showAnswer = false;

function updateCard() {
  const cardText = document.getElementById("card-text");
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");

  cardText.innerText = showAnswer
    ? flashcards[currentIndex].answer
    : flashcards[currentIndex].question;

  progressText.innerText = `${currentIndex + 1} of ${flashcards.length}`;

  progressBar.style.width =
    ((currentIndex + 1) / flashcards.length) * 100 + "%";
}

function toggleAnswer() {
  showAnswer = !showAnswer;
  updateCard();
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showAnswer = false;
    updateCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showAnswer = false;
    updateCard();
  }
}

updateCard();