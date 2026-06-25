const speedControl = document.querySelector("#speed-control");
const aoaControl = document.querySelector("#aoa-control");
const flapControl = document.querySelector("#flap-control");
const speedOutput = document.querySelector("#speed-output");
const aoaOutput = document.querySelector("#aoa-output");
const flapOutput = document.querySelector("#flap-output");
const wingWrap = document.querySelector("#wing-wrap");
const flapVisual = document.querySelector("#flap-visual");
const angleReadout = document.querySelector("#angle-readout");
const liftMeter = document.querySelector("#lift-meter");
const dragMeter = document.querySelector("#drag-meter");
const liftValue = document.querySelector("#lift-value");
const dragValue = document.querySelector("#drag-value");
const labStatus = document.querySelector("#lab-status");
const stallCloud = document.querySelector("#stall-cloud");
const flapNames = ["收起", "起飛 1", "起飛 2", "降落"];

function updateLab() {
  const speed = Number(speedControl.value);
  const aoa = Number(aoaControl.value);
  const flap = Number(flapControl.value);
  const criticalAoa = 16 - flap * 0.5;
  const speedFactor = Math.pow(speed / 230, 2);
  const aoaFactor = aoa <= criticalAoa ? 0.42 + aoa * 0.095 : Math.max(0.35, 1.85 - (aoa - criticalAoa) * 0.32);
  const flapFactor = 1 + flap * 0.14;
  const lift = Math.min(100, Math.round(72 * speedFactor * aoaFactor * flapFactor));
  const drag = Math.min(100, Math.round(13 + speedFactor * 10 + aoa * 1.4 + flap * 13 + (aoa > criticalAoa ? 25 : 0)));
  const stalled = aoa > criticalAoa;

  speedOutput.textContent = `${speed} km/h`;
  aoaOutput.textContent = `${aoa}°`;
  flapOutput.textContent = flapNames[flap];
  angleReadout.textContent = `${aoa}°`;
  wingWrap.style.transform = `translate(-50%, -50%) rotate(${-aoa}deg)`;
  flapVisual.style.transform = `rotate(${flap * 9}deg)`;
  liftMeter.style.width = `${lift}%`;
  dragMeter.style.width = `${drag}%`;
  liftValue.textContent = `${lift}%`;
  dragValue.textContent = `${drag}%`;
  stallCloud.classList.toggle("is-visible", stalled);

  if (stalled) {
    labStatus.className = "lab-status danger";
    labStatus.innerHTML = "<span>失速警告</span><strong>迎角超過臨界值，氣流開始大範圍分離</strong>";
  } else if (lift < 55) {
    labStatus.className = "lab-status warning";
    labStatus.innerHTML = "<span>升力不足</span><strong>增加速度、迎角或適量襟翼，再觀察變化</strong>";
  } else if (drag > 75) {
    labStatus.className = "lab-status warning";
    labStatus.innerHTML = "<span>阻力很大</span><strong>雖然有升力，但維持速度需要更多推力</strong>";
  } else {
    labStatus.className = "lab-status";
    labStatus.innerHTML = "<span>穩定氣流</span><strong>目前迎角未超過臨界範圍</strong>";
  }
}

[speedControl, aoaControl, flapControl].forEach((control) => control.addEventListener("input", updateLab));

const questions = [
  { question: "飛機保持等速平飛時，哪兩組力量大致平衡？", options: ["升力與重力、推力與阻力", "升力與推力、重力與阻力", "只有升力與重力"], answer: "升力與重力、推力與阻力", note: "正確。上下與前後兩組力量都大致平衡。" },
  { question: "推力大於阻力時，飛機通常會怎樣？", options: ["加速", "立即失速", "一定下降"], answer: "加速", note: "正確。前向合力會讓飛機加速，直到新的平衡形成。" },
  { question: "迎角持續增加，超過臨界迎角後會發生什麼？", options: ["升力無限增加", "氣流分離並可能失速", "引擎一定熄火"], answer: "氣流分離並可能失速", note: "正確。失速的核心是迎角過大造成氣流分離。" },
  { question: "放下襟翼通常會帶來什麼變化？", options: ["升力和阻力都增加", "升力與阻力都消失", "只會讓飛機變輕"], answer: "升力和阻力都增加", note: "正確。襟翼適合低速起降，但阻力也會增加。" },
  { question: "引擎停止時，飛機一定會像石頭一樣掉下去嗎？", options: ["一定會", "不一定，仍可保持適當迎角滑翔", "只有直升機可以滑翔"], answer: "不一定，仍可保持適當迎角滑翔", note: "答對了。固定翼飛機可把高度換成速度並持續滑翔。" },
];

const progress = document.querySelector("#challenge-progress");
const question = document.querySelector("#challenge-question");
const options = document.querySelector("#challenge-options");
const feedback = document.querySelector("#challenge-feedback");
const next = document.querySelector("#challenge-next");
let current = 0;
let score = 0;

function renderQuestion() {
  const item = questions[current];
  progress.textContent = `第 ${current + 1} 題，共 ${questions.length} 題`;
  question.textContent = item.question;
  feedback.textContent = "";
  next.hidden = true;
  options.replaceChildren();
  item.options.forEach((label) => {
    const button = document.createElement("button");
    button.className = "challenge-option";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => checkAnswer(button, label));
    options.append(button);
  });
}

function checkAnswer(selected, value) {
  const item = questions[current];
  options.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });
  if (value === item.answer) {
    score += 1;
    feedback.textContent = item.note;
  } else {
    selected.classList.add("is-wrong");
    feedback.textContent = `正確答案是「${item.answer}」。`;
  }
  next.hidden = false;
  next.firstChild.textContent = current === questions.length - 1 ? "查看成績 " : "下一題 ";
}

function showResult() {
  progress.textContent = "挑戰完成";
  options.replaceChildren();
  feedback.textContent = "";
  next.hidden = true;
  question.innerHTML = `<div class="challenge-result">${score === questions.length ? "滿分！你已掌握飛行四力與失速的核心觀念。" : `你答對 ${score} 題。回到風洞再試幾組設定，直覺會更清楚。`}</div>`;
}

next.addEventListener("click", () => {
  current += 1;
  if (current < questions.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
updateLab();
renderQuestion();
