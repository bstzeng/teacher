const stationParts = {
  panels: {
    name: "太陽能板",
    text: "太陽能板像太空站的大翅膀，會把陽光變成電力，讓裡面的燈、電腦和設備能工作。",
    memory: "記法：沒有電，太空站很多事情都做不了，所以太陽能板很重要。"
  },
  lab: {
    name: "實驗艙",
    text: "很多科學實驗會在這裡進行。因為太空站接近失重，所以研究植物、材料或人體時會有很特別的結果。",
    memory: "記法：太空站不只是住的地方，它還是一個大實驗室。"
  },
  arm: {
    name: "機器手臂",
    text: "機器手臂可以幫忙搬東西、抓住設備，甚至協助太空人在外面工作，是太空站很重要的幫手。",
    memory: "記法：機器手臂就像太空站伸出去的大手。"
  },
  cupola: {
    name: "觀景窗",
    text: "這裡像太空站的觀景室。太空人可以從這裡看地球，也會觀察外面的設備和來訪的太空船。",
    memory: "記法：觀景窗像太空站的眼睛。"
  },
  airlock: {
    name: "氣閘艙",
    text: "太空人如果要出去做太空漫步，會先在這裡做準備，慢慢調整環境之後再到外面。",
    memory: "記法：氣閘艙像通往太空外面的安全門。"
  },
  dock: {
    name: "太空船對接口",
    text: "補給太空船或載人的太空船來到太空站時，會停靠在這些對接口，讓人和物資能安全進出。",
    memory: "記法：對接口就像太空站的停車位和大門口。"
  }
};

const daySteps = {
  wake: {
    time: "早上",
    name: "起床整理身體和設備",
    text: "太空人起床後要先整理自己，也要確認今天的任務。因為在失重環境，東西很容易飄走，所以每件小事都要更仔細。",
    memory: "記法：太空站裡看起來很酷，但生活其實很有規矩。"
  },
  science: {
    time: "白天",
    name: "做實驗和記錄結果",
    text: "太空人常常要幫科學家做實驗，例如觀察植物、測試材料或記錄身體變化，這些都是太空站很重要的任務。",
    memory: "記法：太空站最重要的工作之一，就是幫大家做研究。"
  },
  exercise: {
    time: "每天都要",
    name: "固定運動，讓身體不要退步",
    text: "因為失重會讓肌肉和骨頭變弱，所以太空人每天都要運動，用跑步機或腳踏車保持身體力量。",
    memory: "記法：在太空也要運動，不然身體會變沒力。"
  },
  spacewalk: {
    time: "有任務時",
    name: "穿太空衣到外面維修或安裝設備",
    text: "有些事情不能只在裡面完成，太空人要穿上厚重太空衣，從氣閘艙出去，在外面修理或安裝設備。",
    memory: "記法：太空漫步不是散步，是很認真的工作。"
  },
  sleep: {
    time: "晚上",
    name: "把自己固定好再睡覺",
    text: "在失重環境睡覺時，人不會躺在床上，而是把睡袋固定住，這樣睡覺時才不會慢慢飄走。",
    memory: "記法：在太空睡覺也要先把自己綁好。"
  }
};

const quizQuestions = [
  {
    question: "太空站最像下面哪一種東西？",
    options: ["太空中的大房子和實驗室", "一顆普通石頭", "只會發光的星星"],
    answer: 0,
    explanation: "沒錯。太空站可以住人，也可以做研究，所以像太空中的大房子和實驗室。"
  },
  {
    question: "太空站的大太陽能板主要是做什麼？",
    options: ["拿來裝飾", "把陽光變成電力", "讓太空站變成藍色"],
    answer: 1,
    explanation: "答對了。太陽能板會把陽光變成電，讓太空站的設備能工作。"
  },
  {
    question: "太空人如果要到太空站外面工作，通常會先經過哪裡？",
    options: ["觀景窗", "餐桌", "氣閘艙"],
    answer: 2,
    explanation: "對。氣閘艙像安全門，太空人出去做太空漫步前會先在這裡準備。"
  },
  {
    question: "為什麼太空人每天都要運動？",
    options: ["因為太空站太大", "因為失重會讓肌肉和骨頭變弱", "因為不運動就不能吃飯"],
    answer: 1,
    explanation: "正確。失重環境會讓身體退步，所以要固定運動。"
  },
  {
    question: "太空站和上一課的人造衛星有什麼關係？",
    options: ["完全沒關係", "太空站也是一種能繞地球飛的人造物", "太空站其實是月亮"],
    answer: 1,
    explanation: "答對了。太空站也會繞地球飛，可以把它看成能住人的大型人造太空設施。"
  }
];

const partName = document.querySelector("#part-name");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");
const partButtons = document.querySelectorAll("[data-part]");

function setPart(partKey) {
  const part = stationParts[partKey];
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

const stepTime = document.querySelector("#step-time");
const stepName = document.querySelector("#step-name");
const stepText = document.querySelector("#step-text");
const stepMemory = document.querySelector("#step-memory");
const stepButtons = document.querySelectorAll(".timeline-button");

function setStep(stepKey) {
  const step = daySteps[stepKey];
  if (!step) return;

  stepTime.textContent = step.time;
  stepName.textContent = step.name;
  stepText.textContent = step.text;
  stepMemory.textContent = step.memory;

  stepButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.step === stepKey);
  });
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => setStep(button.dataset.step));
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
    quizQuestion.textContent = "太棒了，你已經知道太空站是能住人的太空研究站。";
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "你已經能分清楚太空站的用途、重要區域，還有太空人的日常工作。";
    quizNext.hidden = true;
    return;
  }

  renderQuiz();
});

renderQuiz();
setPart("panels");
setStep("wake");

const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
