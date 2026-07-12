const lesson20Modes = {
  spring: { theme: "spring", icon: "🌱", title: "春天", text: "春天常常比較溫和，也常常有新葉和舒服的感覺。", stat1Bar: "52%", stat1Text: "舒服", stat2Bar: "54%", stat2Text: "薄外套或長袖", memory: "四季可以先用冷熱感、穿什麼、外面看起來像什麼來記。" },
  summer: { theme: "summer", icon: "☀️", title: "夏天", text: "夏天常常最熱，也最容易流汗。", stat1Bar: "100%", stat1Text: "最熱", stat2Bar: "88%", stat2Text: "短袖比較多", memory: "夏天最常見的感覺，就是熱和容易流汗。" },
  autumn: { theme: "autumn", icon: "🍂", title: "秋天", text: "秋天常常慢慢變涼，也比較容易有乾爽的感覺。", stat1Bar: "46%", stat1Text: "涼一點", stat2Bar: "56%", stat2Text: "長袖慢慢變多", memory: "秋天常像夏天慢慢走向冬天的過程。" },
  winter: { theme: "winter", icon: "🧣", title: "冬天", text: "冬天常常最冷，也最常需要保暖。", stat1Bar: "20%", stat1Text: "最冷", stat2Bar: "92%", stat2Text: "外套很多", memory: "冬天常常最容易想到外套和保暖。" }
};
const lesson20Quiz = [
  { question: "哪個季節通常最容易流汗？", options: ["夏天", "冬天", "秋天"], answer: 0, explanation: "答對了。夏天通常最容易流汗。" },
  { question: "哪個季節常常最想多穿一點？", options: ["冬天", "夏天", "春天"], answer: 0, explanation: "對。冬天通常最容易想多穿一點。" },
  { question: "春天最接近下面哪種感覺？", options: ["比較溫和、舒服", "最熱", "最冷"], answer: 0, explanation: "沒錯。春天常常比較溫和。" },
  { question: "秋天常常像什麼？", options: ["夏天慢慢走向冬天的感覺", "一直最熱", "完全沒有變化"], answer: 0, explanation: "答對了。秋天常常有慢慢變涼的感覺。" },
  { question: "第二十課最重要的重點是什麼？", options: ["四季可以用冷熱、穿著和生活感覺來分辨", "四季只有名字不一樣", "四季每天都一樣"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson20Stage = document.getElementById("concept-stage");
const lesson20Icon = document.getElementById("stage-icon");
const lesson20Title = document.getElementById("stage-title");
const lesson20Text = document.getElementById("stage-text");
const lesson20Stat1Bar = document.getElementById("stat-1-bar");
const lesson20Stat1Text = document.getElementById("stat-1-text");
const lesson20Stat2Bar = document.getElementById("stat-2-bar");
const lesson20Stat2Text = document.getElementById("stat-2-text");
const lesson20Memory = document.getElementById("memory-text");

function applyLesson20(mode) {
  lesson20Stage.dataset.theme = mode.theme;
  lesson20Icon.textContent = mode.icon;
  lesson20Title.textContent = mode.title;
  lesson20Text.textContent = mode.text;
  lesson20Stat1Bar.style.width = mode.stat1Bar;
  lesson20Stat1Text.textContent = mode.stat1Text;
  lesson20Stat2Bar.style.width = mode.stat2Bar;
  lesson20Stat2Text.textContent = mode.stat2Text;
  lesson20Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({
  buttons: [...document.querySelectorAll(".mode-button")],
  modes: lesson20Modes,
  applyMode: applyLesson20
});
applyLesson20(lesson20Modes.spring);

WeatherLessonTools.setupQuiz({
  data: lesson20Quiz,
  progressEl: document.getElementById("quiz-progress"),
  questionEl: document.getElementById("quiz-question"),
  optionsEl: document.getElementById("quiz-options"),
  feedbackEl: document.getElementById("quiz-feedback"),
  nextEl: document.getElementById("quiz-next")
});
