const lesson23Modes = {
  cloud: { theme: "snow", icon: "☁️", title: "很冷的雲", text: "如果雲裡很冷，裡面的水就更有機會變成冰晶。", stat1Bar: "96%", stat1Text: "很冷", stat2Bar: "28%", stat2Text: "還在形成", memory: "下雪常常需要很冷的雲和很冷的空氣一起幫忙。" },
  crystal: { theme: "snow", icon: "❄️", title: "冰晶出現", text: "冰晶慢慢長出來時，就離雪更近一步了。", stat1Bar: "94%", stat1Text: "還是很冷", stat2Bar: "66%", stat2Text: "開始像雪", memory: "雪常常不是直接變出來，而是先有冰晶。" },
  snow: { theme: "winter", icon: "🌨️", title: "雪花掉下來", text: "冰晶聚在一起，最後從雲裡掉下來，我們就看到雪了。", stat1Bar: "90%", stat1Text: "夠冷", stat2Bar: "100%", stat2Text: "看得到雪", memory: "冰晶掉下來變成你看得到的雪花。" }
};
const lesson23Quiz = [
  { question: "下雪最重要的條件之一是什麼？", options: ["要夠冷", "一定很熱", "一定有彩虹"], answer: 0, explanation: "答對了。下雪最重要的條件之一就是要夠冷。" },
  { question: "雪最接近下面哪種說法？", options: ["和冰晶很有關係", "只是白色的雨", "和雲沒有關係"], answer: 0, explanation: "對。雪和冰晶很有關係。" },
  { question: "雪和雨的差別可以先怎麼記？", options: ["雪比較像冰晶，雨是一滴一滴的水", "它們完全一樣", "雨比較像石頭"], answer: 0, explanation: "沒錯。這樣記最容易懂。" },
  { question: "冰晶最後怎麼變成你看得到的雪？", options: ["聚在一起掉下來", "飛到太陽上", "變成風"], answer: 0, explanation: "答對了。冰晶聚在一起掉下來，我們就看到雪。" },
  { question: "第二十三課最重要的重點是什麼？", options: ["下雪常和很冷的雲、冰晶有關", "雪和冷沒有關係", "雪只會在水裡出現"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson23Stage = document.getElementById("concept-stage");
const lesson23Icon = document.getElementById("stage-icon");
const lesson23Title = document.getElementById("stage-title");
const lesson23Text = document.getElementById("stage-text");
const lesson23Stat1Bar = document.getElementById("stat-1-bar");
const lesson23Stat1Text = document.getElementById("stat-1-text");
const lesson23Stat2Bar = document.getElementById("stat-2-bar");
const lesson23Stat2Text = document.getElementById("stat-2-text");
const lesson23Memory = document.getElementById("memory-text");

function applyLesson23(mode) {
  lesson23Stage.dataset.theme = mode.theme;
  lesson23Icon.textContent = mode.icon;
  lesson23Title.textContent = mode.title;
  lesson23Text.textContent = mode.text;
  lesson23Stat1Bar.style.width = mode.stat1Bar;
  lesson23Stat1Text.textContent = mode.stat1Text;
  lesson23Stat2Bar.style.width = mode.stat2Bar;
  lesson23Stat2Text.textContent = mode.stat2Text;
  lesson23Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({
  buttons: [...document.querySelectorAll(".mode-button")],
  modes: lesson23Modes,
  applyMode: applyLesson23
});
applyLesson23(lesson23Modes.cloud);

WeatherLessonTools.setupQuiz({
  data: lesson23Quiz,
  progressEl: document.getElementById("quiz-progress"),
  questionEl: document.getElementById("quiz-question"),
  optionsEl: document.getElementById("quiz-options"),
  feedbackEl: document.getElementById("quiz-feedback"),
  nextEl: document.getElementById("quiz-next")
});
