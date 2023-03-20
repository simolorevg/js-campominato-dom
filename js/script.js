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
function isBomb(number) {
    let find = false;
    if (bombs.includes(number)) {//se il numero è contenuto nell'array delle bombe
        find = true;//la variabile è true e quindi il numero fa parte delle bombe
    }
    return find;
}
function bombAlert() {
    return console.log('hai preso una bomba');
}
function redNumber(){
    return this.classList.toggle('red');
}
/**
 * Descrizione: serve per poter inserire automaticamente i numeri all'interno della griglia
 * @param {HTMLElement} a
 * @returns {HTMLElement}
 */
function createGridNumber(a) {
    const gridItemNumber = document.createElement('div');//creo un elemento html div
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
    containerNumber.classList.remove('hide');//mostro la griglia
    numberGrid.innerHTML = "";//svuoto il contenitore dei numeri per evitare la moltiplicazione selvaggia
    for (let x = 1; x <= 100; x++) {//li inserisco nel numberGrid
        gridNumber = createGridNumber(x);//eseguo la funzione createGridNumber per ogni elemento dell'array
        numberGrid.append(gridNumber);// lo inserisco all'interno della griglia genitore
        if(isBomb(x)){
            gridNumber.addEventListener('click', redNumber);
            gridNumber.addEventListener('click', bombAlert);
        }else{
            gridNumber.addEventListener('click', greenNumber);//al click faccio diventare lo sfondo della cella verde
            gridNumber.addEventListener('click', alertNumber);//al click mostra il numero
        }
    }
}
///////////////////////////////PROGRAM CODE
const numberGrid = document.getElementById('number-grid');//creo l'elemento che conterrà i numero nella griglia
const containerNumber = document.getElementById('containerNum');
containerNumber.classList.add('hide');
let bombs = generateBombs(100);
console.log(bombs);
let gridNumber;//questa variabile mi servirà sia per l'inserimento dinamico dei numeri, ma anche per la visione del numero al click più tardi
const playBtn = document.getElementById('start-game');
playBtn.addEventListener('click', startGame);