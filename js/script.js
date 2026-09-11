document.getElementById('menu_button').addEventListener('click', () => {
  document.querySelector('.nav-wrapper').classList.toggle('open');
});

document.getElementById("img_fuwate_reload").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.getElementById("img_sg").addEventListener("click", function () {
  window.open("https://www.sg74.de/", "_blank");
});

document.getElementById('card_button').addEventListener('click', () => {
  window.open("fuwate-card.html", "_blank");
});