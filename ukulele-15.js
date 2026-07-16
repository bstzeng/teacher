const lesson15Modes = {
  shape: { badge: "兩個點一起顧", highlight: "第一次兩指", title: "F 和弦要同時按兩個位置", text: "一個在 G 弦第 2 格，一個在 E 弦第 1 格。先把這兩個點看熟。", cloud: "不要一看到兩根手指就怕。先一個一個放好，再一起刷。", list: ["G 弦第 2 格。", "E 弦第 1 格。", "兩個都按準最重要。"] },
  finger: { badge: "食指＋中指", highlight: "手指安排", title: "食指和中指最常配這個和弦", text: "很多孩子會用食指按 E 弦第 1 格，中指按 G 弦第 2 格，這樣最順手。", cloud: "如果兩根手指一開始會撞來撞去，先慢慢放，不用一次跳上去。", list: ["食指按第 1 格。", "中指按第 2 格。", "按完先停一下再刷。"] },
  sound: { badge: "比較厚一點", highlight: "聽聲音", title: "F 和弦會讓和聲開始更完整", text: "因為有兩根手指同時工作，刷起來會更有『和弦真的變複雜了』的感覺。", cloud: "如果聲音悶悶的，常常是某一根手指沒有按好，先一條弦一條弦檢查。", list: ["聲音比單指和弦更厚。", "聽聽有沒有哪條弦悶掉。", "先求四條弦都清楚。"] }
};
const lesson15Quiz = [
  { question: "F 和弦這一課最大的變化是？", options: [{ label: "第一次兩根手指一起按" }, { label: "完全不用左手" }, { label: "只能彈一條弦" }], answer: 0, correct: "對，F 和弦是第一次明顯用到兩根手指。", incorrect: "這一課最大的變化是開始用兩根手指。" },
  { question: "F 和弦常見的兩個位置是？", options: [{ label: "G 弦 2 格 ＋ E 弦 1 格" }, { label: "A 弦 3 格 ＋ G 弦 2 格" }, { label: "C 弦 2 格 ＋ A 弦 2 格" }], answer: 0, correct: "對，F 和弦是 G 弦第 2 格加 E 弦第 1 格。", incorrect: "再看一次，F 和弦是 G 弦第 2 格和 E 弦第 1 格。" },
  { question: "練 F 和弦時，最適合先追求什麼？", options: [{ label: "切換超快" }, { label: "兩個位置都按準" }, { label: "音量超大" }], answer: 1, correct: "對，先把兩個位置按準最重要。", incorrect: "先不要急著快，先把兩個位置按準。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-15-chord"), ["F"]);
  const titleEl = document.getElementById("lesson-15-title");
  const textEl = document.getElementById("lesson-15-text");
  const listEl = document.getElementById("lesson-15-list");
  const stageEl = document.getElementById("lesson-15-stage");
  const badgeEl = document.getElementById("lesson-15-badge");
  const cloudEl = document.getElementById("lesson-15-cloud");
  const highlightEl = document.getElementById("lesson-15-highlight");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson15Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; highlightEl.textContent = mode.highlight; titleEl.textContent = mode.title; textEl.textContent = mode.text; cloudEl.textContent = mode.cloud; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson15Quiz, progressEl: document.getElementById("lesson-15-progress"), questionEl: document.getElementById("lesson-15-question"), optionsEl: document.getElementById("lesson-15-options"), feedbackEl: document.getElementById("lesson-15-feedback"), nextEl: document.getElementById("lesson-15-next") });
});
