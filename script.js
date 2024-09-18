// JavaScript untuk membuat dropdown box
document.addEventListener("DOMContentLoaded", () => {
  // Temukan elemen container untuk dropdown
  const dropdownContainer = document.getElementById("dropdown-container");

  // Buat elemen select
  const select = document.createElement("select");
  select.className = "dropdown";

  // Daftar opsi untuk dropdown
  const options = [
    { value: "", text: "Select an option" },
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" },
  ];

  // Tambahkan opsi ke dalam select
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    select.appendChild(optionElement);
  });

  // Sisipkan select ke dalam container
  dropdownContainer.appendChild(select);
});
// rotator
const texts = ["Junior web developer", "UI/UX Designer", "Data Scientist"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const rotator = document.getElementById("rotator");

function typeEffect() {
  const fullText = texts[index];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  rotator.innerHTML = currentText + '<span class="cursor"></span>';

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  const typingSpeed = isDeleting ? 50 : 120;
  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
