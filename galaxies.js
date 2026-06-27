const compareModes = {
  star: {
    name: "一顆星星",
    text: "一顆星星就是一個會自己發光的天體。像太陽就是一顆星星，不是一整個星系。",
    memory: "記法：星星像一盞燈，星系像很多很多燈組成的大城市。"
  },
  solar: {
    name: "太陽系",
    text: "太陽系是太陽和繞著它走的行星、衛星和其他小天體。它比一顆星大，但還不是一整個星系。",
    memory: "記法：太陽系像一個家庭，星系像很多家庭組成的城市。"
  },
  galaxy: {
    name: "一個星系",
    text: "一個星系裡會有很多很多星星，還有氣體和塵埃。銀河系就是一個星系，不是一顆星。",
    memory: "記法：看到很多很多星星聚在一起，就比較像星系。"
  },
  many: {
    name: "很多星系",
    text: "宇宙裡不是只有銀河系和仙女座，還有非常非常多不同大小、不同樣子的星系。",
    memory: "記法：銀河系只是宇宙裡其中一個星系。"
  }
};

const galaxyTypes = {
  spiral: {
    name: "旋渦型星系",
    text: "這種星系看起來像風車或旋渦，會有彎彎的手臂。銀河系和仙女座都屬於這一類。",
    memory: "記法：有彎彎手臂、像在轉圈圈的，多半就是旋渦型。"
  },
  elliptical: {
    name: "橢圓型星系",
    text: "這種星系看起來比較圓滑、胖胖的，沒有很明顯的旋轉手臂，像一團柔和的光。",
    memory: "記法：圓圓、滑滑、沒有手臂的，常常就是橢圓型。"
  },
  irregular: {
    name: "不規則型星系",
    text: "這種星系看起來比較沒有固定形狀，像是東一塊、西一塊，沒有整齊的圓盤或旋臂。",
    memory: "記法：看起來亂亂的、沒有固定外形的，就是不規則型。"
  }
};

const quizQuestions = [
  {
    question: "銀河系是一顆星星，還是一個星系？",
    options: ["一顆星星", "一個星系", "一台望遠鏡"],
    answer: 1,
    explanation: "答對了。銀河系不是一顆星，而是很多很多星星組成的一個星系。"
  },
  {
    question: "太陽比較像下面哪一個？",
    options: ["一顆星星", "一整個星系", "很多星系的集合"],
    answer: 0,
    explanation: "沒錯。太陽是一顆星星，不是一整個星系。"
  },
  {
    question: "仙女座星系和銀河系的關係比較像什麼？",
    options: ["同一顆星", "鄰居星系", "地球的衛星"],
    answer: 1,
    explanation: "對。仙女座星系是銀河系附近很有名的鄰居。"
  },
  {
    question: "有彎彎手臂、像風車一樣的星系，通常叫什麼？",
    options: ["旋渦型星系", "不規則型星系", "三角形星系"],
    answer: 0,
    explanation: "正確。像風車或旋渦一樣的，多半就是旋渦型星系。"
  },
  {
    question: "深空照片裡那些很多很多彩色小點，常常代表什麼？",
    options: ["很多遙遠的星系", "很多飛機", "很多月亮"],
    answer: 0,
    explanation: "答對了。那些看起來小小的光點，很多其實是很遠很遠的星系。"
  }
];

const modeName = document.querySelector("#mode-name");
const modeText = document.querySelector("#mode-text");
const modeMemory = document.querySelector("#mode-memory");
const compareButtons = document.querySelectorAll(".compare-button");
const compareVisual = document.querySelector("#compare-visual");

function setMode(modeKey) {
  const mode = compareModes[modeKey];
  if (!mode) return;
  modeName.textContent = mode.name;
  modeText.textContent = mode.text;
  modeMemory.textContent = mode.memory;
  compareButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === modeKey);
  });
  compareVisual?.setAttribute("data-mode", modeKey);
}

compareButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

const typeName = document.querySelector("#type-name");
const typeText = document.querySelector("#type-text");
const typeMemory = document.querySelector("#type-memory");
const typeButtons = document.querySelectorAll(".type-button");
const typeVisual = document.querySelector("#type-visual");

function setType(typeKey) {
  const type = galaxyTypes[typeKey];
  if (!type) return;
  typeName.textContent = type.name;
  typeText.textContent = type.text;
  typeMemory.textContent = type.memory;
  typeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === typeKey);
  });
  typeVisual?.setAttribute("data-type", typeKey);
}

typeButtons.forEach((button) => {
  button.addEventListener("click", () => setType(button.dataset.type));
});

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");
let quizIndex = 0;

function renderQuiz() {
  const current = quizQuestions[quizIndex];
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizQuestions.length} 題`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizOptions.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (!quizNext.hidden) return;
      const allButtons = quizOptions.querySelectorAll("button");
      allButtons.forEach((item) => (item.disabled = true));
      if (index === current.answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
        allButtons[current.answer].classList.add("correct");
      }
      quizFeedback.textContent = current.explanation;
      quizNext.hidden = false;
    });
    quizOptions.appendChild(button);
  });
}

quizNext?.addEventListener("click", () => {
  quizIndex += 1;
  if (quizIndex >= quizQuestions.length) {
    quizProgress.textContent = "完成全部 5 題";
    quizQuestion.textContent = "太棒了，你已經知道星星、太陽系、銀河系和其他星系的差別。";
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "你已經能分清楚一顆星和一整個星系，還知道宇宙裡有很多不同的星系。";
    quizNext.hidden = true;
    return;
  }
  renderQuiz();
});

setMode("star");
setType("spiral");
renderQuiz();

const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
