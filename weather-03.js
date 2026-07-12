const sunModes = {
  morning: {
    title: "早上",
    text: "早上的太陽比較低，光線還沒有那麼強，所以通常比中午舒服一些。",
    remember: "越多陽光直接照下來，通常就越亮、也越容易覺得熱。",
    heatMeter: "48%",
    lightMeter: "64%",
    heatLabel: "溫溫的",
    lightLabel: "還不錯亮",
    sunTop: "56px",
    sunLeft: "174px",
    cloud: 0,
    shadow: 0.32,
    rayScale: 0.82,
    rayOpacity: 0.72
  },
  noon: {
    title: "中午",
    text: "中午時太陽比較高，陽光更直接照下來，所以常常最亮、也最容易覺得熱。",
    remember: "中午常常最熱，不是因為太陽變大，而是照得更直接。",
    heatMeter: "96%",
    lightMeter: "94%",
    heatLabel: "很熱",
    lightLabel: "非常亮",
    sunTop: "32px",
    sunLeft: "220px",
    cloud: 0,
    shadow: 0.18,
    rayScale: 1,
    rayOpacity: 1
  },
  cloudy: {
    title: "雲遮住",
    text: "雲擋住一部分陽光時，我們通常會覺得比較不刺眼，也常常比較沒那麼熱。",
    remember: "雲不是把太陽關掉，而是幫忙擋掉一部分光。",
    heatMeter: "58%",
    lightMeter: "56%",
    heatLabel: "沒那麼熱",
    lightLabel: "變柔和",
    sunTop: "50px",
    sunLeft: "220px",
    cloud: 1,
    shadow: 0.26,
    rayScale: 0.76,
    rayOpacity: 0.42
  },
  shade: {
    title: "站在樹蔭",
    text: "站在樹蔭裡時，雖然外面還是有太陽，但直接照到你身上的光變少，所以會舒服很多。",
    remember: "站進陰影裡，不是太陽消失，而是你被遮住了。",
    heatMeter: "34%",
    lightMeter: "50%",
    heatLabel: "比較涼",
    lightLabel: "亮但不刺眼",
    sunTop: "40px",
    sunLeft: "220px",
    cloud: 0,
    shadow: 0.48,
    rayScale: 0.7,
    rayOpacity: 0.34
  }
};

const sunModeButtons = document.querySelectorAll(".mode-button");
const sunModeTitle = document.getElementById("mode-title");
const sunModeText = document.getElementById("mode-text");
const sunModeRemember = document.getElementById("mode-remember");
const heatMeter = document.getElementById("heat-meter");
const lightMeter = document.getElementById("light-meter");
const heatLabel = document.getElementById("heat-label");
const lightLabel = document.getElementById("light-label");
const stageSun = document.querySelector(".stage-sun");
const stageCloud = document.querySelector(".stage-cloud");
const stageShadow = document.querySelector(".stage-shadow");
const rays = document.querySelectorAll(".stage-rays i");

function setSunMode(modeKey) {
  const mode = sunModes[modeKey];
  if (!mode) return;

  sunModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === modeKey);
  });

  sunModeTitle.textContent = mode.title;
  sunModeText.textContent = mode.text;
  sunModeRemember.textContent = mode.remember;
  heatMeter.style.width = mode.heatMeter;
  lightMeter.style.width = mode.lightMeter;
  heatLabel.textContent = mode.heatLabel;
  lightLabel.textContent = mode.lightLabel;
  stageSun.style.top = mode.sunTop;
  stageSun.style.left = mode.sunLeft;
  stageCloud.style.opacity = String(mode.cloud);
  stageShadow.style.opacity = String(mode.shadow);

  rays.forEach((ray) => {
    ray.style.opacity = String(mode.rayOpacity);
    ray.style.height = `${Math.round(150 * mode.rayScale)}px`;
  });
}

sunModeButtons.forEach((button) => {
  button.addEventListener("click", () => setSunMode(button.dataset.mode));
});

document.querySelectorAll(".spot-card").forEach((card) => {
  const answer = card.dataset.answer;
  const buttons = card.querySelectorAll("button");
  const feedback = card.querySelector(".spot-feedback");

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
        feedback.textContent = `這題答案是「${answer}」。因為那裡收到更多直接陽光。`;
      } else {
        feedback.textContent = "答對了，因為那裡收到的直接陽光比較多。";
      }
    });
  });
});

const quizData = [
  {
    question: "中午常常比較熱，最主要是因為什麼？",
    options: ["陽光照得比較直接", "太陽突然變大", "地球停住了"],
    answer: 0,
    explanation: "答對了。中午比較熱，主要是因為陽光照得更直接。"
  },
  {
    question: "雲把太陽遮住時，我們通常會感覺怎樣？",
    options: ["比較不刺眼，也常常沒那麼熱", "一定會下雪", "會比中午更熱"],
    answer: 0,
    explanation: "對。雲會擋住一部分陽光。"
  },
  {
    question: "站在樹蔭下比較舒服，是因為？",
    options: ["直接照到身上的陽光變少", "太陽消失了", "天空變黑了"],
    answer: 0,
    explanation: "沒錯。陰影會幫你擋掉直射的陽光。"
  },
  {
    question: "哪個地方比較容易摸起來熱熱的？",
    options: ["被太陽曬很久的溜滑梯", "一直在樹蔭裡的椅子", "室內地毯"],
    answer: 0,
    explanation: "答對了。一直被曬的器材會更容易變熱。"
  },
  {
    question: "第三課最重要的觀念是什麼？",
    options: ["陽光越直接、遮得越少，就越亮也越熱", "只要有太陽就一定一樣熱", "所有地方中午都會下雨"],
    answer: 0,
    explanation: "對。這就是這一課最重要的結論。"
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

setSunMode("morning");
renderQuiz();
