const lesson19Modes = {
  winter: { theme: "winter", icon: "❄️", title: "冬天", text: "冬天常常比較冷，因為地面感受到的陽光比較不像夏天那麼強。", stat1Bar: "28%", stat1Text: "比較弱", stat2Bar: "20%", stat2Text: "比較冷", memory: "夏天通常比較熱，冬天通常比較冷，和太陽照射感和白天長短有關。" },
  mild: { theme: "spring", icon: "🍃", title: "春秋", text: "春天和秋天常常比較舒服，冷熱感通常比冬夏中間一點。", stat1Bar: "58%", stat1Text: "中間", stat2Bar: "56%", stat2Text: "比較舒服", memory: "春秋常常像冬天和夏天中間的感覺。" },
  summer: { theme: "summer", icon: "☀️", title: "夏天", text: "夏天常常比較熱，也比較容易覺得太陽很強、白天很長。", stat1Bar: "96%", stat1Text: "比較強", stat2Bar: "100%", stat2Text: "比較熱", memory: "夏天常常最容易覺得熱，也最容易流汗。" }
};
const lesson19Quiz = [
  { question: "哪個季節通常最容易覺得比較熱？", options: ["夏天", "冬天", "寒流"], answer: 0, explanation: "答對了。夏天通常最容易覺得熱。" },
  { question: "冬天和夏天差很多，最接近下面哪種說法？", options: ["太陽照射感和白天長短不同", "只有月亮大小不同", "和天氣完全無關"], answer: 0, explanation: "對。這一課先這樣理解就夠了。" },
  { question: "春秋最接近什麼感覺？", options: ["常常在冬天和夏天中間", "一定比冬天更冷", "一定比夏天更熱"], answer: 0, explanation: "沒錯。春秋常常像中間的感覺。" },
  { question: "夏天常常會有什麼生活感覺？", options: ["比較容易流汗", "比較想穿厚外套", "比較看不清楚路"], answer: 0, explanation: "答對了。夏天通常更容易流汗。" },
  { question: "第十九課最重要的重點是什麼？", options: ["冬夏冷熱和太陽照射感、白天長短有關", "冬天只是顏色比較藍", "夏天和冬天其實一樣"], answer: 0, explanation: "對。這就是本課的重點。" }
];

const lesson19Stage = document.getElementById("concept-stage");
const lesson19Icon = document.getElementById("stage-icon");
const lesson19Title = document.getElementById("stage-title");
const lesson19Text = document.getElementById("stage-text");
const lesson19Stat1Bar = document.getElementById("stat-1-bar");
const lesson19Stat1Text = document.getElementById("stat-1-text");
const lesson19Stat2Bar = document.getElementById("stat-2-bar");
const lesson19Stat2Text = document.getElementById("stat-2-text");
const lesson19Memory = document.getElementById("memory-text");

function applyLesson19(mode) {
  lesson19Stage.dataset.theme = mode.theme;
  lesson19Icon.textContent = mode.icon;
  lesson19Title.textContent = mode.title;
  lesson19Text.textContent = mode.text;
  lesson19Stat1Bar.style.width = mode.stat1Bar;
  lesson19Stat1Text.textContent = mode.stat1Text;
  lesson19Stat2Bar.style.width = mode.stat2Bar;
  lesson19Stat2Text.textContent = mode.stat2Text;
  lesson19Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({
  buttons: [...document.querySelectorAll(".mode-button")],
  modes: lesson19Modes,
  applyMode: applyLesson19
});
applyLesson19(lesson19Modes.winter);

WeatherLessonTools.setupQuiz({
  data: lesson19Quiz,
  progressEl: document.getElementById("quiz-progress"),
  questionEl: document.getElementById("quiz-question"),
  optionsEl: document.getElementById("quiz-options"),
  feedbackEl: document.getElementById("quiz-feedback"),
  nextEl: document.getElementById("quiz-next")
});
