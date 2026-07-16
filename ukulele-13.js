const lesson13Modes = {
  shape: { badge: "一根手指", highlight: "最簡單起步", title: "C 和弦的形狀很簡單", text: "只要一根手指放在 A 弦第 3 格，其他弦都可以空著。", cloud: "先想成：只有最下面那條弦要工作。其他三條弦先不要緊張。", list: ["A 弦在最下面。", "位置在第 3 格。", "其他弦先保持空弦。"] },
  finger: { badge: "無名指最常用", highlight: "手指安排", title: "C 和弦最常用無名指", text: "很多老師會先讓孩子用無名指按，因為後面切到別的和弦時會比較順。", cloud: "把無名指放下去時，其他手指不用緊張地跟著抬很高。", list: ["無名指放 A 弦第 3 格。", "手腕不要太僵。", "按完先停一下再刷。"] },
  sound: { badge: "亮亮的感覺", highlight: "聽聲音", title: "C 和弦聽起來很明亮", text: "刷下去之後，會有很亮、很開的感覺，這也是很多兒歌常用 C 的原因。", cloud: "如果聽起來悶悶的，先檢查 A 弦有沒有按準、右手有沒有刷乾淨。", list: ["刷完先聽完整聲音。", "不要刷太大力。", "先讓每條弦都清楚。"] }
};
const lesson13Quiz = [
  { question: "C 和弦最重要按在哪裡？", options: [{ label: "A 弦第 3 格" }, { label: "G 弦第 2 格" }, { label: "E 弦第 1 格" }], answer: 0, correct: "對，C 和弦的關鍵是 A 弦第 3 格。", incorrect: "再看一次，C 和弦是按在 A 弦第 3 格。" },
  { question: "C 和弦一開始最吸引人的地方是？", options: [{ label: "要三根手指" }, { label: "只要一根手指就能開始" }, { label: "完全不能刷弦" }], answer: 1, correct: "對，只要一根手指，很適合第一個學。", incorrect: "C 和弦最適合當第一個學，因為只要一根手指。" },
  { question: "刷 C 和弦時，先追求什麼？", options: [{ label: "很快" }, { label: "很大聲" }, { label: "乾淨清楚" }], answer: 2, correct: "對，先讓聲音乾淨清楚。", incorrect: "先不要急著快，乾淨清楚更重要。" }
];
document.addEventListener("DOMContentLoaded", () => {
  window.UkuleleTools?.renderChordGallery(document.getElementById("lesson-13-chord"), ["C"]);
  const titleEl = document.getElementById("lesson-13-title");
  const textEl = document.getElementById("lesson-13-text");
  const listEl = document.getElementById("lesson-13-list");
  const stageEl = document.getElementById("lesson-13-stage");
  const badgeEl = document.getElementById("lesson-13-badge");
  const cloudEl = document.getElementById("lesson-13-cloud");
  const highlightEl = document.getElementById("lesson-13-highlight");
  window.UkuleleTools?.setupSwitcher({ buttons: Array.from(document.querySelectorAll("#lab .stage-controls button")), modes: lesson13Modes, applyMode: (modeKey, mode) => {
    stageEl.dataset.mode = modeKey; badgeEl.textContent = mode.badge; highlightEl.textContent = mode.highlight; titleEl.textContent = mode.title; textEl.textContent = mode.text; cloudEl.textContent = mode.cloud; listEl.innerHTML = mode.list.map((item) => `<li>${item}</li>`).join("");
  }});
  window.UkuleleTools?.setupQuiz({ data: lesson13Quiz, progressEl: document.getElementById("lesson-13-progress"), questionEl: document.getElementById("lesson-13-question"), optionsEl: document.getElementById("lesson-13-options"), feedbackEl: document.getElementById("lesson-13-feedback"), nextEl: document.getElementById("lesson-13-next") });
});
