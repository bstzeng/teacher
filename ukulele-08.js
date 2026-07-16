const lesson08Modes = {
  all: {
    badge: "四條弦都可以先單獨彈",
    title: "先把四條空弦都聽過一遍",
    text: "空弦就是左手完全不按，只讓右手去碰聲音。這很適合初學時先把右手穩定下來。",
    list: ["左手先放鬆。", "右手一條一條彈。", "每條弦都停一下聽。"]
  },
  g: {
    badge: "先聽 G 弦",
    title: "G 空弦是最上面的原始聲音",
    text: "先單獨彈 G 弦，練習只碰一條弦，不要一次碰太多。",
    list: ["眼睛看好是哪一條。", "右手輕輕碰一下。", "聽到清楚聲音再換下一條。"]
  },
  c: {
    badge: "再聽 C 弦",
    title: "C 空弦是第二條弦的原始聲音",
    text: "第二條 C 弦很適合拿來練習單獨控制右手位置。",
    list: ["不要碰到隔壁弦。", "手腕放鬆。", "先求準，再求快。"]
  },
  e: {
    badge: "接著聽 E 弦",
    title: "E 空弦能幫你練右手的準度",
    text: "如果孩子常常不小心碰到兩條弦，這一課就更要慢慢來。",
    list: ["先找到第三條。", "輕輕碰一下。", "聲音乾淨再換。"]
  },
  a: {
    badge: "最後聽 A 弦",
    title: "A 空弦在最下面，很適合當終點檢查",
    text: "一條一條走到最下面的 A 弦，可以順便再把四條弦名字複習一次。",
    list: ["A 弦在最下面。", "彈完可以回頭再做一次。", "每條弦都要清楚。"]
  }
};

const lesson08Quiz = [
  {
    question: "什麼叫做空弦？",
    options: [{ label: "左手什麼都不按" }, { label: "左手一定要按第 1 格" }, { label: "把四條弦一起用力刷" }],
    answer: 0,
    correct: "對，空弦就是左手不按任何格。",
    incorrect: "空弦的重點是左手不按任何格。"
  },
  {
    question: "第八課最主要先練哪隻手？",
    options: [{ label: "右手" }, { label: "左手" }, { label: "腳" }],
    answer: 0,
    correct: "對，空弦很適合先把右手穩下來。",
    incorrect: "空弦這一課最主要先練右手。"
  },
  {
    question: "一條一條彈空弦時，最重要的是？",
    options: [{ label: "越快越好" }, { label: "每條弦都聽清楚" }, { label: "一定要唱歌" }],
    answer: 1,
    correct: "對，每條弦都要聽清楚。",
    incorrect: "速度不是重點，先把每條弦聽清楚。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("lesson-08-title");
  const textEl = document.getElementById("lesson-08-text");
  const listEl = document.getElementById("lesson-08-list");
  const stageEl = document.getElementById("lesson-08-stage");
  const badgeEl = document.getElementById("lesson-08-badge");

  window.UkuleleTools?.setupSwitcher({
    buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")),
    modes: lesson08Modes,
    applyMode: (modeKey, mode) => {
      stageEl.dataset.mode = modeKey;
      badgeEl.textContent = mode.badge;
      titleEl.textContent = mode.title;
      textEl.textContent = mode.text;
      listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
    }
  });

  window.UkuleleTools?.setupQuiz({
    data: lesson08Quiz,
    progressEl: document.getElementById("lesson-08-progress"),
    questionEl: document.getElementById("lesson-08-question"),
    optionsEl: document.getElementById("lesson-08-options"),
    feedbackEl: document.getElementById("lesson-08-feedback"),
    nextEl: document.getElementById("lesson-08-next")
  });
});
