const lesson25Modes = {
  collect: { theme: "spring", icon: "📡", title: "先收集資料", text: "氣象站、衛星和很多工具會先把天氣資料收集起來。", stat1Bar: "100%", stat1Text: "很多很多", stat2Bar: "20%", stat2Text: "才第一步", memory: "天氣預報不是猜，是先收資料、再一起看、最後才做出來。" },
  compare: { theme: "spring", icon: "🧠", title: "再一起看", text: "把不同地方、不同工具收來的資料放在一起看，才比較知道接下來會怎樣。", stat1Bar: "92%", stat1Text: "資料還很多", stat2Bar: "58%", stat2Text: "快變成預報", memory: "同一種資料不夠，常常要一起看很多種資料。" },
  forecast: { theme: "summer", icon: "🗺️", title: "做成預報", text: "最後才把整理好的結果做成圖卡、文字或手機上的預報。", stat1Bar: "82%", stat1Text: "已整理好", stat2Bar: "100%", stat2Text: "大家看得懂", memory: "你看到的預報圖卡，是很多資料整理之後的結果。" }
};
const lesson25Quiz = [
  { question: "天氣預報最接近下面哪種說法？", options: ["先收資料再做出來", "只靠猜", "只看一眼天空"], answer: 0, explanation: "答對了。預報不是只靠猜。" },
  { question: "做預報前，第一步最常是什麼？", options: ["先收很多資料", "先畫圖卡", "先下結論"], answer: 0, explanation: "對。第一步通常是先收資料。" },
  { question: "為什麼要把很多資料放在一起看？", options: ["比較知道接下來天氣可能怎樣", "因為好玩", "因為圖比較漂亮"], answer: 0, explanation: "沒錯。資料放在一起看才比較有用。" },
  { question: "最後大家在電視或手機上看到的是什麼？", options: ["整理好的預報", "原始衛星零件", "雲的味道"], answer: 0, explanation: "答對了。最後會變成大家看得懂的預報。" },
  { question: "第二十五課最重要的重點是什麼？", options: ["預報不是猜，是收資料後做出來", "預報完全靠運氣", "只要看太陽就夠了"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson25Stage = document.getElementById("concept-stage");
const lesson25Icon = document.getElementById("stage-icon");
const lesson25Title = document.getElementById("stage-title");
const lesson25Text = document.getElementById("stage-text");
const lesson25Stat1Bar = document.getElementById("stat-1-bar");
const lesson25Stat1Text = document.getElementById("stat-1-text");
const lesson25Stat2Bar = document.getElementById("stat-2-bar");
const lesson25Stat2Text = document.getElementById("stat-2-text");
const lesson25Memory = document.getElementById("memory-text");

function applyLesson25(mode) {
  lesson25Stage.dataset.theme = mode.theme;
  lesson25Icon.textContent = mode.icon;
  lesson25Title.textContent = mode.title;
  lesson25Text.textContent = mode.text;
  lesson25Stat1Bar.style.width = mode.stat1Bar;
  lesson25Stat1Text.textContent = mode.stat1Text;
  lesson25Stat2Bar.style.width = mode.stat2Bar;
  lesson25Stat2Text.textContent = mode.stat2Text;
  lesson25Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({ buttons: [...document.querySelectorAll(".mode-button")], modes: lesson25Modes, applyMode: applyLesson25 });
applyLesson25(lesson25Modes.collect);
WeatherLessonTools.setupQuiz({ data: lesson25Quiz, progressEl: document.getElementById("quiz-progress"), questionEl: document.getElementById("quiz-question"), optionsEl: document.getElementById("quiz-options"), feedbackEl: document.getElementById("quiz-feedback"), nextEl: document.getElementById("quiz-next") });
