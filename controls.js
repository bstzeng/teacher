const axisData = {
  roll: { label: "ROLL · 縱軸", title: "滾轉", control: "主要控制：副翼", text: "左右副翼反向動作，讓一側機翼升力增加、另一側減少，飛機便向左或向右傾斜。", className: "show-roll" },
  pitch: { label: "PITCH · 橫軸", title: "俯仰", control: "主要控制：升降舵", text: "升降舵改變尾部向下或向上的力量，使機頭抬高或降低，進而改變飛行路徑。", className: "show-pitch" },
  yaw: { label: "YAW · 垂直軸", title: "偏航", control: "主要控制：方向舵", text: "方向舵把機尾推向一側，使機頭向相反方向轉動。它常用來協調轉彎，而不是單獨完成一般轉彎。", className: "show-yaw" },
};
const axisButtons = [...document.querySelectorAll("[data-axis]")];
const demoPlane = document.querySelector("#demo-plane");
const axisPath = document.querySelector("#axis-path");
function showAxis(key) {
  const item = axisData[key];
  axisButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.axis === key));
  demoPlane.className = `demo-plane ${item.className}`;
  axisPath.className = `axis-path ${item.className}`;
  document.querySelector("#axis-label").textContent = item.label;
  document.querySelector("#axis-title").textContent = item.title;
  document.querySelector("#axis-control").textContent = item.control;
  document.querySelector("#axis-text").textContent = item.text;
}
axisButtons.forEach((button) => button.addEventListener("click", () => showAxis(button.dataset.axis)));

const aileron = document.querySelector("#aileron-control");
const elevator = document.querySelector("#elevator-control");
const rudder = document.querySelector("#rudder-control");
const horizon = document.querySelector("#artificial-horizon");
function direction(value, negative, positive) {
  if (Math.abs(value) < 2) return "中立";
  return `${Math.abs(value)}° ${value < 0 ? negative : positive}`;
}
function updateControls() {
  const a = Number(aileron.value);
  const e = Number(elevator.value);
  const r = Number(rudder.value);
  document.querySelector("#aileron-output").textContent = direction(a, "左", "右");
  document.querySelector("#elevator-output").textContent = direction(e, "下俯", "上仰");
  document.querySelector("#rudder-output").textContent = direction(r, "左", "右");
  document.querySelector("#roll-value").textContent = `${a}°`;
  document.querySelector("#pitch-value").textContent = `${e}°`;
  document.querySelector("#yaw-value").textContent = `${r}°`;
  horizon.style.setProperty("--roll", `${-a}deg`);
  horizon.style.setProperty("--pitch", `${e * 1.5}px`);
  horizon.style.setProperty("--yaw", `${r * 1.2}px`);
}
[aileron, elevator, rudder].forEach((control) => control.addEventListener("input", updateControls));
document.querySelector("#controls-reset").addEventListener("click", () => {
  aileron.value = 0; elevator.value = 0; rudder.value = 0; updateControls();
});

const bank = document.querySelector("#bank-control");
const turnRudder = document.querySelector("#turn-rudder-control");
const slipBall = document.querySelector("#slip-ball");
const turnPlane = document.querySelector("#turn-plane");
function sideText(value, left, right) {
  if (Math.abs(value) < 2) return "中立";
  return `${Math.abs(value)}° ${value < 0 ? left : right}`;
}
function updateTurn() {
  const b = Number(bank.value);
  const r = Number(turnRudder.value);
  const idealRudder = b * 0.8;
  const error = r - idealRudder;
  const ballPosition = Math.max(-38, Math.min(38, error * 1.5));
  document.querySelector("#bank-output").textContent = sideText(b, "左", "右");
  document.querySelector("#turn-rudder-output").textContent = Math.abs(r) < 2 ? "中立" : `${Math.abs(r)}° ${r < 0 ? "左舵" : "右舵"}`;
  turnPlane.style.transform = `translate(-50%, -50%) rotate(${b}deg)`;
  slipBall.style.transform = `translateX(${ballPosition}px)`;
  const status = document.querySelector("#coordination-status");
  const advice = document.querySelector("#turn-advice");
  if (Math.abs(error) <= 5) {
    status.textContent = "球在中央：協調轉彎";
    status.className = "coordinated";
    advice.textContent = "目前傾斜與方向舵搭配接近協調，乘客不會明顯被甩向側面。";
  } else if (Math.sign(error) === Math.sign(b) || b === 0) {
    status.textContent = "球向外：外滑 Skid";
    status.className = "uncoordinated";
    advice.textContent = "方向舵相對過多，飛機有向彎道外側滑出的趨勢。減少同方向舵量。";
  } else {
    status.textContent = "球向內：側滑 Slip";
    status.className = "uncoordinated";
    advice.textContent = "方向舵相對不足或方向相反，飛機向低翼一側滑動。增加適量同方向舵。";
  }
}
[bank, turnRudder].forEach((control) => control.addEventListener("input", updateTurn));

const questions = [
  { question: "要讓飛機向右傾斜，主要先使用哪個控制面？", options: ["副翼", "升降舵", "襟翼"], answer: "副翼", note: "正確。副翼控制繞縱軸的滾轉。" },
  { question: "讓機頭上仰或下俯，主要使用什麼？", options: ["方向舵", "升降舵", "擾流板"], answer: "升降舵", note: "正確。升降舵控制繞橫軸的俯仰。" },
  { question: "方向舵主要控制哪種旋轉？", options: ["滾轉", "俯仰", "偏航"], answer: "偏航", note: "答對了。方向舵控制機頭沿垂直軸左右偏轉。" },
  { question: "一般協調轉彎只需要副翼，不必使用其他控制嗎？", options: ["是", "不是，還需要方向舵與升降舵配合", "只有降落時才需要配合"], answer: "不是，還需要方向舵與升降舵配合", note: "正確。三種控制會依飛行狀態協調使用。" },
  { question: "轉彎協調球在中央通常表示什麼？", options: ["飛機失速", "轉彎接近協調", "起落架未放下"], answer: "轉彎接近協調", note: "正確。球在中央表示側向加速度與傾斜搭配良好。" },
];
const progress = document.querySelector("#challenge-progress");
const question = document.querySelector("#challenge-question");
const options = document.querySelector("#challenge-options");
const feedback = document.querySelector("#challenge-feedback");
const next = document.querySelector("#challenge-next");
let current = 0; let score = 0;
function renderQuestion() {
  const item = questions[current];
  progress.textContent = `第 ${current + 1} 題，共 ${questions.length} 題`; question.textContent = item.question; feedback.textContent = ""; next.hidden = true; options.replaceChildren();
  item.options.forEach((label) => { const button=document.createElement("button"); button.className="challenge-option"; button.type="button"; button.textContent=label; button.addEventListener("click",()=>checkAnswer(button,label)); options.append(button); });
}
function checkAnswer(selected,value) {
  const item=questions[current]; options.querySelectorAll("button").forEach((button)=>{button.disabled=true;if(button.textContent===item.answer)button.classList.add("is-correct");});
  if(value===item.answer){score+=1;feedback.textContent=item.note;}else{selected.classList.add("is-wrong");feedback.textContent=`正確答案是「${item.answer}」。`;}
  next.hidden=false;next.firstChild.textContent=current===questions.length-1?"查看成績 ":"下一題 ";
}
function showResult(){progress.textContent="挑戰完成";options.replaceChildren();feedback.textContent="";next.hidden=true;question.innerHTML=`<div class="challenge-result">${score===questions.length?"滿分！你已掌握三軸控制與協調轉彎。":`你答對 ${score} 題。回到控制台再試幾次組合，就會更熟。`}</div>`;}
next.addEventListener("click",()=>{current+=1;if(current<questions.length)renderQuestion();else showResult();});
document.querySelector("#current-year").textContent=new Date().getFullYear();
showAxis("roll"); updateControls(); updateTurn(); renderQuestion();
