//creo le funzioni
/**
 * Descrizione: colora lo sfondo di verde
 * @returns {StyleSheet}
 */
function greenNumber() {
    return this.classList.toggle('green');
}
/**
 * Descrizione: quando viene avviato, mostra a schermo il suo contenuto
 * @param {string}
 * @returns {String}
 */
function alertNumber() {
    let numberContent = this.innerText;
    return console.log(numberContent);
}
/**
 * Description
 * @param {number} number
 * @returns {boolean}
 */
function isBomb(number) {
    let find = false;
    if (bombs.includes(number)) {//se il numero è contenuto nell'array delle bombe
        find = true;//la variabile è true e quindi il numero fa parte delle bombe
    }
    return find;
}
function redNumber() {
    return this.classList.toggle('red');
}
/**
 * Descrizione: serve per poter inserire automaticamente i numeri all'interno della griglia
 * @param {HTMLElement} a
 * @returns {HTMLElement}
 */
function createGridNumber(a) {
    gridItemNumber = document.createElement('div');//creo un elemento html div
    gridItemNumber.innerText = a;//ci inserisco un numero
    gridItemNumber.classList.add('grid-item');//aggiungo al div la classe grid-item
    return gridItemNumber;//consegno come risultato l'elemento terminato
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateBombs(maxNumber) {
    let bombsArray = [];
    let rndNumber;
    for (let y = 1; y <= 16; y++) {
        rndNumber = getRndInteger(1, maxNumber);
        if (!bombsArray.includes(rndNumber)) {
            bombsArray.push(rndNumber);
        }
    }
    return bombsArray;
}
function startGame() {
    let blockNumber;
    let difficultSelectedInput = document.getElementById('select-difficult');//individuo l'elemento
    let difficultSelected = difficultSelectedInput.value;//
    switch (difficultSelected) {
        case 'easy':
            blockNumber = 100;
            break;

        case 'medium':
            blockNumber = 81;
            break;

        case 'hard':
            blockNumber = 49;
            break;

        default:
            break;
    }
    numbersOfClick = blockNumber - 16;
    containerNumber.classList.remove('hide');//mostro la griglia
    numberGrid.innerHTML = "";//svuoto il contenitore dei numeri per evitare la moltiplicazione selvaggia
    for (let x = 1; x <= blockNumber; x++) {//li inserisco nel numberGrid
        numberGrid.append(createGridNumber(x));// lo inserisco all'interno della griglia genitore
        if (isBomb(x)) {
            gridItemNumber.addEventListener('click', redNumber);//al click lo sfondo diventa rosso
            gridItemNumber.addEventListener('click', loseTheGame);
        } else {
            gridItemNumber.addEventListener('click', greenNumber);//al click faccio diventare lo sfondo della cella verde
            gridItemNumber.addEventListener('click', winTheGame);
        }
    }
}
function loseTheGame() {
    alert('HAI PERSO, RICARICA LA PAGINA');
}
function winTheGame() {
    if (userClick === numbersOfClick) {
        alert('hai vinto, punteggio: '+ numbersOfClick);
    } else {
        userClick++;
    }
}
///////////////////////////////PROGRAM CODE
const numberGrid = document.getElementById('number-grid');//creo la variabile che mi indica l'elemento che conterrà i numero nella griglia
const containerNumber = document.getElementById('containerNum');//creo la variabile che conterrà tutta la griglia
let gridItemNumber;//questa var mi serve sia per la creazione del div che per il controllo
containerNumber.classList.add('hide');
let bombs = generateBombs(100);
console.log(bombs);
let userClick = 0;
let numbersOfClick;
const playBtn = document.getElementById('start-game');
playBtn.addEventListener('click', startGame);

