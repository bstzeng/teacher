const lesson26Modes = {
  high: { theme: "spring", icon: "🛰️", title: "看大範圍", text: "衛星在很高的地方，所以可以看很大一片的天氣。", stat1Bar: "100%", stat1Text: "很大", stat2Bar: "72%", stat2Text: "很重要", memory: "衛星因為站得高，所以很適合看大範圍的雲和風暴。" },
  clouds: { theme: "spring", icon: "☁️", title: "看雲帶", text: "衛星很適合看大片雲帶在哪裡、怎麼移動。", stat1Bar: "92%", stat1Text: "雲看得很清楚", stat2Bar: "84%", stat2Text: "很有幫助", memory: "大範圍的雲帶，從上面看最清楚。" },
  storm: { theme: "cold", icon: "🌀", title: "看風暴", text: "像颱風這種大風暴，用衛星從上面看，會更容易追蹤。", stat1Bar: "88%", stat1Text: "風暴很清楚", stat2Bar: "100%", stat2Text: "追蹤很重要", memory: "衛星最常讓人想到的，就是看颱風和大風暴。" }
};
const lesson26Quiz = [
  { question: "氣象衛星最厲害的地方是什麼？", options: ["可以從高高的地方看很大範圍", "只看一張桌子", "只能看室內"], answer: 0, explanation: "答對了。衛星最厲害的是能看大範圍。" },
  { question: "衛星最常幫忙看什麼？", options: ["雲和風暴", "只有一棵樹", "只有一個人"], answer: 0, explanation: "對。衛星最常幫忙看雲和風暴。" },
  { question: "為什麼衛星看颱風很重要？", options: ["因為從上面看更清楚", "因為颱風住在地底下", "因為衛星會下雨"], answer: 0, explanation: "沒錯。從上面看大風暴更清楚。" },
  { question: "衛星是不是單獨做所有事情？", options: ["不是，還會和其他資料一起看", "是，什麼都只靠它", "完全不用資料"], answer: 0, explanation: "答對了。衛星會和其他資料一起用。" },
  { question: "第二十六課最重要的重點是什麼？", options: ["衛星很適合看大範圍的雲和風暴", "衛星只會看一小塊地方", "衛星和天氣沒關係"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson26Stage = document.getElementById("concept-stage");
const lesson26Icon = document.getElementById("stage-icon");
const lesson26Title = document.getElementById("stage-title");
const lesson26Text = document.getElementById("stage-text");
const lesson26Stat1Bar = document.getElementById("stat-1-bar");
const lesson26Stat1Text = document.getElementById("stat-1-text");
const lesson26Stat2Bar = document.getElementById("stat-2-bar");
const lesson26Stat2Text = document.getElementById("stat-2-text");
const lesson26Memory = document.getElementById("memory-text");

function applyLesson26(mode) {
  lesson26Stage.dataset.theme = mode.theme;
  lesson26Icon.textContent = mode.icon;
  lesson26Title.textContent = mode.title;
  lesson26Text.textContent = mode.text;
  lesson26Stat1Bar.style.width = mode.stat1Bar;
  lesson26Stat1Text.textContent = mode.stat1Text;
  lesson26Stat2Bar.style.width = mode.stat2Bar;
  lesson26Stat2Text.textContent = mode.stat2Text;
  lesson26Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({ buttons: [...document.querySelectorAll(".mode-button")], modes: lesson26Modes, applyMode: applyLesson26 });
applyLesson26(lesson26Modes.high);
WeatherLessonTools.setupQuiz({ data: lesson26Quiz, progressEl: document.getElementById("quiz-progress"), questionEl: document.getElementById("quiz-question"), optionsEl: document.getElementById("quiz-options"), feedbackEl: document.getElementById("quiz-feedback"), nextEl: document.getElementById("quiz-next") });
