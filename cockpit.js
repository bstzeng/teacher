const instruments = {
  pfd: {
    number: "01",
    short: "PFD",
    name: "PFD・主要飛行顯示器",
    zone: "看飛行",
    description:
      "飛行員最常看的畫面。它把姿態、速度、高度、升降率與飛行模式集中在一起。",
    tip: "找找看藍色天空與棕色地面交界的「人工地平線」。",
    photoX: "23%",
    photoY: "44%",
    photoZoom: "235%",
    howToRead:
      "先看中間藍天和棕地的交界線有沒有平平的，再看左右兩邊的速度和高度有沒有在你想要的位置。",
  },
  nd: {
    number: "02",
    short: "ND",
    name: "ND・導航顯示器",
    zone: "看飛行",
    description:
      "像飛機專用的導航地圖，顯示航路、方向、距離、氣象雷達與附近資訊。",
    tip: "畫面中央的飛機符號，會沿著規劃好的航線前進。",
    photoX: "35%",
    photoY: "44%",
    photoZoom: "235%",
    howToRead:
      "先找中間的小飛機，再看前面畫好的路線。重點不是每個符號都懂，而是先知道飛機正朝哪裡走。",
  },
  fcu: {
    number: "03",
    short: "FCU",
    name: "FCU・飛行控制面板",
    zone: "管飛行",
    description:
      "飛行員在這裡設定速度、航向、高度與升降方式，也能接通自動駕駛。",
    tip: "它是一整條橫向面板，位在主要螢幕正上方。",
    photoX: "50%",
    photoY: "28%",
    photoZoom: "220%",
    howToRead:
      "把它想成飛機的『目標設定列』。先看速度、高度和航向數字，這些代表飛行員想讓飛機做到什麼。",
  },
  ecam: {
    number: "04",
    short: "ECAM",
    name: "ECAM・飛機系統顯示",
    zone: "顧飛機",
    description:
      "監看發動機、燃油、液壓、電力與其他飛機系統；異常時也會提示處理步驟。",
    tip: "兩個中央螢幕是整架飛機的「健康檢查中心」。",
    photoX: "56%",
    photoY: "46%",
    photoZoom: "240%",
    howToRead:
      "平常先看有沒有特別跳出的警告或不正常顏色。它最像飛機自己的健康報告畫面。",
  },
  gear: {
    number: "05",
    short: "起落架",
    name: "起落架控制桿",
    zone: "顧飛機",
    description:
      "起飛後收起輪子、降落前放下輪子。旁邊的燈號會顯示起落架是否鎖定。",
    tip: "控制桿的握把通常做成小輪子的形狀，讓人不容易弄錯。",
    photoX: "70%",
    photoY: "48%",
    photoZoom: "255%",
    howToRead:
      "先記住它只有兩件大事：收輪子和放輪子。看燈號時，重點是確認起落架到底有沒有到位。",
  },
  sidestick: {
    number: "06",
    short: "側桿",
    name: "Sidestick・側桿",
    zone: "管飛行",
    description:
      "Airbus 不在正前方放傳統駕駛盤，而是在左右側邊用小型控制桿操縱俯仰與滾轉。",
    tip: "機長的側桿在左窗旁，副駕駛的則在右窗旁。",
    photoX: "12%",
    photoY: "61%",
    photoZoom: "245%",
    howToRead:
      "它不是拿來看的，是拿來控制方向的。往前後會讓機頭低高，往左右會讓機翼傾斜。",
  },
  thrust: {
    number: "07",
    short: "推力",
    name: "Thrust Levers・推力控制桿",
    zone: "管飛行",
    description:
      "控制發動機推力。A320 的推力桿有固定檔位，自動推力通常不會讓桿子自己前後移動。",
    tip: "兩支黑色桿分別對應左右兩具發動機。",
    photoX: "52%",
    photoY: "80%",
    photoZoom: "220%",
    howToRead:
      "把它想成飛機的『力氣大小桿』。往前通常代表更有推力，往後代表減少推力。",
  },
  mcdu: {
    number: "08",
    short: "MCDU",
    name: "MCDU・多功能控制顯示組件",
    zone: "管飛行",
    description:
      "用鍵盤與小螢幕輸入航路、性能與飛行計畫，是飛行管理系統的重要操作介面。",
    tip: "它很像一台有許多字母鍵的航空專用計算機。",
    photoX: "37%",
    photoY: "72%",
    photoZoom: "230%",
    howToRead:
      "先把它當成飛機的計畫輸入機。飛行員會在這裡把要飛去哪、怎麼飛，慢慢輸進去。",
  },
  overhead: {
    number: "09",
    short: "頭頂面板",
    name: "Overhead Panel・頭頂控制面板",
    zone: "顧飛機",
    description:
      "管理電力、燃油、液壓、空調、防冰、燈光等系統。許多開關在正常飛行中不需頻繁操作。",
    tip: "Airbus 常用「黑暗駕駛艙」概念：正常時盡量不亮警告燈。",
    photoX: "51%",
    photoY: "9%",
    photoZoom: "205%",
    howToRead:
      "不用一個開關一個開關背下來。先記住它是很多飛機系統的總開關區，正常時反而不會亂亮。",
  },
};

const hotspots = [...document.querySelectorAll(".hotspot")];
const tabsContainer = document.querySelector("#instrument-tabs");
const indexElement = document.querySelector("#instrument-index");
const zoneElement = document.querySelector("#instrument-zone");
const nameElement = document.querySelector("#instrument-name");
const descriptionElement = document.querySelector("#instrument-description");
const tipElement = document.querySelector("#instrument-tip");
const yearElement = document.querySelector("#current-year");
const detailGrid = document.querySelector("#detail-grid");

yearElement.textContent = new Date().getFullYear();

Object.entries(instruments).forEach(([key, item]) => {
  const button = document.createElement("button");
  button.className = `instrument-tab${key === "pfd" ? " is-active" : ""}`;
  button.type = "button";
  button.dataset.part = key;
  button.textContent = `${item.number} ${item.short}`;
  button.addEventListener("click", () => selectInstrument(key));
  tabsContainer.append(button);

  const card = document.createElement("article");
  card.className = "detail-card";
  card.innerHTML = `
    <div class="detail-card-top">
      <span class="detail-number">${item.number} / 09</span>
      <span class="detail-zone-tag">${item.zone}</span>
    </div>
    <div class="detail-visual">
      <div
        class="detail-photo"
        aria-hidden="true"
        style="--photo-x:${item.photoX}; --photo-y:${item.photoY}; --photo-zoom:${item.photoZoom};"
      ></div>
      <div class="detail-photo-focus" aria-hidden="true"></div>
    </div>
    <div class="detail-copy">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="detail-note">
        <span>最簡單怎麼看</span>
        <p>${item.howToRead}</p>
      </div>
    </div>
  `;
  detailGrid.append(card);
});

function selectInstrument(key) {
  const item = instruments[key];
  if (!item) return;

  hotspots.forEach((hotspot) => {
    hotspot.classList.toggle("is-active", hotspot.dataset.part === key);
  });
  document.querySelectorAll(".instrument-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.part === key);
  });

  indexElement.textContent = `${item.number} / 09`;
  zoneElement.textContent = item.zone;
  nameElement.textContent = item.name;
  descriptionElement.textContent = item.description;
  tipElement.textContent = item.tip;
}

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    selectInstrument(hotspot.dataset.part);
    handleMissionChoice(hotspot.dataset.part);
  });
});

const missionKeys = ["pfd", "fcu", "gear", "sidestick", "thrust", "mcdu", "overhead"];
const startButton = document.querySelector("#start-mission");
const missionStatus = document.querySelector("#mission-status");
const missionPrompt = document.querySelector("#mission-prompt");
const missionFeedback = document.querySelector("#mission-feedback");
const progressBars = [...document.querySelectorAll(".mission-progress span")];
const mapMissionBanner = document.querySelector("#map-mission-banner");
const mapMissionText = document.querySelector("#map-mission-text");
let missionSequence = [];
let missionStep = -1;

function shuffledMission() {
  return [...missionKeys].sort(() => Math.random() - 0.5).slice(0, 3);
}

function setMissionTarget() {
  hotspots.forEach((hotspot) => hotspot.classList.remove("is-target"));

  if (missionStep >= missionSequence.length) {
    missionStatus.textContent = "任務完成 · 3 / 3";
    missionPrompt.textContent = "漂亮！你已經能在駕駛艙裡找到關鍵設備。";
    missionFeedback.textContent = "下一次看到駕駛艙照片，你會發現它不再像一片按鈕森林。";
    mapMissionText.textContent = "任務完成！你找到三個指定設備。";
    startButton.firstChild.textContent = "再玩一次 ";
    missionStep = -1;
    return;
  }

  const target = instruments[missionSequence[missionStep]];
  missionStatus.textContent = `任務進行中 · ${missionStep + 1} / 3`;
  missionPrompt.textContent = `請在照片上找到：${target.name}`;
  missionFeedback.textContent = `提示：它屬於「${target.zone}」區域。`;
  mapMissionText.textContent = `請在照片上找到：${target.name}`;
}

function startMission() {
  missionSequence = shuffledMission();
  missionStep = 0;
  progressBars.forEach((bar) => bar.classList.remove("is-done"));
  startButton.firstChild.textContent = "重新開始 ";
  mapMissionBanner.hidden = false;
  setMissionTarget();
  document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleMissionChoice(key) {
  if (missionStep < 0) return;

  if (key === missionSequence[missionStep]) {
    progressBars[missionStep].classList.add("is-done");
    missionFeedback.textContent = "找到了！準備下一個。";
    missionStep += 1;
    window.setTimeout(setMissionTarget, 550);
  } else {
    missionFeedback.textContent = "不是這個，再看看照片上的其他編號。";
  }
}

startButton.addEventListener("click", startMission);
