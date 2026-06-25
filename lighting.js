const familyButtons = [...document.querySelectorAll("[data-family]")];
const familyCard = document.querySelector("#night-card");
const familyTitle = document.querySelector("#family-title");
const familyText = document.querySelector("#family-text");
const familyRemember = document.querySelector("#family-remember");
const familyKicker = document.querySelector("#family-kicker");
const familyStrips = {
  runway: document.querySelector(".runway-mode"),
  taxi: document.querySelector(".taxi-mode"),
  threshold: document.querySelector(".threshold-mode"),
  approach: document.querySelector(".approach-mode"),
};

const approachSlider = document.querySelector("#approach-slider");
const approachLabel = document.querySelector("#approach-label");
const papiStatus = document.querySelector("#papi-status");
const papiText = document.querySelector("#papi-text");
const papiLights = [...document.querySelectorAll("#papi-lights .lamp")];
const aircraftIcon = document.querySelector(".aircraft-icon");
const levelButtons = [...document.querySelectorAll("[data-level]")];

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const familyContent = {
  runway: {
    title: "跑道燈",
    text: "跑道邊燈通常是白色，用來把跑道邊界畫出來。接近跑道末端時，部分邊燈會改成黃色，提醒飛機快到尾端了。",
    remember: "白色常讓你認出跑道，藍色和綠色更常出現在滑行道。",
    className: "is-runway",
  },
  taxi: {
    title: "滑行道燈",
    text: "滑行道邊燈常見藍色，中心引導燈則常見綠色。它們的工作是幫飛機在地面上沿著正確路線慢慢前進。",
    remember: "藍邊、綠中線，是夜間滑行最容易記的一組。",
    className: "is-taxi",
  },
  threshold: {
    title: "跑道端與辨識燈",
    text: "跑道端附近會有辨識燈或其他端點燈號，幫飛機快速找到真正的跑道入口和跑道方向。",
    remember: "跑道端的燈，常常是在說：真正的跑道從這裡開始。",
    className: "is-threshold",
  },
  approach: {
    title: "進場燈與 PAPI",
    text: "進場燈把飛機往跑道方向引過來，PAPI 則用紅白組合告訴你下滑角是不是合適。",
    remember: "看到紅白組合，就開始想進場角度。",
    className: "is-approach",
  },
};

const papiLevels = [
  {
    label: "太高",
    status: "4 白 / 太高",
    text: "如果四盞幾乎都偏白，通常表示你在下滑道上方，進場角度太高了。",
    colors: ["white", "white", "white", "white"],
    planeTop: "0px",
    planeLeft: "24%",
  },
  {
    label: "剛剛好",
    status: "2 白 2 紅",
    text: "這通常表示進場角度大致正確，是最常見也最想看到的組合。",
    colors: ["white", "white", "red", "red"],
    planeTop: "14px",
    planeLeft: "21%",
  },
  {
    label: "太低",
    status: "4 紅 / 太低",
    text: "如果四盞幾乎都變紅，通常表示飛機太低，需要重新修正進場角度。",
    colors: ["red", "red", "red", "red"],
    planeTop: "34px",
    planeLeft: "18%",
  },
];

const quizItems = [
  {
    question: "夜間最常用來畫出跑道邊界的燈，主要是什麼顏色？",
    options: ["白色", "藍色", "綠色"],
    answer: "白色",
    note: "對了。跑道邊燈通常先讓你認出跑道本體。",
  },
  {
    question: "滑行道邊燈最常見的是哪個顏色？",
    options: ["藍色", "紅色", "白色"],
    answer: "藍色",
    note: "沒錯。藍色常出現在滑行道邊界。",
  },
  {
    question: "滑行道中心引導燈常見哪個顏色？",
    options: ["綠色", "黃色", "白色"],
    answer: "綠色",
    note: "答對了。綠色常用來帶你沿著地面路線前進。",
  },
  {
    question: "PAPI 如果看到 2 白 2 紅，通常表示什麼？",
    options: ["角度剛剛好", "太高", "太低"],
    answer: "角度剛剛好",
    note: "正確。2 白 2 紅是最理想、最常想看到的組合。",
  },
  {
    question: "進場燈和 PAPI 主要是在幫忙哪一段？",
    options: ["最後進場", "登機門停靠", "機艙服務"],
    answer: "最後進場",
    note: "對。這些燈是幫飛機在接近跑道時更容易找對方向和角度。",
  },
];

let currentQuestion = 0;
let score = 0;

function renderFamily(key) {
  const item = familyContent[key];
  familyButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.family === key));
  familyCard.className = `night-card ${item.className}`;
  Object.entries(familyStrips).forEach(([name, element]) => {
    element.hidden = name !== key;
  });
  familyKicker.textContent = "機場燈光";
  familyTitle.textContent = item.title;
  familyText.textContent = item.text;
  familyRemember.textContent = item.remember;
}

function renderPapi(levelIndex) {
  const item = papiLevels[Number(levelIndex)];
  approachSlider.value = String(levelIndex);
  approachLabel.textContent = item.label;
  papiStatus.textContent = item.status;
  papiText.textContent = item.text;
  aircraftIcon.style.top = item.planeTop;
  aircraftIcon.style.left = item.planeLeft;
  papiLights.forEach((lamp, index) => {
    lamp.className = `lamp ${item.colors[index]}`;
  });
}

function renderQuestion() {
  const item = quizItems[currentQuestion];
  quizProgress.textContent = `第 ${currentQuestion + 1} 題，共 ${quizItems.length} 題`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizOptions.replaceChildren();

  item.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    quizOptions.append(button);
  });
}

function checkAnswer(selected, value) {
  const item = quizItems[currentQuestion];
  quizOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });

  if (value === item.answer) {
    score += 1;
    quizFeedback.textContent = item.note;
  } else {
    selected.classList.add("is-wrong");
    quizFeedback.textContent = `正確答案是「${item.answer}」。`;
  }

  quizNext.hidden = false;
  quizNext.firstChild.textContent =
    currentQuestion === quizItems.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  quizProgress.textContent = "挑戰完成";
  quizOptions.replaceChildren();
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizQuestion.innerHTML =
    score === quizItems.length
      ? "滿分！你已經能把夜間機場最常見的燈光分清楚了。"
      : `你答對 ${score} 題。再看一次顏色和用途，很快就會更熟。`;
}

familyButtons.forEach((button) => {
  button.addEventListener("click", () => renderFamily(button.dataset.family));
});

approachSlider.addEventListener("input", () => renderPapi(approachSlider.value));

levelButtons.forEach((button) => {
  button.addEventListener("click", () => renderPapi(button.dataset.level));
});

quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

renderFamily("runway");
renderPapi(1);
renderQuestion();
