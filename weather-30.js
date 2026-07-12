const lesson30Modes = {
  wind: { theme: "summer", icon: "💨", title: "強風", text: "如果風變得很強，先離開危險地方、找安全位置比較重要。", stat1Bar: "88%", stat1Text: "很高", stat2Bar: "100%", stat2Text: "先找安全", memory: "極端天氣來時，先看提醒、找安全地方、跟著大人安排做。" },
  storm: { theme: "cold", icon: "⛈️", title: "雷雨豪雨", text: "如果有雷雨或豪雨，最重要的是先進安全地方，不要待在危險外面。", stat1Bar: "96%", stat1Text: "很高", stat2Bar: "100%", stat2Text: "先進安全處", memory: "看到雷雨和豪雨時，先安全比先看清楚更重要。" },
  heat: { theme: "hot", icon: "🥵", title: "高溫", text: "如果天氣非常熱，也是一種危險，要記得喝水、休息和找陰涼。", stat1Bar: "82%", stat1Text: "也很要注意", stat2Bar: "90%", stat2Text: "補水休息", memory: "危險天氣不只有風雨，高溫也一樣要注意。" },
  core: { theme: "spring", icon: "🏠", title: "共同原則", text: "不管是哪一種危險天氣，先看提醒、找安全地方、跟著大人安排做，都是最重要的。", stat1Bar: "100%", stat1Text: "所有情況都適用", stat2Bar: "100%", stat2Text: "安全第一", memory: "極端天氣時，安全永遠比好奇更重要。" }
};
const lesson30Quiz = [
  { question: "遇到危險天氣時，第一個最重要的想法是什麼？", options: ["先保護自己", "先衝出去看", "先忽略它"], answer: 0, explanation: "答對了。遇到危險天氣時先保護自己最重要。" },
  { question: "強風、雷雨、豪雨、高溫有什麼共同點？", options: ["都需要先注意安全", "都可以不用管", "都一定有雪"], answer: 0, explanation: "對。這些情況都要先注意安全。" },
  { question: "雷雨來時比較好的做法是什麼？", options: ["先進安全地方", "站在外面看", "去空地跑步"], answer: 0, explanation: "沒錯。雷雨來時先進安全地方。" },
  { question: "高溫很多天時比較好的做法是什麼？", options: ["喝水、休息、找陰涼", "一直曬太陽", "不喝水"], answer: 0, explanation: "答對了。高溫時補水和休息很重要。" },
  { question: "第三十課最重要的重點是什麼？", options: ["危險天氣時先看提醒、找安全地方、跟著安排做", "危險天氣時先去外面看", "只要看一眼就好"], answer: 0, explanation: "對。這就是天氣主題最後的收尾重點。" }
];

const lesson30Stage = document.getElementById("concept-stage");
const lesson30Icon = document.getElementById("stage-icon");
const lesson30Title = document.getElementById("stage-title");
const lesson30Text = document.getElementById("stage-text");
const lesson30Stat1Bar = document.getElementById("stat-1-bar");
const lesson30Stat1Text = document.getElementById("stat-1-text");
const lesson30Stat2Bar = document.getElementById("stat-2-bar");
const lesson30Stat2Text = document.getElementById("stat-2-text");
const lesson30Memory = document.getElementById("memory-text");

function applyLesson30(mode) {
  lesson30Stage.dataset.theme = mode.theme;
  lesson30Icon.textContent = mode.icon;
  lesson30Title.textContent = mode.title;
  lesson30Text.textContent = mode.text;
  lesson30Stat1Bar.style.width = mode.stat1Bar;
  lesson30Stat1Text.textContent = mode.stat1Text;
  lesson30Stat2Bar.style.width = mode.stat2Bar;
  lesson30Stat2Text.textContent = mode.stat2Text;
  lesson30Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({ buttons: [...document.querySelectorAll(".mode-button")], modes: lesson30Modes, applyMode: applyLesson30 });
applyLesson30(lesson30Modes.wind);
WeatherLessonTools.setupQuiz({ data: lesson30Quiz, progressEl: document.getElementById("quiz-progress"), questionEl: document.getElementById("quiz-question"), optionsEl: document.getElementById("quiz-options"), feedbackEl: document.getElementById("quiz-feedback"), nextEl: document.getElementById("quiz-next") });
