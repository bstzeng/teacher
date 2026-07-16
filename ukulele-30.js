const lesson30Modes = {
  prepare: {
    badge: "先選一首最熟的歌",
    title: "畢業挑戰的第一步，不是選最難",
    text: "孩子最需要的是完成感。所以先選最熟的一首兒歌，會比硬選比較難的歌更容易成功。",
    list: ["先選最熟的歌。", "和弦不要太多。", "節奏穩比炫更重要。"]
  },
  perform: {
    badge: "先穩穩走完整輪",
    title: "先完成演奏，再追求邊唱邊彈",
    text: "如果一開始就唱又彈，很容易兩邊都亂。先把和弦和刷法走完，再把歌聲加進來。",
    list: ["先彈不唱。", "每格先照固定刷法。", "整輪走完最重要。"]
  },
  share: {
    badge: "願意分享，就是完成",
    title: "可以唱、可以哼，也可以只彈給家人聽",
    text: "這課不是考試。孩子願意把完成的一首歌分享出去，就是很好的結業時刻。",
    list: ["可以唱。", "也可以哼。", "或只彈給家人聽。"]
  },
  all: {
    badge: "這就是完整入門畢業",
    title: "把和弦、節拍、刷法、看譜都合在一起",
    text: "能完成一首熟悉兒歌，代表前面學的東西都開始接起來了。這不代表結束，而是已經有能力自己往下玩更多歌。",
    list: ["先挑歌。", "再彈完整輪。", "最後分享給別人聽。"]
  }
};

const lesson30Quiz = [
  {
    question: "畢業挑戰最好的選歌原則是什麼？",
    options: [{ label: "選最熟的一首" }, { label: "選最難的一首" }, { label: "不要選歌" }],
    answer: 0,
    correct: "對，先選最熟的一首，成功率最高。",
    incorrect: "這課建議先選最熟的一首歌。"
  },
  {
    question: "如果邊唱邊彈會亂，最穩的做法是？",
    options: [{ label: "先只彈不唱" }, { label: "更快" }, { label: "直接放棄" }],
    answer: 0,
    correct: "對，先只彈不唱，穩了再加歌聲。",
    incorrect: "先只彈不唱，通常最容易把挑戰完成。"
  },
  {
    question: "第三十課最重要的意義是什麼？",
    options: [{ label: "開始把前面學的東西合起來" }, { label: "把所有和弦一次背完" }, { label: "完全不需要再練" }],
    answer: 0,
    correct: "對，這課是在把前面學的東西真正合起來。",
    incorrect: "第三十課的核心，是把和弦、節拍、刷法和看譜合起來。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-30-title");
  const textEl = document.getElementById("lesson-30-text");
  const listEl = document.getElementById("lesson-30-list");
  const stageEl = document.getElementById("lesson-30-stage");
  const badgeEl = document.getElementById("lesson-30-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson30Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson30Quiz,
    progressEl: document.getElementById("lesson-30-progress"),
    questionEl: document.getElementById("lesson-30-question"),
    optionsEl: document.getElementById("lesson-30-options"),
    feedbackEl: document.getElementById("lesson-30-feedback"),
    nextEl: document.getElementById("lesson-30-next")
  });
});
