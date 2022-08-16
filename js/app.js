const btnIniciar = document.getElementById("iniciar");
btnIniciar.addEventListener("click", inicializar);

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", reinicio);

const spanHoras = document.querySelector(".horas");
const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");

let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;

let cronometro = null;

function dibujarTiempo() {
    spanHoras.innerHTML = horas;
    spanMinutos.innerHTML = minutos;
    spanSegundos.innerHTML = segundos;
    spanCentesimas.innerHTML = centesimas;
}

function inicializar() {
    if (cronometro) {
        detener();
        btnReset.disabled = false;
    } else {
        iniciar();
        btnReset.disabled = true;
    }
}

function iniciar() {
    const sumarHora = () => {
        if (horas < 99) {
            horas++;
            if (horas < 10) {
                horas = "0" + horas;
            }
        }
        dibujarTiempo();
    };

    const sumarMinuto = () => {
        if (minutos === 59) {
            minutos = 0;
            sumarHora();
        } else {
            minutos++;
            if (minutos < 10) {
                minutos = "0" + minutos;
            }
        }
        dibujarTiempo();
    };

    const sumarSegundo = () => {
        if (segundos === 59) {
            segundos = 0;
            sumarMinuto();
        } else {
            segundos++;
            if (segundos < 10) {
                segundos = "0" + segundos;
            }
        }
        dibujarTiempo();
    };

    const incrementar = () => {
        if (centesimas === 99) {
            centesimas = 0;
            sumarSegundo();
        } else {
            centesimas++;
            if (centesimas < 10) {
                centesimas = "0" + centesimas;
            }
        }
        dibujarTiempo();
    };

    cronometro = setInterval(incrementar, 10);
    btnIniciar.innerHTML = `<i class="bi bi-pause"></i>`;
}

function detener() {
    clearInterval(cronometro);
    cronometro = null;
    btnIniciar.innerHTML = `<i class="bi bi-play"></i>`;
}

function reinicio() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    centesimas = 0;
    dibujarTiempo();
}

dibujarTiempo();
