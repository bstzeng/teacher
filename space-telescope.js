const compareModes = {
  ground: {
    name: "地面望遠鏡",
    text: "地面望遠鏡很重要，也很厲害，但它要隔著地球的大氣層看，所以畫面常常會被空氣和天氣影響。",
    memory: "記法：不是望遠鏡不認真，是地球外面的空氣會讓它比較難看清楚。"
  },
  space: {
    name: "太空望遠鏡",
    text: "太空望遠鏡飛到大氣層外面後，就不用一直受到空氣和雲影響，所以比較容易拍到清楚又穩定的畫面。",
    memory: "記法：把望遠鏡送到太空，就像把眼睛移到更乾淨的地方去看。"
  },
  weather: {
    name: "雲和空氣影響",
    text: "就算你有很棒的望遠鏡，如果剛好有雲、空氣在晃、或城市太亮，看到的畫面還是可能變模糊。",
    memory: "記法：地球不是壞人，但天氣和大氣常常會出來搗蛋。"
  },
  infrared: {
    name: "看見躲起來的光",
    text: "有些太空望遠鏡會看紅外線，能幫我們看到被塵埃遮住的地方，所以很多星星出生的地方就比較容易被發現。",
    memory: "記法：有些光不是眼睛直接看得到，但望遠鏡可以幫我們找到。"
  }
};

const telescopeParts = {
  mirror: {
    name: "主鏡",
    text: "主鏡像望遠鏡的大眼睛，會把很遠很遠的光收進來。收得越好，看到的細節通常就越多。",
    memory: "記法：主鏡就是太空望遠鏡最重要的看光工具。"
  },
  tube: {
    name: "鏡筒",
    text: "鏡筒像望遠鏡的身體，會保護裡面的光學零件，也幫忙讓光走在正確的路上。",
    memory: "記法：鏡筒像保護大眼睛的身體外殼。"
  },
  panel: {
    name: "太陽能板",
    text: "太空望遠鏡也需要電，太陽能板會把陽光變成電力，讓望遠鏡能一直工作。",
    memory: "記法：沒有太陽能板，望遠鏡很多事情都做不了。"
  },
  antenna: {
    name: "天線",
    text: "望遠鏡拍到資料後，要靠天線把訊號傳回地球，科學家才能收到照片和數據。",
    memory: "記法：天線像望遠鏡跟地球說話的嘴巴。"
  }
};

const quizQuestions = [
  {
    question: "為什麼有人會把望遠鏡送到太空？",
    options: ["因為想讓它看得更清楚", "因為地球沒有天空", "因為望遠鏡喜歡飛"],
    answer: 0,
    explanation: "答對了。送到太空後，比較不會被大氣、雲和地面光線干擾。"
  },
  {
    question: "地面上的空氣會對望遠鏡造成什麼影響？",
    options: ["讓畫面可能晃晃模糊", "讓望遠鏡變成紅色", "讓星星全部消失"],
    answer: 0,
    explanation: "沒錯。空氣流動會讓看到的畫面不穩定，這也是星星一閃一閃的原因之一。"
  },
  {
    question: "太空望遠鏡的大眼睛是哪個部分？",
    options: ["主鏡", "太陽能板", "天線"],
    answer: 0,
    explanation: "對。主鏡就是幫它把遠方光線收進來的重要部分。"
  },
  {
    question: "天線主要是在做什麼？",
    options: ["幫望遠鏡走路", "把資料傳回地球", "幫望遠鏡發光"],
    answer: 1,
    explanation: "正確。望遠鏡拍到的資料，要靠天線送回地球。"
  },
  {
    question: "像創生之柱、船底座星雲這些畫面，最適合拿來告訴我們什麼？",
    options: ["宇宙裡真的有很多看不完的細節", "所有星星都住在地球旁邊", "望遠鏡只會拍藍色照片"],
    answer: 0,
    explanation: "答對了。太空望遠鏡能幫我們看到宇宙裡很壯觀、很細緻的地方。"
  }
];

const modeName = document.querySelector("#mode-name");
const modeText = document.querySelector("#mode-text");
const modeMemory = document.querySelector("#mode-memory");
const modeButtons = document.querySelectorAll(".compare-button");
const groundScene = document.querySelector("#ground-scene");
const spaceScene = document.querySelector("#space-scene");

function setMode(modeKey) {
  const mode = compareModes[modeKey];
  if (!mode) return;

  modeName.textContent = mode.name;
  modeText.textContent = mode.text;
  modeMemory.textContent = mode.memory;

  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === modeKey);
  });

  groundScene?.classList.toggle("extra-hazy", modeKey === "weather");
  spaceScene?.classList.toggle("glow-strong", modeKey === "space" || modeKey === "infrared");
  spaceScene?.classList.toggle("infrared-mode", modeKey === "infrared");
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

const partName = document.querySelector("#part-name");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");
const partButtons = document.querySelectorAll(".hotspot");

function setPart(partKey) {
  const part = telescopeParts[partKey];
  if (!part) return;

  partName.textContent = part.name;
  partText.textContent = part.text;
  partMemory.textContent = part.memory;

  partButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.part === partKey);
  });
}

partButtons.forEach((button) => {
  button.addEventListener("click", () => setPart(button.dataset.part));
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
    quizQuestion.textContent = "太棒了，你已經知道太空望遠鏡為什麼要飛到太空。";
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "你已經能分清楚太空望遠鏡的優點、重要部位，還有它幫我們看見的宇宙。";
    quizNext.hidden = true;
    return;
  }

  renderQuiz();
});

setMode("ground");
setPart("mirror");
renderQuiz();

const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
