const rainModes = {
  drizzle: {
    title: "毛毛雨",
    text: "毛毛雨很細、很輕，常常像空氣裡飄著小小水絲，地面變濕的速度比較慢。",
    remember: "雨勢越大，通常雨滴越多、聲音越大、地面也濕得越快。",
    soundMeter: "18%",
    soundLabel: "很小聲",
    wetMeter: "24%",
    wetLabel: "慢慢濕",
    drizzle: 1,
    light: 0,
    heavy: 0,
    puddleWidth: "122px",
    puddleHeight: "18px",
    puddleOpacity: "0.28"
  },
  light: {
    title: "小雨",
    text: "小雨比毛毛雨更明顯，能清楚看到一滴一滴往下落，地面也會慢慢變濕。",
    remember: "小雨的感覺常常是看得到一滴一滴，但還不會像大雨那麼急。",
    soundMeter: "46%",
    soundLabel: "有聲音了",
    wetMeter: "54%",
    wetLabel: "穩定變濕",
    drizzle: 0,
    light: 1,
    heavy: 0,
    puddleWidth: "148px",
    puddleHeight: "24px",
    puddleOpacity: "0.52"
  },
  heavy: {
    title: "大雨",
    text: "大雨的雨滴很多、很密，聲音比較大，地面和水坑也常常很快就變明顯。",
    remember: "大雨最容易認的，就是又密、又快、又大聲。",
    soundMeter: "96%",
    soundLabel: "很大聲",
    wetMeter: "100%",
    wetLabel: "很快濕透",
    drizzle: 0,
    light: 0,
    heavy: 1,
    puddleWidth: "198px",
    puddleHeight: "34px",
    puddleOpacity: "0.9"
  }
};

const rainButtons = document.querySelectorAll(".mode-button");
const rainTitle = document.getElementById("mode-title");
const rainText = document.getElementById("mode-text");
const rainRemember = document.getElementById("mode-remember");
const soundMeter = document.getElementById("sound-meter");
const soundLabel = document.getElementById("sound-label");
const wetMeter = document.getElementById("wet-meter");
const wetLabel = document.getElementById("wet-label");
const rainDrizzle = document.querySelector(".stage-rain-drizzle");
const rainLight = document.querySelector(".stage-rain-light");
const rainHeavy = document.querySelector(".stage-rain-heavy");
const stagePuddle = document.querySelector(".stage-puddle");

function setRainMode(modeKey) {
  const mode = rainModes[modeKey];
  if (!mode) return;

  rainButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  rainTitle.textContent = mode.title;
  rainText.textContent = mode.text;
  rainRemember.textContent = mode.remember;
  soundMeter.style.width = mode.soundMeter;
  soundLabel.textContent = mode.soundLabel;
  wetMeter.style.width = mode.wetMeter;
  wetLabel.textContent = mode.wetLabel;
  rainDrizzle.style.opacity = String(mode.drizzle);
  rainLight.style.opacity = String(mode.light);
  rainHeavy.style.opacity = String(mode.heavy);
  stagePuddle.style.width = mode.puddleWidth;
  stagePuddle.style.height = mode.puddleHeight;
  stagePuddle.style.opacity = mode.puddleOpacity;
}

rainButtons.forEach((button) => {
  button.addEventListener("click", () => setRainMode(button.dataset.mode));
});

document.querySelectorAll(".game-card").forEach((card) => {
  const answer = card.dataset.answer;
  const buttons = card.querySelectorAll("button");
  const feedback = card.querySelector(".game-feedback");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.disabled = true;
        item.classList.remove("is-correct", "is-wrong");
      });

      buttons.forEach((item) => {
        if (item.textContent === answer) item.classList.add("is-correct");
      });

      if (button.textContent !== answer) {
        button.classList.add("is-wrong");
        feedback.textContent = `這題比較像${answer}，因為描述的雨滴、聲音和地面變化最接近${answer}。`;
      } else {
        feedback.textContent = `答對了，這題就是${answer}。`;
      }
    });
  });
});

const quizData = [
  {
    question: "哪一種雨最像細細的小水絲在空氣裡飄？",
    options: ["毛毛雨", "大雨", "雷雨"],
    answer: 0,
    explanation: "答對了。毛毛雨最容易給人這種感覺。"
  },
  {
    question: "哪一種雨最容易讓窗戶或屋頂聽起來很大聲？",
    options: ["大雨", "毛毛雨", "小雨"],
    answer: 0,
    explanation: "對。大雨通常聲音最大。"
  },
  {
    question: "小雨和毛毛雨比起來，哪個通常更容易清楚看到一滴一滴的雨？",
    options: ["小雨", "毛毛雨", "一樣"],
    answer: 0,
    explanation: "沒錯。小雨通常比較能清楚看到雨滴。"
  },
  {
    question: "雨勢越大，地面通常會怎樣？",
    options: ["濕得越快", "一定變乾", "越來越亮"],
    answer: 0,
    explanation: "答對了。雨勢越大，地面通常濕得越快。"
  },
  {
    question: "第七課最想教你的事是什麼？",
    options: ["用雨滴多少、聲音和地面變化分辨雨勢", "先背所有颱風名字", "先記住所有氣象站位置"],
    answer: 0,
    explanation: "對。這就是這一課最實用的判斷方法。"
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
    if (index === item.answer) button.classList.add("is-correct");
    if (index === selectedIndex && index !== item.answer) button.classList.add("is-wrong");
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

setRainMode("drizzle");
renderQuiz();
