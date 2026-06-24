const focusData = {
  control: {
    label: "01 · 操縱裝置",
    title: "側桿，對上駕駛盤",
    text:
      "A320 的側桿藏在座椅外側，前方視野比較開闊；737 的駕駛盤在正前方，左右駕駛盤會連動，能直接看見對方的操縱動作。",
  },
  autopilot: {
    label: "02 · 自動駕駛",
    title: "FCU，對上 MCP",
    text:
      "兩者都能設定速度、航向和高度。Airbus 稱為 FCU，Boeing 稱為 MCP；按鈕邏輯與操作習慣不同，但目的很接近。",
  },
  throttle: {
    label: "03 · 油門",
    title: "固定檔位，對上會移動的油門",
    text:
      "A320 的推力桿通常放在固定檔位，由自動推力在背景調整；737 的自動油門會實際推動油門桿，飛行員能看見它移動。",
  },
  display: {
    label: "04 · 系統顯示",
    title: "集中提示，對上傳統分工",
    text:
      "A320 的 ECAM 會集中顯示系統狀態與異常處理步驟。737 的顯示方式依世代而異，仍保留較多傳統面板與獨立警告邏輯。",
  },
  overhead: {
    label: "05 · 頭頂面板",
    title: "兩者都有，但排列語言不同",
    text:
      "電力、燃油、液壓與空調都在頭頂管理。A320 強調系統化分區與正常狀態少亮燈；737 則能看見更多傳統旋鈕與指示。",
  },
};

const focusButtons = [...document.querySelectorAll(".focus-button")];
const rings = [...document.querySelectorAll(".focus-ring")];
const focusLabel = document.querySelector("#focus-label");
const focusTitle = document.querySelector("#focus-title");
const focusText = document.querySelector("#focus-text");
const yearElement = document.querySelector("#current-year");

yearElement.textContent = new Date().getFullYear();

function showFocus(key) {
  const item = focusData[key];
  if (!item) return;

  focusButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.focus === key);
  });
  rings.forEach((ring) => {
    ring.classList.toggle("is-active", ring.dataset.focus === key);
  });
  focusLabel.textContent = item.label;
  focusTitle.textContent = item.title;
  focusText.textContent = item.text;
}

focusButtons.forEach((button) => {
  button.addEventListener("click", () => showFocus(button.dataset.focus));
});

showFocus("control");

const questions = [
  {
    question: "我的主要操縱裝置放在座椅側邊。",
    options: ["Airbus", "Boeing", "兩者都有"],
    answer: "Airbus",
    note: "正確！A320 使用側桿，737 則使用正前方的駕駛盤。",
  },
  {
    question: "我的自動油門工作時，油門桿會真的前後移動。",
    options: ["Airbus", "Boeing", "兩者都有"],
    answer: "Boeing",
    note: "沒錯，737 的自動油門會帶動油門桿移動。",
  },
  {
    question: "我有 PFD，會顯示姿態、速度和高度。",
    options: ["Airbus", "Boeing", "兩者都有"],
    answer: "兩者都有",
    note: "答對了！現代 A320 和 737 都有主要飛行顯示器。",
  },
  {
    question: "我把自動駕駛設定面板稱作 FCU。",
    options: ["Airbus", "Boeing", "兩者都有"],
    answer: "Airbus",
    note: "正確！Airbus 稱 FCU，Boeing 通常稱 MCP。",
  },
  {
    question: "我的機長與副駕駛需要遵循程序並互相確認。",
    options: ["Airbus", "Boeing", "兩者都有"],
    answer: "兩者都有",
    note: "完全正確。雙人協作與程序紀律是兩種駕駛艙共同的核心。",
  },
];

const progress = document.querySelector("#challenge-progress");
const question = document.querySelector("#challenge-question");
const options = document.querySelector("#challenge-options");
const feedback = document.querySelector("#challenge-feedback");
const next = document.querySelector("#challenge-next");
let current = 0;
let score = 0;

function renderQuestion() {
  const item = questions[current];
  progress.textContent = `第 ${current + 1} 題，共 ${questions.length} 題`;
  question.textContent = item.question;
  feedback.textContent = "";
  next.hidden = true;
  options.replaceChildren();

  item.options.forEach((label) => {
    const button = document.createElement("button");
    button.className = "challenge-option";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => checkAnswer(button, label));
    options.append(button);
  });
}

function checkAnswer(selected, value) {
  const item = questions[current];
  const buttons = options.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });

  if (value === item.answer) {
    score += 1;
    feedback.textContent = item.note;
  } else {
    selected.classList.add("is-wrong");
    feedback.textContent = `正確答案是「${item.answer}」。`;
  }
  next.hidden = false;
  next.firstChild.textContent =
    current === questions.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  progress.textContent = "挑戰完成";
  options.replaceChildren();
  feedback.textContent = "";
  next.hidden = true;
  question.innerHTML = `
    <div class="challenge-result">
      ${score === questions.length ? "滿分！你已經能讀懂兩種駕駛艙的設計語言。" : `你答對 ${score} 題。再看一次五大差異，就會更熟。`}
    </div>
  `;
}

next.addEventListener("click", () => {
  current += 1;
  if (current < questions.length) renderQuestion();
  else showResult();
});

renderQuestion();
