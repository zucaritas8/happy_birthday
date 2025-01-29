const noBtn = document.querySelector("#noBtn")

function moverAleatoriamente(yesBtn) {
    yesBtn.style.position = "absolute";
    yesBtn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    yesBtn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

yesBtn.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})