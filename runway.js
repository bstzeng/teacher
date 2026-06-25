const headingSlider = document.querySelector("#heading-slider");
const headingLabel = document.querySelector("#heading-label");
const primaryRunway = document.querySelector("#primary-runway");
const oppositeRunwayLabel = document.querySelector("#opposite-runway");
const primaryExplainer = document.querySelector("#primary-explainer");
const oppositeExplainer = document.querySelector("#opposite-explainer");
const decoderNote = document.querySelector("#decoder-note");
const heroRunwayPrimary = document.querySelector("#hero-runway-primary");
const heroRunwayOpposite = document.querySelector("#hero-runway-opposite");
const heroNeedle = document.querySelector("#hero-needle");
const pairLeft = document.querySelector("#pair-left");
const pairRight = document.querySelector("#pair-right");
const pairCaption = document.querySelector("#pair-caption");
const pairsNote = document.querySelector("#pairs-note");
const diagramLeftNumber = document.querySelector("#diagram-left-number");
const diagramRightNumber = document.querySelector("#diagram-right-number");

const markButtons = [...document.querySelectorAll("[data-mark]")];
const markTitle = document.querySelector("#mark-title");
const markText = document.querySelector("#mark-text");
const markRemember = document.querySelector("#mark-remember");
const markKicker = document.querySelector("#mark-kicker");

const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const quizNext = document.querySelector("#quiz-next");
const presetButtons = [...document.querySelectorAll("[data-heading]")];
const pairButtons = [...document.querySelectorAll("[data-side]")];

const quizItems = [
  {
    question: "050° 大約會變成哪個跑道號碼？",
    options: ["05", "50", "15"],
    answer: "05",
    note: "答對了。先四捨五入到最接近的 10 度，再去掉最後的 0。",
  },
  {
    question: "如果一端是 23，對側通常會是？",
    options: ["41", "05", "12"],
    answer: "05",
    note: "正確。兩端會相差 18。",
  },
  {
    question: "L / C / R 主要是在說什麼？",
    options: ["跑道材質", "平行跑道的左右位置", "跑道長度"],
    answer: "平行跑道的左右位置",
    note: "對了。看到 L / C / R，就知道是在平行跑道群裡的哪一條。",
  },
  {
    question: "白色中心線主要幫助飛行員做什麼？",
    options: ["保持對正", "找停車格", "判斷油量"],
    answer: "保持對正",
    note: "沒錯。中心線讓飛機在滑行與落地時更容易保持直線。",
  },
  {
    question: "位移門檻前面的那一段，通常不能做什麼？",
    options: ["接地", "滑行", "看標線"],
    answer: "接地",
    note: "正確。那一段通常不適合接地，但仍可能可供滑行或從另一端使用。",
  },
];

const markContent = {
  threshold: {
    title: "閥標",
    text: "白色直條先告訴你正式可用的起點。從這裡開始，飛機可以依程序離地或接地。",
    remember: "白條先提醒你：這裡是跑道真正的邊界。",
  },
  designation: {
    title: "跑道編號",
    text: "數字會直接告訴你跑道朝哪個方向。05、23、14、32 這些號碼都在說同一件事：方向。",
    remember: "數字先看方向，再看左右側別。",
  },
  centerline: {
    title: "中心線",
    text: "中間的白色虛線是飛機的路線提示。滑行和落地時，飛行員會盡量讓機頭跟著它走。",
    remember: "沿著中線走，最容易保持對正。",
  },
  aiming: {
    title: "瞄準點",
    text: "大塊白色矩形像是『目標區』。飛行員在最後進場時會把落點放在這附近。",
    remember: "它不是要你落在最前面，而是要你看準一個穩定目標。",
  },
  touchdown: {
    title: "接地區標線",
    text: "這些標線提示比較適合接地的區域。精密進場跑道常見，幫助飛行員判斷落地位置。",
    remember: "接地要穩，不是越前面越好。",
  },
  displaced: {
    title: "位移門檻",
    text: "箭頭表示前面那段不適合接地。它可能因為障礙物、跑道條件或其他限制而被移到後面。",
    remember: "看到箭頭，記得前段可以滑行，通常不能在那裡落地。",
  },
};

function normalizeHeading(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(360, Math.max(0, number)) : 0;
}

function headingToRunway(heading) {
  let runway = Math.round(normalizeHeading(heading) / 10);
  if (runway === 0) runway = 36;
  if (runway > 36) runway = 36;
  return String(runway).padStart(2, "0");
}

function oppositeRunway(runway) {
  return String((((Number(runway) + 17) % 36) + 1)).padStart(2, "0");
}

function headingText(heading) {
  return `${String(Math.round(normalizeHeading(heading))).padStart(3, "0")}°`;
}

let selectedSide = "L";
let selectedMark = "threshold";
let currentQuestion = 0;
let score = 0;

function renderPairs(runway) {
  const other = oppositeRunway(runway);
  const suffix = selectedSide;
  const otherSuffix = selectedSide === "L" ? "R" : selectedSide === "R" ? "L" : "C";
  pairLeft.textContent = `${runway}${suffix}`;
  pairRight.textContent = `${other}${otherSuffix}`;
  diagramLeftNumber.textContent = `${runway}${suffix}`;
  diagramRightNumber.textContent = `${other}${otherSuffix}`;
  pairCaption.textContent =
    selectedSide === "C"
      ? `目前示範的是中間跑道 C。對側看過去，仍然會是 C。`
      : `目前示範的是 ${selectedSide === "L" ? "左側 L" : "右側 R"}。換到另一端時，左右會互換。`;
  pairsNote.textContent =
    selectedSide === "C"
      ? `${runway}C / ${other}C 代表同一條中間跑道的兩端。`
      : `${runway}${suffix} / ${other}${otherSuffix} 代表同一條平行跑道的兩端。`;
}

function renderDecoder() {
  const heading = normalizeHeading(headingSlider.value);
  const runway = headingToRunway(heading);
  const reciprocal = oppositeRunway(runway);
  const roundedHeading = Math.round(heading / 10) * 10;
  const displayHeading = roundedHeading === 0 ? 360 : roundedHeading;
  const reciprocalHeading = heading <= 180 ? heading + 180 : heading - 180;

  headingLabel.textContent = headingText(heading);
  primaryRunway.textContent = runway;
  oppositeRunwayLabel.textContent = reciprocal;
  heroRunwayPrimary.textContent = runway;
  heroRunwayOpposite.textContent = `對側 ${reciprocal}`;
  heroNeedle.style.transform = `translate(-50%, -50%) rotate(${heading - 40}deg)`;

  primaryExplainer.textContent = `${headingText(heading)} 會先四捨五入到 ${String(displayHeading).padStart(3, "0")}，再變成 ${runway}。`;
  oppositeExplainer.textContent = `同一條跑道換個方向看，會變成 ${reciprocal}，兩端剛好差 18。`;
  decoderNote.textContent = `例如 ${headingText(heading)} 會顯示 ${runway}；${String(Math.round(reciprocalHeading)).padStart(3, "0")}° 的對側會是 ${reciprocal}。`;

  renderPairs(runway);
}

function renderMark(mark) {
  selectedMark = mark;
  markButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mark === mark));
  const content = markContent[mark];
  markKicker.textContent = "跑道標線";
  markTitle.textContent = content.title;
  markText.textContent = content.text;
  markRemember.textContent = content.remember;
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
      ? "滿分！你已經可以看懂大部分跑道編號和標線了。"
      : `你答對 ${score} 題。再回頭看一次跑道圖，很快就會更熟。`;
}

headingSlider.addEventListener("input", renderDecoder);
presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    headingSlider.value = button.dataset.heading;
    renderDecoder();
  });
});

pairButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSide = button.dataset.side;
    pairButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderDecoder();
  });
});

markButtons.forEach((button) => {
  button.addEventListener("click", () => renderMark(button.dataset.mark));
});

quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizItems.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

renderDecoder();
renderMark(selectedMark);
renderQuestion();
