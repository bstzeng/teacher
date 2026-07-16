const lesson05Modes = {
  sit: {
    badge: "坐著抱琴",
    title: "坐著時，先讓身體穩穩的",
    text: "雙腳踩穩，琴身輕輕靠著身體，肩膀不要聳起來。孩子坐著學通常最穩定。",
    list: ["雙腳放穩。", "琴不要一直滑走。", "肩膀和脖子要放鬆。"]
  },
  stand: {
    badge: "站著抱琴",
    title: "站著時，重點是不要全靠左手撐住",
    text: "如果站著抱琴，要用身體和前臂一起幫忙穩住，不要把重量都交給按弦的手。",
    list: ["身體可以輕輕夾住琴。", "左手不要太緊。", "如果太晃，先回到坐姿。"]
  },
  ready: {
    badge: "準備刷弦",
    title: "右手要有一個自然的刷弦空間",
    text: "抱琴位置如果太高或太低，右手都會不舒服。刷弦前先確認右手可以自然上下移動。",
    list: ["右手手腕不要卡住。", "刷弦動作從放鬆開始。", "先有舒服位置，再談好不好聽。"]
  }
};

const lesson05Quiz = [
  {
    question: "抱琴時哪個感覺比較對？",
    options: [{ label: "肩膀一直抬高" }, { label: "身體穩穩的，肩膀放鬆" }, { label: "琴一直滑動也沒關係" }],
    answer: 1,
    correct: "對，穩定又放鬆才是對的方向。",
    incorrect: "姿勢最重要的是穩定、放鬆。"
  },
  {
    question: "站著抱琴時，不應該怎麼做？",
    options: [{ label: "用身體幫忙穩住" }, { label: "全部重量都給左手" }, { label: "如果太晃先改坐著" }],
    answer: 1,
    correct: "對，不要讓左手單獨撐整把琴。",
    incorrect: "站姿時最忌諱把全部重量交給左手。"
  },
  {
    question: "第五課最主要在學什麼？",
    options: [{ label: "一次背很多和弦" }, { label: "先把拿琴姿勢變舒服" }, { label: "先彈完整歌曲" }],
    answer: 1,
    correct: "對，這一課的主角是姿勢。",
    incorrect: "重點是先把姿勢調整舒服。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-05-title");
  const textEl = document.getElementById("lesson-05-text");
  const listEl = document.getElementById("lesson-05-list");
  const stageEl = document.getElementById("lesson-05-stage");
  const badgeEl = document.getElementById("lesson-05-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson05Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson05Quiz,
    progressEl: document.getElementById("lesson-05-progress"),
    questionEl: document.getElementById("lesson-05-question"),
    optionsEl: document.getElementById("lesson-05-options"),
    feedbackEl: document.getElementById("lesson-05-feedback"),
    nextEl: document.getElementById("lesson-05-next")
  });
});
