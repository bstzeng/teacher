const zoomLevels = {
  earth: {
    name: "地球",
    text: "地球是我們住的地方。看起來好像很大，但如果一路往外看，它其實只是太陽系裡的一顆小行星。",
    memory: "記法：先記住自己站在哪裡，再一層一層往外看。"
  },
  solar: {
    name: "太陽系",
    text: "太陽系是太陽和一群繞著太陽走的行星、衛星和小天體。地球只是太陽系裡的其中一員。",
    memory: "記法：地球住在太陽系裡，就像房間住在一個家裡。"
  },
  arm: {
    name: "銀河系手臂",
    text: "太陽系不是住在銀河系正中間，而是住在旋臂上的一個位置，離熱鬧的中心還有一段距離。",
    memory: "記法：我們家不在銀河正中間，而是在旁邊的一條手臂上。"
  },
  galaxy: {
    name: "整個銀河系",
    text: "銀河系像一個很大的星星城市，裡面有很多很多星星、氣體和塵埃，而太陽只是其中一顆。",
    memory: "記法：銀河系是大城市，太陽系只是城市裡的一小區。"
  }
};

const galaxyParts = {
  center: {
    name: "銀河中心",
    text: "銀河系中間最亮、最密的地方叫銀河中心，那裡擠了很多很多星星，看起來很熱鬧。",
    memory: "記法：中間最亮最擠的地方，就是銀河中心。"
  },
  arm: {
    name: "旋臂",
    text: "銀河系不是一個光滑圓盤，它有像旋風一樣彎彎的手臂，很多星星和氣體都分布在這些地方。",
    memory: "記法：彎彎的發亮帶，就是銀河的手臂。"
  },
  sun: {
    name: "太陽的位置",
    text: "太陽不在銀河中心，而是在一條旋臂上的某個位置。地球跟著太陽，所以我們也在那附近。",
    memory: "記法：找到太陽的位置，就找到我們的大概位置。"
  },
  edge: {
    name: "銀河外圍",
    text: "銀河外圍比較不像中心那麼擁擠，但也還是有很多星星和雲氣，並不是空空的。",
    memory: "記法：外圍比較鬆，但還是屬於銀河系的一部分。"
  }
};

const quizQuestions = [
  {
    question: "地球住在哪一個更大的家裡？",
    options: ["太陽系", "只有月亮", "仙女座星系"],
    answer: 0,
    explanation: "答對了。地球是太陽系的一員，會跟著太陽一起運動。"
  },
  {
    question: "太陽系又住在哪裡？",
    options: ["銀河系", "太陽裡面", "雲朵上面"],
    answer: 0,
    explanation: "沒錯。太陽系住在銀河系裡的一個位置。"
  },
  {
    question: "太陽是不是在銀河系最中間？",
    options: ["是", "不是", "只在晚上才是"],
    answer: 1,
    explanation: "對。太陽不在銀河中心，而是在一條旋臂上的位置。"
  },
  {
    question: "銀河系是什麼？",
    options: ["一顆特別大的星星", "很多星星組成的大星系", "一架飛機"],
    answer: 1,
    explanation: "正確。銀河系是很多很多星星、氣體和塵埃組成的大星系。"
  },
  {
    question: "仙女座星系和銀河系的關係比較像什麼？",
    options: ["隔壁鄰居", "太陽的鞋子", "地球的衛星"],
    answer: 0,
    explanation: "答對了。仙女座星系是離我們很近、很有名的鄰居星系。"
  }
];

const zoomName = document.querySelector("#zoom-name");
const zoomText = document.querySelector("#zoom-text");
const zoomMemory = document.querySelector("#zoom-memory");
const zoomButtons = document.querySelectorAll(".zoom-button");
const zoomVisual = document.querySelector("#zoom-visual");

function setZoom(levelKey) {
  const level = zoomLevels[levelKey];
  if (!level) return;

  zoomName.textContent = level.name;
  zoomText.textContent = level.text;
  zoomMemory.textContent = level.memory;

  zoomButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.level === levelKey);
  });

  zoomVisual?.setAttribute("data-level", levelKey);
}

zoomButtons.forEach((button) => {
  button.addEventListener("click", () => setZoom(button.dataset.level));
});

const partName = document.querySelector("#part-name");
const partText = document.querySelector("#part-text");
const partMemory = document.querySelector("#part-memory");
const partButtons = document.querySelectorAll(".hotspot");

function setPart(partKey) {
  const part = galaxyParts[partKey];
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
    quizQuestion.textContent = "太棒了，你已經知道自己在銀河系裡的大概位置。";
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "你已經能分清楚地球、太陽系、銀河系，還知道銀河系外面還有別的星系。";
    quizNext.hidden = true;
    return;
  }

  renderQuiz();
});

setZoom("earth");
setPart("center");
renderQuiz();

const yearNode = document.querySelector("#current-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
