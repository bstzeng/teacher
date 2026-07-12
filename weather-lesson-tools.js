function setupStage({ buttons, modes, applyMode }) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.mode;
      const mode = modes[key];
      if (!mode) return;
      buttons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      applyMode(mode);
    });
  });
}

function setupQuiz({ data, progressEl, questionEl, optionsEl, feedbackEl, nextEl }) {
  let index = 0;
  let locked = false;

  function render() {
    const item = data[index];
    locked = false;
    progressEl.textContent = `第 ${index + 1} 題，共 ${data.length} 題`;
    questionEl.textContent = item.question;
    feedbackEl.textContent = "";
    nextEl.hidden = true;
    optionsEl.innerHTML = "";

    item.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;
      button.addEventListener("click", () => answer(optionIndex));
      optionsEl.appendChild(button);
    });
  }

  function answer(selectedIndex) {
    if (locked) return;
    locked = true;
    const item = data[index];
    const buttons = [...optionsEl.querySelectorAll(".quiz-option")];

    buttons.forEach((button, buttonIndex) => {
      if (buttonIndex === item.answer) button.classList.add("is-correct");
      if (buttonIndex === selectedIndex && buttonIndex !== item.answer) button.classList.add("is-wrong");
      button.disabled = true;
    });

    feedbackEl.textContent = item.explanation;
    nextEl.hidden = false;
    nextEl.textContent = index === data.length - 1 ? "再玩一次" : "下一題 →";
  }

  nextEl.addEventListener("click", () => {
    index = index === data.length - 1 ? 0 : index + 1;
    render();
  });

  render();
}

window.WeatherLessonTools = { setupStage, setupQuiz };
