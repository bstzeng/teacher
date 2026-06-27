const stopData = {
  moon: {
    name: "月亮",
    time: "光大約 1.3 秒就能從月亮到地球。",
    text: "月亮其實已經很遠了，但光一下子就能到，所以這種距離還不用說到光年。",
    memory: "記法：近的地方用秒、分鐘、幾小時就能講清楚；超遠的地方才會開始用光年。",
    progress: "10%",
    shipLeft: "10%"
  },
  sun: {
    name: "太陽",
    time: "光大約 8 分 20 秒能從太陽到地球。",
    text: "太陽比月亮遠非常多，但還是可以用『幾分鐘』來描述，不一定一開始就要用光年。",
    memory: "記法：太陽很遠，但還在『分鐘』這一級。",
    progress: "28%",
    shipLeft: "28%"
  },
  neptune: {
    name: "海王星附近",
    time: "光大約要 4 小時左右，才能從太陽跑到海王星附近。",
    text: "到外行星時，距離就開始變得很大了，但還是能先用『幾小時』來想。",
    memory: "記法：太陽系裡遠遠的地方，常常會變成用小時來想。",
    progress: "48%",
    shipLeft: "48%"
  },
  proxima: {
    name: "最近的恆星",
    time: "離太陽最近的恆星大約在 4.2 光年外。",
    text: "一旦離開太陽系，距離就大到要用『光跑幾年』來講，這時候光年就很方便。",
    memory: "記法：講到別的恆星，光年就開始登場了。",
    progress: "72%",
    shipLeft: "72%"
  },
  andromeda: {
    name: "仙女座",
    time: "仙女座星系離我們大約有 250 萬光年。",
    text: "到了別的星系，距離大到驚人，這時候如果還用公里，數字會長到很難想像。",
    memory: "記法：講到別的星系，光年幾乎就是最自然的語言。",
    progress: "92%",
    shipLeft: "92%"
  }
};

const distanceButtons = document.querySelectorAll(".distance-button");
const stopName = document.getElementById("stop-name");
const stopTime = document.getElementById("stop-time");
const stopText = document.getElementById("stop-text");
const stopMemory = document.getElementById("stop-memory");
const trackProgress = document.getElementById("track-progress");
const lightShip = document.getElementById("light-ship");

function setStop(stopKey) {
  const data = stopData[stopKey];
  if (!data) return;

  distanceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.stop === stopKey);
  });

  stopName.textContent = data.name;
  stopTime.textContent = data.time;
  stopText.textContent = data.text;
  stopMemory.textContent = data.memory;
  trackProgress.style.width = data.progress;
  lightShip.style.left = data.shipLeft;
}

distanceButtons.forEach((button) => {
  button.addEventListener("click", () => setStop(button.dataset.stop));
});

const quizData = [
  {
    question: "光年是在量什麼？",
    options: ["在量距離", "在量天氣", "在量火箭速度"],
    answer: 0,
    explanation: "答對了。光年是在量距離，不是在量時間。"
  },
  {
    question: "為什麼太空常常要用光年？",
    options: ["因為天文學家不喜歡公里", "因為太空距離太大，用公里很難想像", "因為光年比較好聽"],
    answer: 1,
    explanation: "沒錯。因為宇宙太大了，用公里常常會變成超級長的數字。"
  },
  {
    question: "光從太陽到地球，大約要多久？",
    options: ["大約 8 分鐘", "大約 8 天", "大約 8 年"],
    answer: 0,
    explanation: "答對了。太陽光照到地球，大約要 8 分多鐘。"
  },
  {
    question: "講到離太陽最近的其他恆星時，哪個單位比較方便？",
    options: ["公分", "光年", "毫米"],
    answer: 1,
    explanation: "對喔。出了太陽系以後，距離變得非常大，用光年會比較好懂。"
  },
  {
    question: "哪一句話是對的？",
    options: ["光年是在說等幾年", "光年是在說光跑了一年有多遠", "光年是在說月亮有多亮"],
    answer: 1,
    explanation: "完全正確。光年就是光跑一整年所走過的距離。"
  }
];

const quizProgress = document.getElementById("quiz-progress");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNext = document.getElementById("quiz-next");

let quizIndex = 0;
let quizLocked = false;

function renderQuiz() {
  const item = quizData[quizIndex];
  quizLocked = false;
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizData.length} 題`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizOptions.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (quizLocked) return;
  quizLocked = true;

  const item = quizData[quizIndex];
  const buttons = [...document.querySelectorAll(".quiz-option")];

  buttons.forEach((button, index) => {
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedIndex && index !== item.answer) button.classList.add("wrong");
    button.disabled = true;
  });

  quizFeedback.textContent = item.explanation;
  quizNext.hidden = false;
  quizNext.textContent = quizIndex === quizData.length - 1 ? "再玩一次" : "下一題 →";
}

quizNext.addEventListener("click", () => {
  quizIndex = quizIndex === quizData.length - 1 ? 0 : quizIndex + 1;
  renderQuiz();
});

document.getElementById("current-year").textContent = new Date().getFullYear();
setStop("moon");
renderQuiz();
