const lesson27Modes = {
  temp: { theme: "summer", icon: "🌡️", title: "溫度計", text: "溫度計最主要是看熱不熱、冷不冷。", stat1Bar: "100%", stat1Text: "溫度", stat2Bar: "76%", stat2Text: "熱不熱", memory: "溫度計看熱冷，雨量筒看雨，風向袋看風往哪裡吹。" },
  rain: { theme: "spring", icon: "🌧️", title: "雨量筒", text: "雨量筒最主要是看這場雨下了多少。", stat1Bar: "100%", stat1Text: "雨量", stat2Bar: "82%", stat2Text: "下多少雨", memory: "雨量筒不是看有沒有雨而已，也在看下了多少。" },
  wind: { theme: "spring", icon: "🎏", title: "風向袋", text: "風向袋最主要是看風大概往哪裡吹。", stat1Bar: "100%", stat1Text: "風向", stat2Bar: "74%", stat2Text: "風往哪吹", memory: "風向袋最容易讓人看到風正在往哪個方向吹。" }
};
const lesson27Quiz = [
  { question: "溫度計最主要在看什麼？", options: ["熱不熱、冷不冷", "下多少雨", "風往哪裡吹"], answer: 0, explanation: "答對了。溫度計最主要看熱冷。" },
  { question: "雨量筒最主要在看什麼？", options: ["這場雨下了多少", "今天有沒有太陽", "樹有沒有動"], answer: 0, explanation: "對。雨量筒最主要看雨量。" },
  { question: "風向袋最主要在看什麼？", options: ["風往哪裡吹", "今天幾度", "有沒有下雪"], answer: 0, explanation: "沒錯。風向袋最主要看風向。" },
  { question: "這些工具收來的資料最後常常用來做什麼？", options: ["幫忙做天氣預報", "只拿來裝飾", "讓雲變多"], answer: 0, explanation: "答對了。這些工具都會幫忙做預報。" },
  { question: "第二十七課最重要的重點是什麼？", options: ["每種工具都在看不同天氣資料", "所有工具都做同一件事", "工具和預報沒關係"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson27Stage = document.getElementById("concept-stage");
const lesson27Icon = document.getElementById("stage-icon");
const lesson27Title = document.getElementById("stage-title");
const lesson27Text = document.getElementById("stage-text");
const lesson27Stat1Bar = document.getElementById("stat-1-bar");
const lesson27Stat1Text = document.getElementById("stat-1-text");
const lesson27Stat2Bar = document.getElementById("stat-2-bar");
const lesson27Stat2Text = document.getElementById("stat-2-text");
const lesson27Memory = document.getElementById("memory-text");

function applyLesson27(mode) {
  lesson27Stage.dataset.theme = mode.theme;
  lesson27Icon.textContent = mode.icon;
  lesson27Title.textContent = mode.title;
  lesson27Text.textContent = mode.text;
  lesson27Stat1Bar.style.width = mode.stat1Bar;
  lesson27Stat1Text.textContent = mode.stat1Text;
  lesson27Stat2Bar.style.width = mode.stat2Bar;
  lesson27Stat2Text.textContent = mode.stat2Text;
  lesson27Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({ buttons: [...document.querySelectorAll(".mode-button")], modes: lesson27Modes, applyMode: applyLesson27 });
applyLesson27(lesson27Modes.temp);
WeatherLessonTools.setupQuiz({ data: lesson27Quiz, progressEl: document.getElementById("quiz-progress"), questionEl: document.getElementById("quiz-question"), optionsEl: document.getElementById("quiz-options"), feedbackEl: document.getElementById("quiz-feedback"), nextEl: document.getElementById("quiz-next") });
