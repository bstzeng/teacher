const lesson24Modes = {
  snow: { theme: "snow", icon: "❄️", title: "雪花", text: "雪比較像輕輕的雪花，看起來白白的、比較柔。", stat1Bar: "26%", stat1Text: "比較輕", stat2Bar: "18%", stat2Text: "不硬", memory: "冰雹比較像硬硬的小冰球，和雪花不一樣。" },
  hail: { theme: "hail", icon: "🧊", title: "冰雹", text: "冰雹比較像硬硬的小冰球，掉下來時感覺通常比雪更有力。", stat1Bar: "86%", stat1Text: "比較有感", stat2Bar: "100%", stat2Text: "很硬", memory: "冰雹和雪最大的差別，就是更像硬硬的小冰球。" },
  safe: { theme: "cold", icon: "🏠", title: "安全注意", text: "如果有冰雹，先找安全的地方躲起來比較重要，不要站在外面看。", stat1Bar: "100%", stat1Text: "要快找地方", stat2Bar: "94%", stat2Text: "安全最重要", memory: "看到冰雹時，先找安全地方，比好奇站在外面更重要。" }
};
const lesson24Quiz = [
  { question: "冰雹最接近下面哪種說法？", options: ["硬硬的小冰球", "白白的雪花", "暖暖的水珠"], answer: 0, explanation: "答對了。冰雹最像硬硬的小冰球。" },
  { question: "雪和冰雹最大的差別之一是什麼？", options: ["冰雹比較硬，雪比較輕", "它們完全一樣", "雪比較像石頭"], answer: 0, explanation: "對。冰雹通常比雪更硬、更有感。" },
  { question: "如果有冰雹，比較好的做法是什麼？", options: ["先找安全地方躲", "站在外面一直看", "跑去空地接冰雹"], answer: 0, explanation: "沒錯。先找安全地方最重要。" },
  { question: "冰雹是不是和雪一樣？", options: ["不是，它們感覺很不一樣", "是，完全一樣", "只有名字不同"], answer: 0, explanation: "答對了。冰雹和雪的感覺很不一樣。" },
  { question: "第二十四課最重要的重點是什麼？", options: ["冰雹像硬硬的小冰球，和雪不一樣", "冰雹就是雨滴", "冰雹很溫暖"], answer: 0, explanation: "對。這就是本課的重點。" }
];

const lesson24Stage = document.getElementById("concept-stage");
const lesson24Icon = document.getElementById("stage-icon");
const lesson24Title = document.getElementById("stage-title");
const lesson24Text = document.getElementById("stage-text");
const lesson24Stat1Bar = document.getElementById("stat-1-bar");
const lesson24Stat1Text = document.getElementById("stat-1-text");
const lesson24Stat2Bar = document.getElementById("stat-2-bar");
const lesson24Stat2Text = document.getElementById("stat-2-text");
const lesson24Memory = document.getElementById("memory-text");

function applyLesson24(mode) {
  lesson24Stage.dataset.theme = mode.theme;
  lesson24Icon.textContent = mode.icon;
  lesson24Title.textContent = mode.title;
  lesson24Text.textContent = mode.text;
  lesson24Stat1Bar.style.width = mode.stat1Bar;
  lesson24Stat1Text.textContent = mode.stat1Text;
  lesson24Stat2Bar.style.width = mode.stat2Bar;
  lesson24Stat2Text.textContent = mode.stat2Text;
  lesson24Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({
  buttons: [...document.querySelectorAll(".mode-button")],
  modes: lesson24Modes,
  applyMode: applyLesson24
});
applyLesson24(lesson24Modes.snow);

WeatherLessonTools.setupQuiz({
  data: lesson24Quiz,
  progressEl: document.getElementById("quiz-progress"),
  questionEl: document.getElementById("quiz-question"),
  optionsEl: document.getElementById("quiz-options"),
  feedbackEl: document.getElementById("quiz-feedback"),
  nextEl: document.getElementById("quiz-next")
});
