document.addEventListener('DOMContentLoaded', () => {
    const contadorElement = document.getElementById('contador');
    const botaoContador = document.getElementById('botaoContador');
    let contagem = 0;

    botaoContador.addEventListener('click', () => {
        contagem++;
        contadorElement.textContent = contagem;
    });
});