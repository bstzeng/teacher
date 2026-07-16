const lesson29Modes = {
  name: {
    badge: "先看上面的和弦名字",
    title: "和弦名字就是這格要用的和弦",
    text: "和弦譜最常見的樣子，就是上面寫和弦名字，下面的那一格時間就用這個和弦刷。先把這件事看懂，就能開始自己彈歌。",
    list: ["先看第一格是哪個和弦。", "下一格換下一個名字。", "不要一次看太多格。"]
  },
  switch: {
    badge: "每換一格，就準備換和弦",
    title: "小節在走，和弦也跟著走",
    text: "每一格可以先刷固定次數，例如四下。格子換了，就準備換和弦。先穩定，比花式刷法更重要。",
    list: ["每格先刷四下。", "看見下一格就提前準備。", "慢慢換，比亂快好。"]
  },
  play: {
    badge: "先完成一整輪",
    title: "自己走完一圈，就是很大的進步",
    text: "這課的目標不是華麗，而是自己跟著和弦譜，把一整輪彈完。能走完，孩子就會知道自己真的會用譜。",
    list: ["先彈，不一定要唱。", "整輪走完最重要。", "卡住就停一下再接。"]
  }
};

const lesson29Quiz = [
  {
    question: "和弦譜上面寫的和弦名字，表示什麼？",
    options: [{ label: "那一格要用的和弦" }, { label: "今天日期" }, { label: "拍手次數" }],
    answer: 0,
    correct: "對，上面的和弦名字就是那一格要用的和弦。",
    incorrect: "這課最重要的是：上面的和弦名字就是那一格要彈的和弦。"
  },
  {
    question: "剛開始跟和弦譜彈歌，最穩的做法是？",
    options: [{ label: "每格先刷固定次數" }, { label: "每格都亂換刷法" }, { label: "完全不看下一格" }],
    answer: 0,
    correct: "對，每格先刷固定次數最穩。",
    incorrect: "剛開始最好先固定每格刷幾下，讓拍子穩住。"
  },
  {
    question: "第二十九課最重要的成功標準是？",
    options: [{ label: "一定要唱到很大聲" }, { label: "自己走完一整輪" }, { label: "一定要超快" }],
    answer: 1,
    correct: "對，自己走完一整輪就是這課最大的成功。",
    incorrect: "這課最重要的是自己能跟著和弦譜走完一圈。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-29-title");
  const textEl = document.getElementById("lesson-29-text");
  const listEl = document.getElementById("lesson-29-list");
  const stageEl = document.getElementById("lesson-29-stage");
  const badgeEl = document.getElementById("lesson-29-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson29Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson29Quiz,
    progressEl: document.getElementById("lesson-29-progress"),
    questionEl: document.getElementById("lesson-29-question"),
    optionsEl: document.getElementById("lesson-29-options"),
    feedbackEl: document.getElementById("lesson-29-feedback"),
    nextEl: document.getElementById("lesson-29-next")
  });
});
