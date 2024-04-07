const buttonSort = document.querySelector(".button-sort");
const numbersSort = document.querySelector(".numbers-sorted");
const numberSorted = document.querySelector(".number-sorted");
const quantity = document.querySelector(".quantity");
const numberStart = document.querySelector(".number-start");
const numberEnd = document.querySelector(".number-end");

var numerosDisponiveis = [1, 2, 3];
var numeroCoringa = 10;

var controle = true;

function sortear() {
    numbersSort.style.display = "flex";

    if (controle) {
        sorteioNormal();
    } else {
        sorteioAlterado();
    }

}

function sorteioNormal() {
    numbersSort.innerHTML = "";
    for (var i = 0; i < quantity.value; i++) {
        var numberRandom = generatorNumber(numberStart.value, numberEnd.value);
        var div = `<div class="number-sorted">${numberRandom}</div>`;
        numbersSort.innerHTML += div;
    }
}

function sorteioAlterado() {
    if (numerosDisponiveis.length > 0) {
        var indexRandom = Math.floor(Math.random() * numerosDisponiveis.length);
        var div = `<div class="number-sorted">${numerosDisponiveis[indexRandom]}</div>`;
        numbersSort.innerHTML = div;
        numerosDisponiveis.splice(indexRandom, 1)
    } else {
        var div = `<div class="number-sorted">${numeroCoringa}</div>`;
        numbersSort.innerHTML = div;
        controle = true;
    }
}

function clearResult() {
    numbersSort.style.display = "none";
}

function generatorNumber(n1, n2) {
    var numbersList = [];
    for (i = n1; i <= n2; i++) {
        numbersList.push(i);
    }
    var indexRandom = Math.floor(Math.random() * numbersList.length - 1) + 1;
    return numbersList[indexRandom];
}

function toggleControle() {
    controle = false;
}