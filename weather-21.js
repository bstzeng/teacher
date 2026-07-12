const lesson21Modes = {
  normal: { theme: "winter", icon: "🧥", title: "一般冷天", text: "冬天本來就可能冷一點，但還不一定像寒流那麼明顯。", stat1Bar: "46%", stat1Text: "有點冷", stat2Bar: "52%", stat2Text: "帶外套", memory: "寒流常常是突然變得很冷，所以要更快做好保暖準備。" },
  coldwave: { theme: "cold", icon: "🥶", title: "寒流來了", text: "寒流來時，會讓天氣很快變得更冷，身體也會更明顯感覺到冷。", stat1Bar: "100%", stat1Text: "很冷", stat2Bar: "94%", stat2Text: "要加很多保暖", memory: "寒流不是只是冷一點，而是常常冷得很明顯。" },
  protect: { theme: "winter", icon: "🧣", title: "保暖準備", text: "寒流時先多穿一點、不要吹太久冷風，跟著大人提醒最重要。", stat1Bar: "86%", stat1Text: "要快準備", stat2Bar: "100%", stat2Text: "保暖很重要", memory: "寒流來了，最重要的是先讓自己暖和、安全。" }
};
const lesson21Quiz = [
  { question: "寒流最明顯的感覺是什麼？", options: ["突然變得很冷", "突然變很亮", "突然沒風"], answer: 0, explanation: "答對了。寒流最明顯的是突然變得很冷。" },
  { question: "寒流來時比較需要什麼？", options: ["保暖", "短袖", "去玩水"], answer: 0, explanation: "對。寒流來時最需要保暖。" },
  { question: "寒流和一般冷天有什麼差別？", options: ["寒流常常冷得更快、更明顯", "完全沒有差別", "寒流比較熱"], answer: 0, explanation: "沒錯。寒流常常冷得更快、更明顯。" },
  { question: "寒流來時比較好的做法是什麼？", options: ["多穿一點、跟著大人提醒", "故意穿更少", "站在冷風裡很久"], answer: 0, explanation: "答對了。先多穿一點比較重要。" },
  { question: "第二十一課最重要的重點是什麼？", options: ["寒流常是突然變很冷，要快保暖", "寒流只是普通涼", "寒流和冷沒有關係"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson21Stage = document.getElementById("concept-stage");
const lesson21Icon = document.getElementById("stage-icon");
const lesson21Title = document.getElementById("stage-title");
const lesson21Text = document.getElementById("stage-text");
const lesson21Stat1Bar = document.getElementById("stat-1-bar");
const lesson21Stat1Text = document.getElementById("stat-1-text");
const lesson21Stat2Bar = document.getElementById("stat-2-bar");
const lesson21Stat2Text = document.getElementById("stat-2-text");
const lesson21Memory = document.getElementById("memory-text");

function applyLesson21(mode) {
  lesson21Stage.dataset.theme = mode.theme;
  lesson21Icon.textContent = mode.icon;
  lesson21Title.textContent = mode.title;
  lesson21Text.textContent = mode.text;
  lesson21Stat1Bar.style.width = mode.stat1Bar;
  lesson21Stat1Text.textContent = mode.stat1Text;
  lesson21Stat2Bar.style.width = mode.stat2Bar;
  lesson21Stat2Text.textContent = mode.stat2Text;
  lesson21Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({
  buttons: [...document.querySelectorAll(".mode-button")],
  modes: lesson21Modes,
  applyMode: applyLesson21
});
applyLesson21(lesson21Modes.normal);

WeatherLessonTools.setupQuiz({
  data: lesson21Quiz,
  progressEl: document.getElementById("quiz-progress"),
  questionEl: document.getElementById("quiz-question"),
  optionsEl: document.getElementById("quiz-options"),
  feedbackEl: document.getElementById("quiz-feedback"),
  nextEl: document.getElementById("quiz-next")
});
