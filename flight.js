const phases = [
  {
    english: "PRE-FLIGHT", title: "航前準備",
    description: "機組確認天氣、航路、油量、載重和備降機場；地勤同步加油、裝行李、補餐與檢查外觀。所有資料最後要符合飛機性能與重心限制。",
    aircraft: "停在登機門，使用地面電源或 APU", check: "飛行計畫、燃油、載重平衡、外部檢查",
    cockpit: "輸入航路、檢查系統、計算起飛資料並完成檢查單。", passenger: "還沒登機，但客艙、行李與餐飲已經在準備。", link: "APU、機身貨艙與駕駛艙系統都在這個階段開始工作。", x: 4, y: 81,
  },
  {
    english: "BOARDING & DOORS", title: "登機與關門",
    description: "乘客登機、行李完成裝載，客艙組員確認座椅、行李櫃和緊急出口。艙門關閉後，航空器進入準備離開登機門的狀態。",
    aircraft: "仍停在登機門，艙門依序關閉", check: "乘客人數、艙單、客艙安全、艙門狀態",
    cockpit: "取得放行許可、確認最後載重資料並準備啟動。", passenger: "聽見安全示範，空橋撤離，客艙燈光與空調可能改變。", link: "機身增壓區、艙門與客艙安全程序在此完成最後確認。", x: 12, y: 81,
  },
  {
    english: "PUSHBACK & START", title: "推離與發動機啟動",
    description: "拖車把飛機從登機門向後推出。取得許可後，機組通常使用 APU 的壓縮空氣依程序啟動主發動機，再完成起飛前檢查。",
    aircraft: "由拖車移動，主發動機陸續啟動", check: "推離許可、發動機參數、液壓與發電系統",
    cockpit: "監控啟動順序，確認每具發動機轉速、溫度和壓力正常。", passenger: "可能感到飛機向後移動，並聽見發動機聲逐漸增大。", link: "第四課的 APU 和第二課的引擎系統顯示，在此直接接力。", x: 20, y: 78,
  },
  {
    english: "TAXI", title: "滑行",
    description: "飛機依地面管制指示沿滑行道前往指定跑道。飛行員控制方向、速度和煞車，並在途中完成起飛前最後設定。",
    aircraft: "起落架放下，低速沿滑行道移動", check: "滑行路線、飛行控制檢查、襟翼與配平設定",
    cockpit: "一人滑行，一人對照機場圖、監聽航管並防止走錯路。", passenger: "感到轉彎、煞車和短暫停等，襟翼可能在窗外開始伸出。", link: "起落架、前輪轉向、襟翼與地面標誌一起參與。", x: 28, y: 66,
  },
  {
    english: "TAKEOFF", title: "起飛",
    description: "取得起飛許可後，飛機進入跑道、增加推力並加速。達到計算速度後抬起機頭，主輪離地，建立穩定正爬升後收起落架。",
    aircraft: "高推力、襟翼部分放下、由地面轉為飛行", check: "推力、V 速度、跑道方向、正爬升與起落架",
    cockpit: "兩位飛行員交叉監控速度和發動機，依標準口令完成離地。", passenger: "感到明顯加速、機頭抬高，離地後可能聽到起落架收起聲。", link: "第六課的四種力在此打破平衡：推力增加、速度上升、升力超過重量。", x: 36, y: 35,
  },
  {
    english: "CLIMB", title: "爬升",
    description: "飛機依離場程序和航管指示爬向巡航高度。速度增加後逐步收起襟翼，推力由起飛設定改為爬升設定。",
    aircraft: "乾淨構型逐步建立，持續增加高度", check: "高度限制、速度、襟翼收起時機與航路",
    cockpit: "操縱或監控自動駕駛，完成爬升檢查並與不同航管單位交接。", passenger: "安全帶燈可能仍亮著，耳朵感到壓力變化，機艙逐漸平穩。", link: "三軸控制、自動駕駛與航路導航在這個階段同時工作。", x: 45, y: 22,
  },
  {
    english: "CRUISE", title: "巡航",
    description: "飛機在較高高度以高效率速度前進。這不是『沒事做』：機組持續監控天氣、燃油、系統、航路和目的地狀況。",
    aircraft: "高空平飛，襟翼與起落架完全收起", check: "燃油趨勢、天氣、系統狀態、下一段航路",
    cockpit: "定期交叉檢查位置與油量，與區域管制聯絡，評估繞飛和高度變更。", passenger: "客艙服務通常在此進行，偶爾會因亂流重新繫上安全帶。", link: "此時升力與重量、推力與阻力大致取得新的平衡。", x: 56, y: 18,
  },
  {
    english: "DESCENT & APPROACH", title: "下降與進場",
    description: "機組根據距離、風和航管許可安排下降，取得目的地天氣與跑道資訊，設定進場程序並逐步減速、放出襟翼和起落架。",
    aircraft: "高度與速度降低，逐步轉為降落構型", check: "進場簡報、最低高度、速度、襟翼、起落架",
    cockpit: "重新核對航圖與進場方式，持續判斷進場是否穩定。", passenger: "感到發動機變安靜、飛機轉彎和下降，之後聽到襟翼與起落架動作。", link: "第五課的進場航圖、第二課的儀表與第四課的硬體在此匯合。", x: 69, y: 25,
  },
  {
    english: "LANDING", title: "落地",
    description: "飛機沿最後進場路徑對正跑道，在跑道上方減小下降率並接地。擾流板升起、煞車與反推力協助減速，再離開跑道。",
    aircraft: "全降落構型，接地後由飛行轉回地面", check: "穩定進場、跑道狀況、接地與減速",
    cockpit: "持續監控方向和速度；若條件不符合標準，任何時候都可重飛。", passenger: "感到拉平、主輪接地、反推力聲與煞車減速。", link: "擾流板、反推力、輪煞車和方向控制共同完成落地。", x: 82, y: 58,
  },
  {
    english: "TAXI-IN & SHUTDOWN", title: "滑回登機門與停妥",
    description: "離開跑道後收回襟翼、完成落地後檢查，依地面管制滑向登機門。停妥、設置停留煞車、關閉發動機並接上地面設備。",
    aircraft: "低速滑行，最後關閉發動機並接上空橋", check: "滑行路線、停機位、發動機關閉與艙門安全",
    cockpit: "完成停機檢查，記錄技術狀況，為下一航段或交機做準備。", passenger: "安全帶燈熄滅後才可起身；艙門開啟，一趟航班才真正結束。", link: "飛機回到第一個階段的狀態，下一趟航班循環又將開始。", x: 96, y: 81,
  },
];

const phaseTabs = [...document.querySelectorAll(".phase-tab")];
const plane = document.querySelector("#moving-plane");
const progressFill = document.querySelector("#phase-progress-fill");
const previous = document.querySelector("#phase-previous");
const nextPhase = document.querySelector("#phase-next");
let currentPhase = 0;

function showPhase(index) {
  currentPhase = Math.max(0, Math.min(phases.length - 1, index));
  const phase = phases[currentPhase];
  phaseTabs.forEach((button) => button.classList.toggle("is-active", Number(button.dataset.phase) === currentPhase));
  document.querySelector("#phase-number").textContent = `PHASE ${String(currentPhase + 1).padStart(2, "0")} / ${phases.length}`;
  document.querySelector("#phase-english").textContent = phase.english;
  document.querySelector("#phase-title").textContent = phase.title;
  document.querySelector("#phase-description").textContent = phase.description;
  document.querySelector("#aircraft-state").textContent = phase.aircraft;
  document.querySelector("#phase-check").textContent = phase.check;
  document.querySelector("#cockpit-view").textContent = phase.cockpit;
  document.querySelector("#passenger-view").textContent = phase.passenger;
  document.querySelector("#lesson-link").textContent = phase.link;
  plane.style.setProperty("--x", `${phase.x}%`);
  plane.style.setProperty("--y", `${phase.y}%`);
  plane.classList.toggle("is-airborne", currentPhase >= 4 && currentPhase <= 8);
  progressFill.style.width = `${(currentPhase / (phases.length - 1)) * 100}%`;
  previous.disabled = currentPhase === 0;
  nextPhase.disabled = currentPhase === phases.length - 1;
}

phaseTabs.forEach((button) => button.addEventListener("click", () => showPhase(Number(button.dataset.phase))));
previous.addEventListener("click", () => showPhase(currentPhase - 1));
nextPhase.addEventListener("click", () => showPhase(currentPhase + 1));

const scenarios = {
  normal: { status: "照計畫繼續", title: "條件正常，仍然持續監控", text: "即使一切正常，機組仍會在每個階段重新檢查天氣、燃油、飛機狀態和下一步計畫。", action: "可能行動：繼續、確認、交叉檢查" },
  storm: { status: "修改原定計畫", title: "繞飛、等待或改變高度", text: "機組會使用氣象雷達、航管資訊和公司支援判斷安全距離。雷雨不能只靠『穿過去』，必要時也可能返航或備降。", action: "可能行動：繞飛、等待、改高度、備降" },
  runway: { status: "暫停下一階段", title: "跑道不可用，就不能硬照時間起飛或落地", text: "出發時可能在登機門或滑行道等待；進場時可能等待、改用另一跑道或轉往備降機場，同時持續計算剩餘燃油。", action: "可能行動：等待、換跑道、重飛、備降" },
  technical: { status: "先處理警告", title: "確認問題之前不急著離地", text: "機組依檢查單判斷訊息是否可排除、是否需要維修，或飛機是否仍符合放行條件。安全條件不滿足時就返回登機門。", action: "可能行動：執行檢查單、聯絡維修、返回登機門" },
};
const scenarioButtons = [...document.querySelectorAll("[data-scenario]")];
function showScenario(key) {
  const scenario = scenarios[key];
  scenarioButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.scenario === key));
  document.querySelector("#scenario-status").textContent = scenario.status;
  document.querySelector("#scenario-title").textContent = scenario.title;
  document.querySelector("#scenario-text").textContent = scenario.text;
  document.querySelector("#scenario-action").textContent = scenario.action;
}
scenarioButtons.forEach((button) => button.addEventListener("click", () => showScenario(button.dataset.scenario)));

const questions = [
  { question: "飛行計畫、油量和載重平衡主要在哪個階段完成確認？", options: ["航前準備", "巡航", "落地後"], answer: "航前準備", note: "正確。這些資料會影響飛機能否安全且合法地出發。" },
  { question: "起飛離地、建立正爬升後，通常會先處理哪項構型？", options: ["收起起落架", "打開艙門", "放出擾流板"], answer: "收起起落架", note: "正確。收起起落架能減少大量阻力。" },
  { question: "巡航階段飛行員是不是就沒有事情做？", options: ["是，自動駕駛全部負責", "不是，仍持續監控天氣、燃油、航路和系統", "只有客艙組員需要工作"], answer: "不是，仍持續監控天氣、燃油、航路和系統", note: "答對了。自動化減少持續手動操作，但不取代監控與決策。" },
  { question: "襟翼和起落架通常在哪個階段逐步放出？", options: ["下降與進場", "高空巡航", "停妥關車後"], answer: "下降與進場", note: "正確。飛機減速後逐步建立降落構型。" },
  { question: "最後進場不穩定或跑道不安全時，正確選擇是什麼？", options: ["勉強落地", "執行重飛", "關閉發動機"], answer: "執行重飛", note: "正確。重飛是正常且預先規劃的安全選項。" },
];
const quizProgress = document.querySelector("#challenge-progress");
const quizQuestion = document.querySelector("#challenge-question");
const quizOptions = document.querySelector("#challenge-options");
const quizFeedback = document.querySelector("#challenge-feedback");
const quizNext = document.querySelector("#challenge-next");
let currentQuestion = 0;
let score = 0;
function renderQuestion() {
  const item = questions[currentQuestion];
  quizProgress.textContent = `第 ${currentQuestion + 1} 題，共 ${questions.length} 題`;
  quizQuestion.textContent = item.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizOptions.replaceChildren();
  item.options.forEach((label) => {
    const button = document.createElement("button");
    button.className = "challenge-option";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => checkAnswer(button, label));
    quizOptions.append(button);
  });
}
function checkAnswer(selected, value) {
  const item = questions[currentQuestion];
  quizOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("is-correct");
  });
  if (value === item.answer) { score += 1; quizFeedback.textContent = item.note; }
  else { selected.classList.add("is-wrong"); quizFeedback.textContent = `正確答案是「${item.answer}」。`; }
  quizNext.hidden = false;
  quizNext.firstChild.textContent = currentQuestion === questions.length - 1 ? "查看成績 " : "下一題 ";
}
function showResult() {
  quizProgress.textContent = "挑戰完成";
  quizOptions.replaceChildren();
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizQuestion.innerHTML = `<div class="challenge-result">${score === questions.length ? "滿分！你已經能把一趟航班的主要階段串起來。" : `你答對 ${score} 題。再沿時間軸飛一次，很快就能完整掌握。`}</div>`;
}
quizNext.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < questions.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
showPhase(0);
showScenario("normal");
renderQuestion();
