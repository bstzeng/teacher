const lesson29Modes = {
  weather: { theme: "spring", icon: "☁️", title: "天氣", text: "天氣比較像今天、現在，或這幾天的樣子。", stat1Bar: "24%", stat1Text: "今天、這幾天", stat2Bar: "34%", stat2Text: "現在的樣子", memory: "天氣看今天，氣候看很久。" },
  climate: { theme: "autumn", icon: "🗓️", title: "氣候", text: "氣候比較像這個地方很久以來常常是什麼樣子。", stat1Bar: "100%", stat1Text: "看很久", stat2Bar: "100%", stat2Text: "長期習慣", memory: "氣候不是今天而已，而是長期常常怎麼樣。" },
  compare: { theme: "spring", icon: "⏳", title: "一起比較", text: "只要先記住『天氣看今天，氣候看很久』，就很容易分清楚。", stat1Bar: "70%", stat1Text: "時間不同", stat2Bar: "82%", stat2Text: "最容易分", memory: "今天下雨是天氣，這個地方常常濕熱是氣候。" }
};
const lesson29Quiz = [
  { question: "今天會不會下雨，比較像天氣還是氣候？", options: ["天氣", "氣候", "都不是"], answer: 0, explanation: "答對了。今天會不會下雨，是天氣。" },
  { question: "一個地方一直以來常常濕熱，比較像什麼？", options: ["氣候", "天氣", "露水"], answer: 0, explanation: "對。長期常常濕熱，比較像氣候。" },
  { question: "天氣和氣候最大的差別，可以先怎麼記？", options: ["天氣看今天，氣候看很久", "天氣比較大、氣候比較小", "它們完全一樣"], answer: 0, explanation: "沒錯。這樣記最清楚。" },
  { question: "今天很冷，這比較像什麼？", options: ["天氣", "氣候", "衛星"], answer: 0, explanation: "答對了。今天很冷是天氣。" },
  { question: "第二十九課最重要的重點是什麼？", options: ["天氣看今天，氣候看很久", "天氣和氣候沒有差別", "氣候只看一天"], answer: 0, explanation: "對。這就是本課重點。" }
];

const lesson29Stage = document.getElementById("concept-stage");
const lesson29Icon = document.getElementById("stage-icon");
const lesson29Title = document.getElementById("stage-title");
const lesson29Text = document.getElementById("stage-text");
const lesson29Stat1Bar = document.getElementById("stat-1-bar");
const lesson29Stat1Text = document.getElementById("stat-1-text");
const lesson29Stat2Bar = document.getElementById("stat-2-bar");
const lesson29Stat2Text = document.getElementById("stat-2-text");
const lesson29Memory = document.getElementById("memory-text");

function applyLesson29(mode) {
  lesson29Stage.dataset.theme = mode.theme;
  lesson29Icon.textContent = mode.icon;
  lesson29Title.textContent = mode.title;
  lesson29Text.textContent = mode.text;
  lesson29Stat1Bar.style.width = mode.stat1Bar;
  lesson29Stat1Text.textContent = mode.stat1Text;
  lesson29Stat2Bar.style.width = mode.stat2Bar;
  lesson29Stat2Text.textContent = mode.stat2Text;
  lesson29Memory.textContent = mode.memory;
}

WeatherLessonTools.setupStage({ buttons: [...document.querySelectorAll(".mode-button")], modes: lesson29Modes, applyMode: applyLesson29 });
applyLesson29(lesson29Modes.weather);
WeatherLessonTools.setupQuiz({ data: lesson29Quiz, progressEl: document.getElementById("quiz-progress"), questionEl: document.getElementById("quiz-question"), optionsEl: document.getElementById("quiz-options"), feedbackEl: document.getElementById("quiz-feedback"), nextEl: document.getElementById("quiz-next") });
