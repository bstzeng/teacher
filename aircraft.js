const clueButtons = document.querySelectorAll(".clue-button");
const yearElement = document.querySelector("#current-year");

yearElement.textContent = new Date().getFullYear();

clueButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const clues = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    button.querySelector("span").textContent = isOpen ? "＋" : "−";
    clues.hidden = isOpen;
  });
});

const quiz = [
  {
    question: "我的駕駛艙窗戶像戴著一副連在一起的黑色墨鏡。我是誰？",
    options: ["A350", "A330", "737"],
    answer: "A350",
    note: "答對了！A350 的黑色駕駛艙窗框，是遠遠也很好用的辨識特徵。",
  },
  {
    question: "我的兩具發動機大得驚人，主起落架每側還有六個輪子。我是誰？",
    options: ["A321neo", "777-300ER", "787"],
    answer: "777-300ER",
    note: "沒錯！777-300ER 的巨型發動機和六輪主起落架，非常有氣勢。",
  },
  {
    question: "我的發動機後緣像鋸齒，飛行時機翼會優雅上彎。我是誰？",
    options: ["787", "A330", "737"],
    answer: "787",
    note: "正確！鋸齒狀發動機後緣是 787 很有名的特徵。",
  },
];

const progress = document.querySelector("#quiz-progress");
const question = document.querySelector("#quiz-question");
const options = document.querySelector("#quiz-options");
const feedback = document.querySelector("#quiz-feedback");
const nextButton = document.querySelector("#next-question");
let currentQuestion = 0;
let score = 0;

function renderQuestion() {
  const item = quiz[currentQuestion];
  progress.textContent = `第 ${currentQuestion + 1} 題，共 ${quiz.length} 題`;
  question.textContent = item.question;
  feedback.textContent = "";
  nextButton.hidden = true;
  options.replaceChildren();

  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    options.append(button);
  });
}

function checkAnswer(selectedButton, selectedAnswer) {
  const item = quiz[currentQuestion];
  const buttons = options.querySelectorAll("button");
  const isCorrect = selectedAnswer === item.answer;

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });

  if (isCorrect) {
    score += 1;
    feedback.textContent = item.note;
  } else {
    selectedButton.classList.add("is-wrong");
    feedback.textContent = `差一點！正確答案是 ${item.answer}。`;
  }

  nextButton.hidden = false;
  nextButton.firstChild.textContent =
    currentQuestion === quiz.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  progress.textContent = "測驗完成";
  options.replaceChildren();
  nextButton.hidden = true;
  feedback.textContent = "";
  question.innerHTML = `
    <div class="quiz-result">
      <span class="quiz-badge" aria-hidden="true">${score === 3 ? "✈" : "✓"}</span>
      ${score === 3 ? "滿分！你是今天的桃機觀察員。" : `你答對 ${score} 題，再看一次辨識重點就會更熟。`}
    </div>
  `;
}

nextButton.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quiz.length) renderQuestion();
  else showResult();
});

renderQuestion();
