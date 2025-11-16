const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const corazon = document.querySelector(".corazon");
const backgroundMusic = document.getElementById("backgroundMusic");
let isMusicPlaying = false;

// Kalbe tıklayınca aç/kapat
corazon.addEventListener("click", () => {
    envoltura.classList.toggle("abierto");
    carta.classList.toggle("mostrar-carta");

    if (envoltura.classList.contains("abierto")) {
        if (!isMusicPlaying) {
            backgroundMusic.play().then(() => { isMusicPlaying = true; }).catch(()=>{});
        }
    } else {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            isMusicPlaying = false;
        }
    }
});
