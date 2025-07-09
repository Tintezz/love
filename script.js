const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const chibiCat = document.getElementById("chibiCat");
const happyCat = document.getElementById("happyCat");
const resultContainer = document.getElementById("resultContainer");
const hearthLoader = document.getElementById("hearthLoader");

noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * window.innerWidth * 0.6);
    const newY = Math.floor(Math.random() * window.innerHeight * 0.6);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    // Khi bấm "No", đổi hình mèo buồn
    chibiCat.src = "sad_cat.jpg";
    chibiCat.style.transform = "scale(0.9)"; // Làm nhỏ hình mèo
});

yesBtn.addEventListener("click", () => {
    // Chuyển hướng trang web đến file chứa hiệu ứng trái tim
    window.location.href = "heart1.html";
});

