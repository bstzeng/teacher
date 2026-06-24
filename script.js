const yearElement = document.querySelector("#current-year");
const notifyButton = document.querySelector(".notify-button");
const toast = document.querySelector("#toast");

yearElement.textContent = new Date().getFullYear();

let toastTimer;

if (notifyButton && toast) {
  notifyButton.addEventListener("click", () => {
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);

    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3200);
  });
}
