const hamMenu = document.getElementById("hamburger-menu");
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamCloseBtn = document.getElementById("ham-close-btn");

hamburgerBtn.addEventListener("click", () => {
  hamMenu.classList.add("show");
});
hamCloseBtn.addEventListener("click", () => {
  hamMenu.classList.remove("show");
});

$('#chat-btn-page').on('click', function() { window.location = 'https://web.whatsapp.com/'; });