const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

setInterval(relogio, 1000)

function relogio() {
    hoje = new Date()
    hr = hoje.getHours()
    min = hoje.getMinutes()
    seg = hoje.getSeconds()

    horas.textContent = hr < 10 ? '0' + hr : hr;
    minutos.textContent = min < 10 ? '0' + min : min;
    segundos.textContent = seg < 10 ? '0' + seg : seg;
}

document.addEventListener("DOMContentLoaded", function () {
    const diaElement = document.getElementById("dia");
    const mesElement = document.getElementById("mes");

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    function updateDate() {
        const now = new Date();
        const dia = now.getDate();
        const mes = now.getMonth();

        diaElement.textContent = `${dia < 10 ? "0" + dia : dia}`;  // Formata o dia (com zero à esquerda)
        mesElement.textContent = `${months[mes]}`;  // Exibe o mês por extenso
    }

    // Atualiza a data quando a página carrega
    updateDate();
});