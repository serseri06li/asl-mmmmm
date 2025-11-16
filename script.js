document.addEventListener("DOMContentLoaded", function() {
  const questionContainer = document.querySelector(".question-container");
  const yesBtn = document.querySelector(".js-yes-btn");
  const noBtn = document.querySelector(".js-no-btn");

  // No butonunu container içinde rastgele hareket ettir
  noBtn.addEventListener("mouseover", () => {
    const containerWidth = questionContainer.offsetWidth - noBtn.offsetWidth;
    const containerHeight = questionContainer.offsetHeight - noBtn.offsetHeight;

    const newX = Math.floor(Math.random() * containerWidth);
    const newY = Math.floor(Math.random() * containerHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  });

  // Yes butonuna tıklayınca site içi sayfaya yönlendir
  yesBtn.addEventListener("click", () => {
    window.location.href = "index1.html"; // GitHub Pages uyumlu link
  });
});
