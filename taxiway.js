const mapButtons = [...document.querySelectorAll("[data-mark]")];
const mapTitle = document.querySelector("#map-title-text");
const mapText = document.querySelector("#map-text");
const mapRemember = document.querySelector("#map-remember");
const mapKicker = document.querySelector("#map-kicker");
const signButtons = [...document.querySelectorAll("[data-sign]")];
const signExample = document.querySelector("#sign-example");
const signTitle = document.querySelector("#sign-title");
const signText = document.querySelector("#sign-text");
const signRemember = document.querySelector("#sign-remember");
const signKicker = document.querySelector("#sign-kicker");
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");

const marks = {
  centerline: {
    title: "中心線",
    text: "黃色中心線會帶你沿著滑行道前進。飛行員會盡量讓鼻輪跟著這條線，這樣才不容易偏出路線。",
    remember: "黃色中心線是地面上的導航線。",
  },
  edge: {
    title: "邊線",
    text: "邊線把可用的滑行區域和旁邊的不可用區域分開。看到它，就知道不要往外偏。",
    remember: "邊線是在提醒你：外面不是路。",
  },
  hold: {
    title: "停等線",
    text: "兩條實線配兩條虛線，通常表示接近跑道或重要區域前要先停下，等航管許可。",
    remember: "停等線前先停，再看有沒有許可。",
  },
  runway: {
    title: "跑道前方",
    text: "白色或紅白標誌代表這裡和跑道安全直接相關。沒有許可就不能直接穿越。",
    remember: "靠近跑道的地方，一定先確認再移動。",
  },
};

const signs = {
  location: {
    title: "位置標誌",
    text: "黑底黃字告訴你「你現在在哪裡」。像 A、B、C 這些字母，通常就是滑行道名稱。",
    remember: "黑底黃字：我在哪裡。",
    exampleClass: "location",
    label: "A",
    top: "使用中",
  },
  direction: {
    title: "方向標誌",
    text: "黑底黃字加箭頭，告訴你前方有哪些方向可以去。飛行員會依指示轉向正確的滑行道。",
    remember: "黑底黃字加箭頭：往哪裡走。",
    exampleClass: "direction",
    label: "A7 →",
    top: "前往",
  },
  mandatory: {
    title: "強制指示標誌",
    text: "紅底白字是很重要的提醒，表示這裡是必須特別注意、不能隨便通過的區域。",
    remember: "紅底白字：要先停看等。",
    exampleClass: "mandatory",
    label: "HOLD",
    top: "必須注意",
  },
};

const quizItems = [
  {
    question: "滑行道中心線通常是什麼顏色？",
    options: ["黃色", "白色", "紅色"],
    answer: "黃色",
    note: "對了。滑行道多半用黃色標線。",
  },
  {
    question: "哪一種標線通常表示接近跑道前要先停？",
    options: ["停等線", "中心線", "邊線"],
    answer: "停等線",
    note: "答對了。看到停等線，就要先停下來等許可。",
  },
  {
    question: "黑底黃字通常是在告訴你什麼？",
    options: ["現在在哪裡或往哪裡去", "飛機重量", "風向"],
    answer: "現在在哪裡或往哪裡去",
    note: "正確。位置標誌和方向標誌常用黑底黃字。",
  },
  {
    question: "靠近跑道前，最重要的動作是什麼？",
    options: ["加速穿過去", "先確認再前進", "關掉燈"],
    answer: "先確認再前進",
    note: "沒錯。靠近跑道一定要先確認許可。",
  },
  {
    question: "紅底白字的標誌通常代表什麼？",
    options: ["可以隨便通過", "必須特別注意或停止", "只是裝飾"],
    answer: "必須特別注意或停止",
    note: "正確。紅底白字是高注意力的提醒。",
  },
];

let currentMark = "centerline";
let currentSign = "location";
let currentQuestion = 0;
let score = 0;

function renderMark(mark) {
  currentMark = mark;
  mapButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mark === mark));
  const item = marks[mark];
  mapKicker.textContent = "滑行道地圖";
  mapTitle.textContent = item.title;
  mapText.textContent = item.text;
  mapRemember.textContent = item.remember;
}

function renderSign(sign) {
  currentSign = sign;
  signButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.sign === sign));
  const item = signs[sign];
  signKicker.textContent = "標誌解說";
  signTitle.textContent = item.title;
  signText.textContent = item.text;
  signRemember.textContent = item.remember;
  signExample.className = `sign-example ${item.exampleClass}`;
  signExample.innerHTML = `<span>${item.top}</span><strong>${item.label}</strong>`;
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
  quizNext.firstChild.textContent =
    currentQuestion === quizItems.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  quizProgress.textContent = "挑戰完成";
  quizOptions.replaceChildren();
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizQuestion.innerHTML =
    score === quizItems.length
      ? "滿分！你已經能看懂滑行道和常見地面標誌了。"
      : `你答對 ${score} 題。再回頭看一次地面線條，很快就能更熟。`;
}

mapButtons.forEach((button) => {
  button.addEventListener("click", () => renderMark(button.dataset.mark));
});

signButtons.forEach((button) => {
  button.addEventListener("click", () => renderSign(button.dataset.sign));
});

quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

renderMark(currentMark);
renderSign(currentSign);
renderQuestion();
