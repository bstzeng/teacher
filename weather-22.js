const lesson22Modes = {
  normal: { theme: "summer", icon: "☀️", title: "普通熱天", text: "夏天本來就可能熱，但不一定會像熱浪那樣持續很多天都很熱。", stat1Bar: "78%", stat1Text: "很熱", stat2Bar: "56%", stat2Text: "記得喝水", memory: "熱浪常常是很熱又持續很多天，所以更要補水和休息。" },
  heatwave: { theme: "hot", icon: "🥵", title: "熱浪來了", text: "熱浪時不只很熱，還常常會連很多天都維持高溫，身體更容易覺得累。", stat1Bar: "100%", stat1Text: "超級熱", stat2Bar: "100%", stat2Text: "要很注意", memory: "熱浪不是只熱一下，而是熱很多天。" },
  protect: { theme: "summer", icon: "🥤", title: "補水休息", text: "熱很多天時，要多喝水、多休息，也不要在最熱的時間一直待在外面。", stat1Bar: "92%", stat1Text: "要補水", stat2Bar: "88%", stat2Text: "要找陰涼", memory: "熱浪來時，補水、休息和找陰涼處最重要。" }
};
const lesson22Quiz = [
  { question: "熱浪最接近下面哪種說法？", options: ["很熱又持續很多天", "只有下一點雨", "只有晚上才熱"], answer: 0, explanation: "答對了。熱浪通常是很熱又持續很多天。" },
  { question: "熱浪來時最重要的事之一是什麼？", options: ["多喝水", "多穿外套", "少休息"], answer: 0, explanation: "對。熱浪來時多喝水很重要。" },
  { question: "熱浪和普通熱天最大差別之一是什麼？", options: ["熱浪常常持續很多天", "熱浪比較冷", "完全沒有差別"], answer: 0, explanation: "沒錯。持續很多天是很重要的差別。" },
  { question: "熱浪時比較好的做法是什麼？", options: ["找陰涼處、休息", "正中午一直曬太陽", "故意不喝水"], answer: 0, explanation: "答對了。找陰涼處和休息都很重要。" },
  { question: "第二十二課最重要的重點是什麼？", options: ["熱浪常很熱又持續很多天，要補水休息", "熱浪只是普通夏天", "熱浪和安全沒有關係"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson22Stage = document.getElementById("concept-stage");
const lesson22Icon = document.getElementById("stage-icon");
const lesson22Title = document.getElementById("stage-title");
const lesson22Text = document.getElementById("stage-text");
const lesson22Stat1Bar = document.getElementById("stat-1-bar");
const lesson22Stat1Text = document.getElementById("stat-1-text");
const lesson22Stat2Bar = document.getElementById("stat-2-bar");
const lesson22Stat2Text = document.getElementById("stat-2-text");
const lesson22Memory = document.getElementById("memory-text");

function applyLesson22(mode) {
  lesson22Stage.dataset.theme = mode.theme;
  lesson22Icon.textContent = mode.icon;
  lesson22Title.textContent = mode.title;
  lesson22Text.textContent = mode.text;
  lesson22Stat1Bar.style.width = mode.stat1Bar;
  lesson22Stat1Text.textContent = mode.stat1Text;
  lesson22Stat2Bar.style.width = mode.stat2Bar;
  lesson22Stat2Text.textContent = mode.stat2Text;
  lesson22Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({
  buttons: [...document.querySelectorAll(".mode-button")],
  modes: lesson22Modes,
  applyMode: applyLesson22
});
applyLesson22(lesson22Modes.normal);

WeatherLessonTools.setupQuiz({
  data: lesson22Quiz,
  progressEl: document.getElementById("quiz-progress"),
  questionEl: document.getElementById("quiz-question"),
  optionsEl: document.getElementById("quiz-options"),
  feedbackEl: document.getElementById("quiz-feedback"),
  nextEl: document.getElementById("quiz-next")
});
