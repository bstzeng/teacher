const targetData = {
  moon: {
    name: "月亮",
    time: "你看到的是大約 1.3 秒前離開月亮的光。",
    text: "所以你看到的月亮，不是「很久以前」，但也不是完全同一個瞬間。",
    memory: "記法：距離越近，回看到的時間越短；距離越遠，回看到的時間越長。",
    facts: [
      "月亮的光到地球很快。",
      "所以只是在看很短很短以前的樣子。",
      "這能幫你先理解「看見過去」的起點。"
    ]
  },
  sun: {
    name: "太陽",
    time: "你看到的是大約 8 分鐘前離開太陽的光。",
    text: "所以你看見的太陽，其實不是此時此刻剛發出的畫面，而是稍早以前的太陽。",
    memory: "記法：太陽很近，但也已經不是『現在』，而是 8 分鐘前。",
    facts: [
      "陽光要花一點時間才到地球。",
      "所以太陽看起來像現在，其實已經有延遲。",
      "這是日常生活裡最容易理解的例子。"
    ]
  },
  sirius: {
    name: "遠一點的恆星",
    time: "如果是更遠的恆星，我們看到的可能是幾年前離開那裡的光。",
    text: "這時候就真的很像在看宇宙以前留下來的照片，而不是現在的直播。",
    memory: "記法：出了太陽系，『看以前』的感覺會變得更明顯。",
    facts: [
      "星星非常遠，光在路上要花更久。",
      "所以我們常常看到的是它過去的樣子。",
      "這也和上一課的光年概念連在一起。"
    ]
  },
  andromeda: {
    name: "仙女座",
    time: "你看到的是很久很久以前離開仙女座的光，大約是 250 萬年前。",
    text: "所以我們看仙女座時，看到的不是它今天的樣子，而是它很久以前的模樣。",
    memory: "記法：越遠的星系，越像在翻很古老的宇宙相簿。",
    facts: [
      "仙女座是一個很遠的鄰居星系。",
      "它的光要花很久才到地球。",
      "所以這是『看見過去』最震撼的例子之一。"
    ]
  },
  deep: {
    name: "超深宇宙",
    time: "深空照片裡的很多光，可能是在非常非常久以前就出發了。",
    text: "望遠鏡接到這些古老光線時，就像幫我們打開一扇看向早期宇宙的窗。",
    memory: "記法：望遠鏡不是讓時間倒退，而是讓我們接住很久以前出發的光。",
    facts: [
      "深空照片常常在看非常遙遠的天體。",
      "距離越遠，光在路上就越久。",
      "所以我們像是在看古老宇宙留下來的亮光。"
    ]
  }
};

const viewerButtons = document.querySelectorAll(".viewer-button");
const mapNodes = document.querySelectorAll(".map-node");
const targetName = document.getElementById("target-name");
const targetTime = document.getElementById("target-time");
const targetText = document.getElementById("target-text");
const targetMemory = document.getElementById("target-memory");
const targetFacts = document.getElementById("target-facts");

function setTarget(targetKey) {
  const data = targetData[targetKey];
  if (!data) return;

  viewerButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.target === targetKey);
  });

  mapNodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.target === targetKey);
  });

  targetName.textContent = data.name;
  targetTime.textContent = data.time;
  targetText.textContent = data.text;
  targetMemory.textContent = data.memory;
  targetFacts.innerHTML = data.facts.map((fact) => `<li>${fact}</li>`).join("");
}

[...viewerButtons, ...mapNodes].forEach((button) => {
  button.addEventListener("click", () => setTarget(button.dataset.target));
});

const quizData = [
  {
    question: "為什麼看很遠的星星，像是在看過去？",
    options: ["因為星星會倒帶", "因為光從那裡來到地球要花時間", "因為望遠鏡會讓時間停止"],
    answer: 1,
    explanation: "答對了。關鍵原因是光在路上旅行需要時間。"
  },
  {
    question: "看到太陽時，大約是在看多久以前的太陽？",
    options: ["大約 8 分鐘前", "大約 8 年前", "完全是同一秒"],
    answer: 0,
    explanation: "沒錯。陽光到地球大約要 8 分鐘左右。"
  },
  {
    question: "哪一個看起來最像是在看很古老的宇宙？",
    options: ["月亮", "深空照片裡很遠的星系", "家裡的燈泡"],
    answer: 1,
    explanation: "對喔。因為那些光可能已經在宇宙中跑了非常久。"
  },
  {
    question: "距離越遠，通常代表什麼？",
    options: ["光要花越久才到", "光會變慢到停住", "望遠鏡就會壞掉"],
    answer: 0,
    explanation: "答對了。距離越遠，光在路上的時間就越長。"
  },
  {
    question: "下面哪一句最正確？",
    options: ["宇宙真的在倒帶給我們看", "我們是在接收以前出發的光", "只有月亮會讓我們看到過去"],
    answer: 1,
    explanation: "完全正確。我們不是讓時間倒退，而是在接收以前就出發的光。"
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
    if (index === item.answer) button.classList.add("correct");
    if (index === selectedIndex && index !== item.answer) button.classList.add("wrong");
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

document.getElementById("current-year").textContent = new Date().getFullYear();
setTarget("moon");
renderQuiz();
