const conceptButtons = [...document.querySelectorAll("[data-concept]")];
const conceptKicker = document.querySelector("#concept-kicker");
const conceptTitle = document.querySelector("#concept-title");
const conceptText = document.querySelector("#concept-text");
const conceptIdea = document.querySelector("#concept-idea");
const conceptMemory = document.querySelector("#concept-memory");

const sceneButtons = [...document.querySelectorAll("[data-scene]")];
const sceneKicker = document.querySelector("#scene-kicker");
const sceneTitle = document.querySelector("#scene-title");
const sceneText = document.querySelector("#scene-text");
const sceneMemory = document.querySelector("#scene-memory");

const goButtons = [...document.querySelectorAll("[data-go]")];
const goKicker = document.querySelector("#go-kicker");
const goTitle = document.querySelector("#go-title");
const goText = document.querySelector("#go-text");
const goMemory = document.querySelector("#go-memory");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const conceptContent = {
  turbulence: {
    kicker: "TURBULENCE",
    title: "亂流",
    text: "亂流可以先想成空氣不太平，像飛機正在穿過一段比較顛簸的路。",
    idea: "空中的坑洞和波浪",
    memory: "晃，不代表飛機壞掉。",
  },
  windshear: {
    kicker: "WINDSHEAR",
    title: "風切",
    text: "風切是風的方向或速度在短距離內變化很快，對正在起飛或落地的飛機特別需要小心。",
    idea: "前後左右的風突然變得不一樣",
    memory: "不是普通顛一下，而是風變化很快。",
  },
  goaround: {
    kicker: "GO-AROUND",
    title: "重飛",
    text: "重飛不是一種壞天氣，而是一個決定：這次先不要落地，再飛一圈重新來。",
    idea: "暫時不落地，先再來一次",
    memory: "重飛是安全決定，不是失敗。",
  },
};

const sceneContent = {
  light: {
    kicker: "LIGHT TURBULENCE",
    title: "巡航中有點顛",
    text: "這通常比較像遇到普通亂流，飛機會晃一下，但不代表飛機突然壞掉或失去控制。",
    memory: "會顛，是因為空氣在動，不是因為飛機突然不會飛。",
  },
  storm: {
    kicker: "STORM AHEAD",
    title: "前方有對流雲",
    text: "如果前方有強對流或雷雨，飛行員通常會選擇避開，不會想直接硬穿過去。",
    memory: "真正要小心的，常常不是小晃，而是危險天氣區。",
  },
  landing: {
    kicker: "FAST WIND CHANGE",
    title: "快落地時風變很快",
    text: "如果在進場或落地前遇到風快速變化，飛行員會更注意，必要時也可能選擇重飛。",
    memory: "越靠近落地，風的快速變化就越值得小心。",
  },
};

const goContent = {
  unstable: {
    kicker: "UNSTABLE APPROACH",
    title: "落地條件不理想",
    text: "如果飛機速度、高度、方向或風況不夠穩定，飛行員就可能決定不要勉強落地。",
    memory: "重飛是安全選擇，不是丟臉選擇。",
  },
  power: {
    kicker: "POWER UP",
    title: "加油門重新爬升",
    text: "決定重飛後，飛機會重新加油門，先讓飛機穩定往上飛，不再繼續這次落地。",
    memory: "先穩穩飛起來，再處理下一步。",
  },
  climb: {
    kicker: "FOLLOW PROCEDURE",
    title: "按程序離開跑道前方",
    text: "重飛不是隨便亂轉，而是要照既定程序離開，讓飛機安全回到可重新安排的位置。",
    memory: "就算重飛，也是一套有秩序的流程。",
  },
  retry: {
    kicker: "TRY AGAIN",
    title: "再排一次進場",
    text: "離開之後，飛機可以重新排進場，再做一次更穩定的落地嘗試。",
    memory: "安全比一次成功更重要。",
  },
};

const quizItems = [
  { question: "亂流最像下面哪一個？", options: ["空中的顛簸路", "飛機引擎停掉", "跑道消失"], answer: "空中的顛簸路", note: "對。亂流比較像在顛簸空氣裡飛。" },
  { question: "風切為什麼比較需要小心？", options: ["因為風變化很快", "因為機翼突然不見", "因為飛機不會轉彎"], answer: "因為風變化很快", note: "沒錯。重點是風的速度或方向在短距離內變很快。" },
  { question: "重飛代表什麼？", options: ["先不要落地，再來一次", "飛機壞掉", "乘客下飛機"], answer: "先不要落地，再來一次", note: "正確。重飛是一個安全決定。" },
  { question: "飛機在巡航中稍微晃一下，是不是一定代表大問題？", options: ["不一定", "一定是大問題", "一定要迫降"], answer: "不一定", note: "對。普通亂流不等於飛機故障。" },
  { question: "下面哪一句最接近這堂課重點？", options: ["顛簸、風變和重飛是不同事情", "飛機只要抖就危險", "重飛就是失敗"], answer: "顛簸、風變和重飛是不同事情", note: "答對了。這三件事一定要分開看。" },
];

let currentQuestion = 0;
let score = 0;

function renderConcept(key) {
  const item = conceptContent[key];
  conceptButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.concept === key));
  conceptKicker.textContent = item.kicker;
  conceptTitle.textContent = item.title;
  conceptText.textContent = item.text;
  conceptIdea.textContent = item.idea;
  conceptMemory.textContent = item.memory;
}

function renderScene(key) {
  const item = sceneContent[key];
  sceneButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.scene === key));
  sceneKicker.textContent = item.kicker;
  sceneTitle.textContent = item.title;
  sceneText.textContent = item.text;
  sceneMemory.textContent = item.memory;
}

function renderGo(key) {
  const item = goContent[key];
  goButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.go === key));
  goKicker.textContent = item.kicker;
  goTitle.textContent = item.title;
  goText.textContent = item.text;
  goMemory.textContent = item.memory;
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
  quizQuestion.innerHTML =
    score === quizItems.length
      ? "太棒了！你已經把亂流、風切和重飛分清楚了。"
      : `你答對 ${score} 題。再把三個概念分開連一次，很快就會更熟。`;
}

conceptButtons.forEach((button) => button.addEventListener("click", () => renderConcept(button.dataset.concept)));
sceneButtons.forEach((button) => button.addEventListener("click", () => renderScene(button.dataset.scene)));
goButtons.forEach((button) => button.addEventListener("click", () => renderGo(button.dataset.go)));
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderConcept("turbulence");
renderScene("light");
renderGo("unstable");
renderQuestion();
