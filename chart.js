const regions = {
  identity: {
    number: "01 / 15",
    question: "這是哪一張圖？",
    title: "程序名稱與跑道",
    summary:
      "RCTP 是桃園國際機場的 ICAO 代碼；LOC 表示這是左右方向導引的 Localizer 進場；RWY 05L 表示使用磁向約 050 度的左跑道。",
    example: "RCTP · LOC · RWY 05L",
    tip: "LOC 程序不等於完整 ILS。這張圖主要提供左右方向導引，下降高度要依剖面圖與 DME 距離管理。",
    box: [0, 0, 100, 10],
  },
  communications: {
    number: "02 / 15",
    question: "要和誰通話？",
    title: "近場、塔台與 ATIS 頻率",
    summary:
      "最上方列出 TAIPEI APP、TAIPEI TWR 與 ATIS。APP 管理進場排序；TWR 管理跑道起降；ATIS 播放天氣、跑道與機場資訊。",
    example: "APP 125.1 / 128.5 / 125.6 · TWR 118.7 / 129.3 · ATIS 127.6",
    tip: "同一單位可能有多個頻率。實際使用哪一個，由航管指示或當期資料決定。",
    box: [0, 9.5, 80, 6],
  },
  reference: {
    number: "03 / 15",
    question: "高度與方向用什麼基準？",
    title: "標高、轉換高度與單位",
    summary:
      "Apt Elev 是機場標高 108 呎，跑道 05L 入口標高為 74 呎。Trans Alt 11,000 呎以上改用標準氣壓，下降時在 FL130 以下改回當地高度表設定。",
    example: "方向為磁向 · 距離為海里 NM · 高度為英呎 FT",
    tip: "圖上的高度不是公尺，距離也不是公里。讀圖前先確認單位，可避免最危險的誤讀。",
    box: [0, 15.5, 80, 7],
  },
  msa: {
    number: "04 / 15",
    question: "附近緊急時至少飛多高？",
    title: "MSA 與磁差",
    summary:
      "MSA ARP 25NM 顯示以機場參考點為中心 25 海里內，最低區域高度為 9000 呎。旁邊 VAR 5°W 是磁差資料。",
    example: "MSA ARP 25NM · 9000 FT",
    tip: "MSA 用於提供障礙物餘度，不是這條進場程序平常應飛的指定高度。",
    box: [80, 9.5, 20, 13],
  },
  speed: {
    number: "05 / 15",
    question: "進場途中要飛多快？",
    title: "Approach Speed Control",
    summary:
      "左上文字指定速度管理：距接地 15 航路海里通過 KARAN 時約 200-180 節，ANKLE 180 節，ITIA 5D 時 160-150 節；若無法遵守要預先通知航管。",
    example: "KARAN 200-180 KT · ANKLE 180 KT · ITIA 5D 160-150 KT",
    tip: "這裡的 track miles 是沿預定航路到接地點的距離，不一定等於直線距離。",
    box: [2, 22, 39, 21],
  },
  plan: {
    number: "06 / 15",
    question: "從上空看，要往哪裡飛？",
    title: "平面圖 Plan view",
    summary:
      "航圖中央像地圖一樣顯示航路、航向、距離、航點、等待航線、海岸線和機場位置。粗實線是主要進場航跡，虛線通常表示其他程序或重飛航段。",
    example: "由西南向東北，最後以 054° 對正 05L 跑道",
    tip: "平面圖告訴你『往哪裡飛』，下方剖面圖才告訴你『飛多高』。兩張必須一起讀。",
    box: [0, 22, 100, 49],
  },
  navaids: {
    number: "07 / 15",
    question: "飛機靠什麼訊號定位？",
    title: "導航台與進場訊號",
    summary:
      "方框列出 VOR/DME、NDB 與 ILS/DME。此程序的 ITIA ILS/DME 頻率為 111.1、Channel 48X；另外可看到 ANBU、HOULONG 等導航設施。",
    example: "ILS/DME ITIA · 111.1 · CH48X",
    tip: "三字代碼是導航台識別碼。飛行員要確認頻率與識別碼都正確，不能只看頻率。",
    box: [76, 22, 23.5, 20],
  },
  waypoints: {
    number: "08 / 15",
    question: "航路上的名字代表什麼？",
    title: "航點、定位點與 DME 距離",
    summary:
      "JAMMY、KARAN、ANKLE 是程序航點；FAF 和 MAPt 則是具有特定功能的定位點。ITIA 14.9D 代表距 ITIA DME 14.9 海里。",
    example: "KARAN ITIA 14.9D · ANKLE ITIA 10.9D · FAF ITIA 4.2D",
    tip: "名字幫助通話與記憶；真正精確的位置常由座標、DME 距離或航電資料定義。",
    box: [27, 37, 58, 34],
  },
  airspace: {
    number: "09 / 15",
    question: "途中有不能隨便進入的區域嗎？",
    title: "限制區 RCR22",
    summary:
      "紅色斜線區為 RCR22，標示範圍從地面 SFC 到海拔 2000 呎。程序航線與限制區很接近，因此航圖特別把它畫出來。",
    example: "RCR22 · SFC - 2000 FT AMSL",
    tip: "紅色區塊不是天氣，也不是山。它代表受限制空域，使用條件要查相關 AIP 規定。",
    box: [31, 50, 18, 11],
  },
  scale: {
    number: "10 / 15",
    question: "圖上的距離有多遠？",
    title: "公里與海里比例尺",
    summary:
      "右下比例尺同時提供 KM 與 NM。航空主要使用海里；1 NM 約等於 1.852 公里。",
    example: "上排 KM · 下排 NM",
    tip: "航圖為程序示意，不能只用螢幕尺量距離。優先讀標註的 DME 或航段距離。",
    box: [70, 64, 29, 7],
  },
  advisory: {
    number: "11 / 15",
    question: "離 ITIA 多遠時，大約應該多高？",
    title: "DME 距離建議高度",
    summary:
      "平面圖下方的小表提供下降檢查：距 ITIA 4、3、2 DME 時，建議高度分別約為 1350、1030、710 呎。",
    example: "4 DME / 1350 FT · 3 DME / 1030 FT · 2 DME / 710 FT",
    tip: "ADVISORY ALT 是協助監控穩定下降的參考，不取代程序中必須遵守的最低高度。",
    box: [0, 71, 100, 5],
  },
  profile: {
    number: "12 / 15",
    question: "飛機應該怎麼下降？",
    title: "垂直剖面 Profile view",
    summary:
      "下方側視圖把高度與距離串起來：KARAN 4000 呎、ANKLE 2500 呎、FAF 前後進入最後下降，之後不能低於圖示最低高度直到 MAPt。",
    example: "KARAN 4000 → ANKLE 2500 → FAF 1400 → MAPt",
    tip: "平面圖與剖面圖共用同一批航點。讀到一個航點時，要同時確認方向、距離和高度。",
    box: [0, 76, 68, 11],
  },
  missed: {
    number: "13 / 15",
    question: "看不到跑道時怎麼辦？",
    title: "Missed Approach 重飛程序",
    summary:
      "若到 MAPt 仍不能安全落地，保持航向 054 度爬升；通過 800 呎後左轉直飛 SEDUM，爬升並保持 3000 呎等待。",
    example: "HDG 054 · leaving 800 turn left · SEDUM · maintain 3000",
    tip: "星號特別提醒：在 MAPt 之前不得轉彎。重飛是預先設計的安全程序，不是臨時逃生路線。",
    box: [68, 76, 32, 11],
  },
  minima: {
    number: "14 / 15",
    question: "最低可以下降到哪裡？",
    title: "最低下降與能見度標準",
    summary:
      "MINIMA 表依 A、B、C、D 航機類別列出 OCA、能見度與 OCH。直線進場常見 550 呎，所需能見度依類別與進場燈狀態而不同。",
    example: "STRAIGHT IN · 550 FT · VIS / RVR 依類別查表",
    tip: "不能只記一個 550。必須先找自己的航機類別、進場方式，以及進場燈是否可用。",
    box: [0, 87, 71, 13],
  },
  notes: {
    number: "15 / 15",
    question: "還有哪些限制條件？",
    title: "附註、監視需求與 DME 要求",
    summary:
      "右下附註指出部分方向禁止盤旋進場、JAMMY 到 KARAN 與重飛航段需要 ATS 監視，並明確標示 DME REQUIRED。",
    example: "DME REQUIRED · ATS SURVEILLANCE REQUIRED",
    tip: "附註看似在角落，卻常包含程序能否執行的必要條件。實際簡報時不能跳過。",
    box: [71, 87, 29, 13],
  },
};

const regionControls = [...document.querySelectorAll("[data-region]")];
const highlight = document.querySelector("#region-highlight");
const regionNumber = document.querySelector("#region-number");
const regionQuestion = document.querySelector("#region-question");
const regionTitle = document.querySelector("#region-title");
const regionSummary = document.querySelector("#region-summary");
const regionExample = document.querySelector("#region-example");
const regionTip = document.querySelector("#region-tip");

function showRegion(key) {
  const region = regions[key];
  if (!region) return;

  regionControls.forEach((control) => {
    const active = control.dataset.region === key;
    control.classList.toggle("is-active", active);
    control.setAttribute("aria-pressed", active ? "true" : "false");
  });

  const [x, y, width, height] = region.box;
  highlight.style.setProperty("--x", `${x}%`);
  highlight.style.setProperty("--y", `${y}%`);
  highlight.style.setProperty("--w", `${width}%`);
  highlight.style.setProperty("--h", `${height}%`);
  regionNumber.textContent = region.number;
  regionQuestion.textContent = region.question;
  regionTitle.textContent = region.title;
  regionSummary.textContent = region.summary;
  regionExample.textContent = region.example;
  regionTip.textContent = region.tip;
}

regionControls.forEach((control) => {
  control.addEventListener("click", () => showRegion(control.dataset.region));
});

let zoom = 1;
const canvas = document.querySelector("#chart-canvas");
const zoomLabel = document.querySelector("#zoom-label");

function setZoom(value) {
  zoom = Math.min(1.75, Math.max(0.75, value));
  canvas.style.width = `${zoom * 100}%`;
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
}

document.querySelector("#zoom-in").addEventListener("click", () => setZoom(zoom + 0.25));
document.querySelector("#zoom-out").addEventListener("click", () => setZoom(zoom - 0.25));
document.querySelector("#zoom-reset").addEventListener("click", () => setZoom(1));

const routeSteps = [
  {
    name: "JAMMY · 起始進場定位點",
    instruction: "JAMMY 是其中一個 IAF。飛機可在 4000 呎加入程序，接著沿約 097 度航向飛行 8.7 海里前往 KARAN。",
    altitude: "目標：4000 FT",
    position: [7, 73],
  },
  {
    name: "KARAN · 匯入最後進場航線",
    instruction: "KARAN 位於 ITIA 14.9 DME。從這裡沿 054 度最後進場航向前進，速度約控制在 200-180 節。",
    altitude: "保持：4000 FT",
    position: [30, 56],
  },
  {
    name: "ANKLE · 中間進場定位點",
    instruction: "ANKLE 是 IF，距 ITIA 10.9 DME。飛機已經對正跑道方向，通過高度為 2500 呎，速度約 180 節。",
    altitude: "通過：2500 FT",
    position: [52, 44],
  },
  {
    name: "FAF · 最後進場定位點",
    instruction: "ITIA 4.2 DME 是 FAF。通過後進入最後下降，持續追蹤 Localizer 並用 DME 與高度交叉檢查。",
    altitude: "通過附近：約 1400 FT",
    position: [74, 29],
  },
  {
    name: "MAPt · 誤失進場點",
    instruction: "ITIA 0.2 DME 是 MAPt。若已取得足夠目視參考即可繼續落地；否則立刻執行重飛程序。",
    altitude: "決定：落地或重飛",
    position: [89, 11],
  },
  {
    name: "SEDUM · 重飛等待點",
    instruction: "保持航向 054 度爬升，離地高度通過 800 呎後左轉直飛 SEDUM，爬升至 3000 呎等待。",
    altitude: "爬升並保持：3000 FT",
    position: [82, 45],
  },
];

const routeButtons = [...document.querySelectorAll(".route-button")];
const routePlane = document.querySelector("#route-plane");
const routeStep = document.querySelector("#route-step");
const routeName = document.querySelector("#route-name");
const routeInstruction = document.querySelector("#route-instruction");
const routeAltitude = document.querySelector("#route-altitude");

function showRouteStep(index) {
  const step = routeSteps[index];
  routeButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.step) === index);
  });
  routePlane.style.setProperty("--x", `${step.position[0]}%`);
  routePlane.style.setProperty("--y", `${step.position[1]}%`);
  routeStep.textContent = `步驟 ${index + 1} / ${routeSteps.length}`;
  routeName.textContent = step.name;
  routeInstruction.textContent = step.instruction;
  routeAltitude.textContent = step.altitude;
}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => showRouteStep(Number(button.dataset.step)));
});

const questions = [
  {
    question: "想知道要使用哪個塔台頻率，應該查看哪一區？",
    options: ["通訊頻率", "最低標準", "比例尺"],
    answer: "通訊頻率",
    note: "正確！塔台、近場和 ATIS 都在航圖最上方。",
  },
  {
    question: "想知道看不到跑道時要往哪裡飛，應該查看哪一區？",
    options: ["速度限制", "重飛程序", "MSA"],
    answer: "重飛程序",
    note: "答對了！Missed Approach 會寫出航向、轉彎時機、高度與等待點。",
  },
  {
    question: "想確認距 ITIA 3 DME 時大約應該多高，應該查看哪一區？",
    options: ["建議高度", "程序名稱", "限制區域"],
    answer: "建議高度",
    note: "正確！小表顯示 3 DME 的建議高度約為 1030 呎。",
  },
  {
    question: "想知道航機類別所需能見度，應該查看哪一區？",
    options: ["導航台", "最低標準", "平面圖"],
    answer: "最低標準",
    note: "答對了！MINIMA 表要依航機類別和燈光狀態閱讀。",
  },
  {
    question: "想知道航路方向與各航點位置，應該先查看哪一區？",
    options: ["平面圖", "垂直剖面", "附註"],
    answer: "平面圖",
    note: "正確！平面圖回答往哪裡飛，剖面圖再回答飛多高。",
  },
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
  question.innerHTML = `<div class="challenge-result">${
    score === questions.length
      ? "滿分！你已經知道該去航圖的哪一區找答案。"
      : `你答對 ${score} 題。再走一次 15 個區塊，航圖就會更有秩序。`
  }</div>`;
}

next.addEventListener("click", () => {
  current += 1;
  if (current < questions.length) renderQuestion();
  else showResult();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
showRegion("identity");
showRouteStep(0);
renderQuestion();
