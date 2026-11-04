const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const wordInput = document.getElementById("word-input");
const styleSelect = document.getElementById("style-select");
const sizeRange = document.getElementById("size-range");
const previewWord = document.getElementById("preview-word");

function updatePreview() {
  previewWord.textContent = wordInput.value.trim() || "Ruang";
  previewWord.className = `preview-word ${styleSelect.value}`;
  previewWord.style.fontSize = `${sizeRange.value}px`;
}

[wordInput, styleSelect, sizeRange].forEach((control) => {
  control.addEventListener("input", updatePreview);
});
updatePreview();
