const ukuleleChordLibrary = {
  C: {
    title: "C",
    subtitle: "一根手指就能開始",
    tip: "把無名指放在最下面的 A 弦第 3 格，其他弦可以空弦。",
    dots: [{ string: 3, fret: 3, finger: 3 }],
    open: [0, 1, 2]
  },
  Am: {
    title: "Am",
    subtitle: "聲音溫柔，很常用",
    tip: "把中指放在最上面的 G 弦第 2 格。",
    dots: [{ string: 0, fret: 2, finger: 2 }],
    open: [1, 2, 3]
  },
  F: {
    title: "F",
    subtitle: "兩根手指的小挑戰",
    tip: "食指按 E 弦第 1 格，中指按 G 弦第 2 格。",
    dots: [
      { string: 0, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 }
    ],
    open: [1, 3]
  },
  G7: {
    title: "G7",
    subtitle: "很適合回到 C",
    tip: "C 弦第 2 格、E 弦第 1 格、A 弦第 2 格一起按。",
    dots: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 }
    ],
    open: [0]
  },
  G: {
    title: "G",
    subtitle: "明亮常見的主和弦",
    tip: "C 弦第 2 格、E 弦第 3 格、A 弦第 2 格。",
    dots: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 }
    ],
    open: [0]
  },
  Dm: {
    title: "Dm",
    subtitle: "柔和、安靜的感覺",
    tip: "G 弦第 2 格、C 弦第 2 格、E 弦第 1 格。",
    dots: [
      { string: 0, fret: 2, finger: 2 },
      { string: 1, fret: 2, finger: 3 },
      { string: 2, fret: 1, finger: 1 }
    ],
    open: [3]
  },
  C7: {
    title: "C7",
    subtitle: "只比 C 多一點點變化",
    tip: "A 弦第 1 格，常常帶你走回 F。",
    dots: [{ string: 3, fret: 1, finger: 1 }],
    open: [0, 1, 2]
  },
  Am7: {
    title: "Am7",
    subtitle: "四條弦都可以空空的",
    tip: "四條弦都不按，輕鬆刷下去就可以。",
    dots: [],
    open: [0, 1, 2, 3]
  }
};

function createChordCard(name) {
  const chord = ukuleleChordLibrary[name];
  if (!chord) return "";
  const stringLabels = ["G", "C", "E", "A"];
  const strings = [0, 1, 2, 3]
    .map((index) => `<span class="string" data-index="${index}"></span>`)
    .join("");
  const frets = [1, 2, 3, 4]
    .map((index) => `<span class="fret" data-index="${index}"></span>`)
    .join("");
  const opens = (chord.open || [])
    .map(
      (stringIndex) =>
        `<span class="chord-open" style="left:${12.5 + stringIndex * 25}%"></span>`
    )
    .join("");
  const dots = (chord.dots || [])
    .map(
      (dot) =>
        `<span class="chord-dot" style="left:${12.5 + dot.string * 25}%;top:${12.5 + (dot.fret - 1) * 25}%">${dot.finger}</span>`
    )
    .join("");

  return `
    <article class="chord-card">
      <div class="chord-head">
        <h4>${chord.title}</h4>
        <span>${chord.subtitle}</span>
      </div>
      <div class="chord-diagram">
        <div class="chord-string-labels">${stringLabels
          .map((label) => `<span>${label}</span>`)
          .join("")}</div>
        <div class="chord-grid">
          ${strings}
          ${frets}
          ${opens}
          ${dots}
        </div>
      </div>
      <p class="chord-tip">${chord.tip}</p>
    </article>
  `;
}

function renderChordGallery(container, names) {
  if (!container) return;
  container.innerHTML = names.map(createChordCard).join("");
}

function setupSwitcher({ buttons, modes, applyMode }) {
  if (!buttons?.length) return;
  const setMode = (modeKey) => {
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.mode === modeKey);
    });
    applyMode(modeKey, modes[modeKey]);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  setMode(buttons[0].dataset.mode);
}

function setupQuiz({ data, progressEl, questionEl, optionsEl, feedbackEl, nextEl }) {
  if (!data?.length || !progressEl || !questionEl || !optionsEl || !feedbackEl || !nextEl) {
    return;
  }

  let index = 0;
  let answered = false;

  const renderQuestion = () => {
    const current = data[index];
    answered = false;
    progressEl.textContent = `QUESTION ${index + 1} / ${data.length}`;
    questionEl.textContent = current.question;
    feedbackEl.textContent = "";
    nextEl.disabled = true;
    nextEl.textContent = index === data.length - 1 ? "看完成整理" : "下一題";
    optionsEl.innerHTML = current.options
      .map(
        (option, optionIndex) =>
          `<button type="button" data-index="${optionIndex}">${option.label}</button>`
      )
      .join("");

    Array.from(optionsEl.querySelectorAll("button")).forEach((button) => {
      button.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const selectedIndex = Number(button.dataset.index);
        const isCorrect = selectedIndex === current.answer;
        feedbackEl.textContent = isCorrect ? current.correct : current.incorrect;
        nextEl.disabled = false;
        Array.from(optionsEl.querySelectorAll("button")).forEach((optionButton, optionIdx) => {
          if (optionIdx === current.answer) {
            optionButton.style.background = "#e1f7ea";
            optionButton.style.borderColor = "rgba(30,157,109,0.4)";
          } else if (optionIdx === selectedIndex && !isCorrect) {
            optionButton.style.background = "#fde8ea";
            optionButton.style.borderColor = "rgba(198,85,85,0.35)";
          }
        });
      });
    });
  };

  nextEl.addEventListener("click", () => {
    if (index < data.length - 1) {
      index += 1;
      renderQuestion();
    } else {
      progressEl.textContent = "DONE";
      questionEl.textContent = "這一課完成了，可以進下一課。";
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "重點不是背快，而是手感和耳朵一起慢慢熟。";
      nextEl.disabled = true;
      nextEl.textContent = "完成";
    }
  });

  renderQuestion();
}

window.UkuleleTools = {
  chordLibrary: ukuleleChordLibrary,
  renderChordGallery,
  setupSwitcher,
  setupQuiz
};
