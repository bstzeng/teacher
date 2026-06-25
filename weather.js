const factorButtons = [...document.querySelectorAll("[data-factor]")];
const factorTitle = document.querySelector("#factor-title");
const factorText = document.querySelector("#factor-text");
const factorRemember = document.querySelector("#factor-remember");
const windButtons = [...document.querySelectorAll("[data-wind]")];
const windArrow = document.querySelector("#wind-arrow");
const windCaption = document.querySelector("#wind-caption");
const windStatus = document.querySelector("#wind-status");
const windText = document.querySelector("#wind-text");
const sockSlider = document.querySelector("#sock-slider");
const sockLabel = document.querySelector("#sock-label");
const sockBody = document.querySelector("#sock-body");
const sockStatus = document.querySelector("#sock-status");
const sockText = document.querySelector("#sock-text");
const sockButtons = [...document.querySelectorAll("[data-sock]")];
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const factorContent = {
  wind: {
    title: "風向與風速",
    text: "風不只是大不大，還要看它是迎面吹、從後面吹，還是從側面吹。這會直接影響跑道選擇和起降難度。",
    remember: "飛機通常更喜歡迎風起降，因為比較容易產生升力，也比較省跑道。",
  },
  visibility: {
    title: "能見度",
    text: "如果前方看不清楚，飛機在進場、滑行和地面移動時都會變得更困難，所以能見度是很重要的安全條件。",
    remember: "看得清楚，飛行員和航管都更容易做正確判斷。",
  },
  cloud: {
    title: "雲底高度",
    text: "雲底很低時，飛機可能比較晚才看得到地面和跑道。這會讓進場方式和能不能降落都受到影響。",
    remember: "雲越低，代表可以看見地面的空間越少。",
  },
  storm: {
    title: "對流與雷雨",
    text: "雷雨不只會下雨，還可能帶來強陣風、亂流、風切和閃電。這種天氣通常不能當成普通小雨來看。",
    remember: "看到對流和雷雨，就要把安全距離想得更大。",
  },
};

const windContent = {
  left: {
    arrow: "→",
    status: "比較有利：05 端",
    caption: "風從左邊吹來，通常比較有利使用 05 端起降。",
    text: "迎風時，飛機會更容易在較短距離內起飛，也能用較低地速落地。",
    transform: "translateX(0)",
  },
  right: {
    arrow: "←",
    status: "比較有利：23 端",
    caption: "風從右邊吹來，通常比較有利使用 23 端起降。",
    text: "如果風從另一端迎面吹來，跑道使用方向也可能跟著改變。",
    transform: "translateX(0)",
  },
  cross: {
    arrow: "↘",
    status: "這是側風",
    caption: "風從側面吹來時，不是最理想的情況，起降會比較有挑戰。",
    text: "側風不一定不能飛，但通常比迎風更難，需要更多技術和限制判斷。",
    transform: "rotate(18deg)",
  },
};

const sockContent = [
  { label: "微風", status: "袋身有點下垂，只是輕輕指著風的方向。", text: "這種時候看得到方向，但風還不算強。", width: "92px", rotate: "-2deg" },
  { label: "中等風", status: "袋身有撐起來，但還沒完全水平。", text: "這通常表示風不小，但還沒有強到把風向袋整個拉平。", width: "132px", rotate: "-7deg" },
  { label: "強風", status: "袋身幾乎快拉平，代表風勢很明顯。", text: "風越大，風向袋越容易被拉得又直又平。", width: "160px", rotate: "-11deg" },
];

const quizItems = [
  { question: "飛機通常比較喜歡哪一種起降風向？", options: ["迎風", "順風", "完全沒差"], answer: "迎風", note: "對了。迎風比較有利於產生升力，也常能減少起降距離。" },
  { question: "如果前方看不清楚，首先受到影響的是什麼？", options: ["能見度判斷", "飛機顏色", "機上餐點"], answer: "能見度判斷", note: "正確。能見度不好會直接影響進場和地面移動。" },
  { question: "雲底很低時，通常代表什麼？", options: ["看見地面的空間變少", "跑道變更長", "風一定更小"], answer: "看見地面的空間變少", note: "沒錯。雲底越低，越晚能看到地面和跑道。" },
  { question: "對流和雷雨為什麼需要特別小心？", options: ["可能帶來亂流和風切", "只是比較暗", "只會讓溫度升高"], answer: "可能帶來亂流和風切", note: "答對了。雷雨常伴隨強陣風、亂流和其他危險現象。" },
  { question: "風向袋除了方向，還能大概看出什麼？", options: ["風勢大小", "跑道長度", "飛機型號"], answer: "風勢大小", note: "對。風向袋張開的程度，可以幫你快速感覺風有多大。" },
];

let currentQuestion = 0;
let score = 0;

function renderFactor(key) {
  const item = factorContent[key];
  factorButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.factor === key));
  factorTitle.textContent = item.title;
  factorText.textContent = item.text;
  factorRemember.textContent = item.remember;
}

function renderWind(key) {
  const item = windContent[key];
  windButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.wind === key));
  windArrow.textContent = item.arrow;
  windArrow.style.transform = item.transform;
  windStatus.textContent = item.status;
  windCaption.textContent = item.caption;
  windText.textContent = item.text;
}

function renderSock(level) {
  const item = sockContent[Number(level)];
  sockSlider.value = String(level);
  sockLabel.textContent = item.label;
  sockStatus.textContent = item.status;
  sockText.textContent = item.text;
  sockBody.style.width = item.width;
  sockBody.style.transform = `rotate(${item.rotate})`;
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
  quizNext.firstChild.textContent = currentQuestion === quizItems.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  quizProgress.textContent = "挑戰完成";
  quizOptions.replaceChildren();
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizQuestion.innerHTML = score === quizItems.length ? "滿分！你已經知道飛行前要先看哪些重要天氣了。" : `你答對 ${score} 題。再把風、雲和能見度連一次，很快就會更熟。`;
}

factorButtons.forEach((button) => {
  button.addEventListener("click", () => renderFactor(button.dataset.factor));
});
windButtons.forEach((button) => {
  button.addEventListener("click", () => renderWind(button.dataset.wind));
});
sockSlider.addEventListener("input", () => renderSock(sockSlider.value));
sockButtons.forEach((button) => {
  button.addEventListener("click", () => renderSock(button.dataset.sock));
});
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderFactor("wind");
renderWind("left");
renderSock(1);
renderQuestion();
