const noBtn = document.querySelector("#noBtn")
const closeAlertButton = document.querySelector('#closeAlertButton');
const section1 = document.querySelector('#first-sec');
const section2 = document.querySelector('#second-sec');

function moverAleatoriamente(yesBtn) {
    yesBtn.style.position = "absolute";
    yesBtn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    yesBtn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}
yesBtn.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('alertBox').classList.remove('hidden');
});

document.getElementById('closeAlertButton').addEventListener('click', function() {
    document.getElementById('alertBox').classList.add('hidden');
});

closeAlertButton.addEventListener('click', function() {
    overlay.classList.add('hidden');
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
});
