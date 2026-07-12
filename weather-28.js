const lesson28Modes = {
  sea: { theme: "spring", icon: "🌊", title: "海邊附近", text: "靠近海的地方，常常比較容易感覺到濕和有水氣。", stat1Bar: "88%", stat1Text: "比較濕", stat2Bar: "76%", stat2Text: "下雨感比較高", memory: "地方不同，本來就可能有不同的乾濕感覺和下雨機會。" },
  mountain: { theme: "spring", icon: "⛰️", title: "山區", text: "山區的天氣常常也會和別處不太一樣，雲和雨的感覺可能比較明顯。", stat1Bar: "72%", stat1Text: "常常有變化", stat2Bar: "82%", stat2Text: "雲雨感明顯", memory: "山會讓天氣感覺和別的地方不太一樣。" },
  dry: { theme: "autumn", icon: "🏜️", title: "比較乾的地方", text: "有些地方本來就比較乾，不是那麼常常下雨。", stat1Bar: "18%", stat1Text: "比較乾", stat2Bar: "24%", stat2Text: "下雨感較低", memory: "不是每個地方都一樣濕，有些地方本來就比較乾。" }
};
const lesson28Quiz = [
  { question: "是不是每個地方的乾濕感覺都一樣？", options: ["不是，本來就可能不同", "是，完全一樣", "只有海邊一樣"], answer: 0, explanation: "答對了。不同地方本來就可能不同。" },
  { question: "靠近海的地方常常比較容易有什麼感覺？", options: ["比較濕、有水氣", "一定很冷", "一定有雪"], answer: 0, explanation: "對。靠海的地方常常比較容易有濕的感覺。" },
  { question: "山區的天氣是不是也可能和別處不同？", options: ["是", "不是", "永遠都一樣"], answer: 0, explanation: "沒錯。山區天氣也常常和別處不同。" },
  { question: "比較乾的地方最接近下面哪種說法？", options: ["不是那麼常常下雨", "每天都下大雨", "一定都是海邊"], answer: 0, explanation: "答對了。比較乾的地方通常不會那麼常常下雨。" },
  { question: "第二十八課最重要的重點是什麼？", options: ["地方不同，乾濕和下雨機會也可能不同", "所有地方都一樣", "只有天氣預報不同"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson28Stage = document.getElementById("concept-stage");
const lesson28Icon = document.getElementById("stage-icon");
const lesson28Title = document.getElementById("stage-title");
const lesson28Text = document.getElementById("stage-text");
const lesson28Stat1Bar = document.getElementById("stat-1-bar");
const lesson28Stat1Text = document.getElementById("stat-1-text");
const lesson28Stat2Bar = document.getElementById("stat-2-bar");
const lesson28Stat2Text = document.getElementById("stat-2-text");
const lesson28Memory = document.getElementById("memory-text");

function applyLesson28(mode) {
  lesson28Stage.dataset.theme = mode.theme;
  lesson28Icon.textContent = mode.icon;
  lesson28Title.textContent = mode.title;
  lesson28Text.textContent = mode.text;
  lesson28Stat1Bar.style.width = mode.stat1Bar;
  lesson28Stat1Text.textContent = mode.stat1Text;
  lesson28Stat2Bar.style.width = mode.stat2Bar;
  lesson28Stat2Text.textContent = mode.stat2Text;
  lesson28Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({ buttons: [...document.querySelectorAll(".mode-button")], modes: lesson28Modes, applyMode: applyLesson28 });
applyLesson28(lesson28Modes.sea);
WeatherLessonTools.setupQuiz({ data: lesson28Quiz, progressEl: document.getElementById("quiz-progress"), questionEl: document.getElementById("quiz-question"), optionsEl: document.getElementById("quiz-options"), feedbackEl: document.getElementById("quiz-feedback"), nextEl: document.getElementById("quiz-next") });
