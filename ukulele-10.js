const lesson10Modes = {
  steady: {
    badge: "穩穩地數 1 2 3 4",
    title: "穩定拍子是最理想的樣子",
    text: "每一拍差不多長，像穩穩地走路。這就是最好的節拍感。",
    list: ["一拍一拍平均前進。", "不突然衝快。", "不突然停慢。"]
  },
  fast: {
    badge: "太快會亂掉",
    title: "太快的拍子，常常讓手來不及準備",
    text: "小朋友一興奮就容易越來越快，但太快常常會讓右手和左手一起亂掉。",
    list: ["快不代表穩。", "越快越容易失誤。", "穩穩慢慢通常更好聽。"]
  },
  slow: {
    badge: "太慢也會散掉",
    title: "太慢如果不穩，也會讓節奏鬆掉",
    text: "慢不是問題，但慢還是要穩。如果每一拍差很多，音樂就會像走走停停。",
    list: ["慢可以，但要平均。", "每一拍都要有感覺。", "不要越來越拖。"]
  }
};

const lesson10Quiz = [
  {
    question: "第十課最重要的核心是什麼？",
    options: [{ label: "越快越厲害" }, { label: "節拍要穩定" }, { label: "一定要先學很多和弦" }],
    answer: 1,
    correct: "對，節拍最重要的是穩定。",
    incorrect: "重點不是快，是穩定。"
  },
  {
    question: "如果拍子忽快忽慢，會怎麼樣？",
    options: [{ label: "會更有趣" }, { label: "音樂會亂掉" }, { label: "一定會更大聲" }],
    answer: 1,
    correct: "對，忽快忽慢最容易讓音樂亂掉。",
    incorrect: "忽快忽慢會讓音樂亂掉。"
  },
  {
    question: "第十課很適合先用什麼練習？",
    options: [{ label: "拍手" }, { label: "背歌詞" }, { label: "調很多弦" }],
    answer: 0,
    correct: "對，先用拍手最直接。",
    incorrect: "這一課先用拍手練最合適。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-10-title");
  const textEl = document.getElementById("lesson-10-text");
  const listEl = document.getElementById("lesson-10-list");
  const stageEl = document.getElementById("lesson-10-stage");
  const badgeEl = document.getElementById("lesson-10-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson10Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson10Quiz,
    progressEl: document.getElementById("lesson-10-progress"),
    questionEl: document.getElementById("lesson-10-question"),
    optionsEl: document.getElementById("lesson-10-options"),
    feedbackEl: document.getElementById("lesson-10-feedback"),
    nextEl: document.getElementById("lesson-10-next")
  });
});
