class ticTac {
    constructor(cellsOnGameboard) {
        this.isRunning = false;
        this.isCicleMove = false;
        this.cicleScore = 0;
        this.crossScore = 0;
        this.cellsOnGameboard = cellsOnGameboard;
        this.options = {
            cross: '❌',
            cicle: '⭕'
        };
        this.gameboard = document.getElementById('game-board__body');
        this.moveInfo = document.getElementById('game-board__move-info');
        this.cicleScoreElem = document.querySelector('.cicle-score');
        this.crossScoreElem = document.querySelector('.cross-score');
        this.firstPlayer = document.getElementById('first-player-name').value || 'первый игрок';
        this.secondPlayer = document.getElementById('second-player-name').value || 'второй игрок';
        this.players = [this.firstPlayer, this.secondPlayer];
        this.flag = true;
        this.currentPlayer = this.players[+(!this.flag)];
    }
    newRound() {
        this.moveInfo.innerHTML = 'Ходит ' + this.currentPlayer;
        this.gameboard.innerHTML = '';
        for (var i = 0; i < this.cellsOnGameboard; i++) {
            const tr = document.createElement('tr');
            for (var j = 0; j < this.cellsOnGameboard; j++) {
                const td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);
            }
            this.gameboard.appendChild(tr);
        }
        this.gameboard.addEventListener('click', (e) => {
            this.cellClickHandler(e)
        });
    }
    cellClickHandler(e) {
        if (e.target.tagName == 'TD') {
            if (e.target.dataset.point) return;
            e.target.dataset.point = this.isCicleMove ? this.options.cicle : this.options.cross;
        }
        this.controlPoints(e.target);
        this.isCicleMove = !this.isCicleMove;
    }
    controlPoints(el) {
        const elIndex = [].indexOf.call(el.parentNode.children, el);
        let counter = 1;
        let elem = el;
        let i = 1;

        while (elem.parentNode.previousElementSibling !== null && elem.parentNode.previousElementSibling.children[elIndex - i] !== undefined) {
            if (elem.parentNode.previousElementSibling.children[elIndex - i].getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.parentNode.previousElementSibling.children[elIndex - i];
            i++;
        }
        counter = 1;
        i = 1;
        elem = el;
        while (elem.parentNode.nextElementSibling !== null && elem.parentNode.nextElementSibling.children[elIndex + i] !== undefined) {
            if (elem.parentNode.nextElementSibling.children[elIndex + i].getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.parentNode.nextElementSibling.children[elIndex + i];
            i++;
        }
        counter = 1;
        i = 1;
        elem = el;
        while (elem.parentNode.nextElementSibling !== null && elem.parentNode.nextElementSibling.children[elIndex - i] !== undefined) {
            if (elem.parentNode.nextElementSibling.children[elIndex - i].getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.parentNode.nextElementSibling.children[elIndex - i];
            i++;
        }
        counter = 1;
        i = 1;
        elem = el;
        while (elem.parentNode.previousElementSibling !== null && elem.parentNode.previousElementSibling.children[elIndex + i] !== undefined) {
            if (elem.parentNode.previousElementSibling.children[elIndex + i].getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.parentNode.previousElementSibling.children[elIndex + i];
            i++;
        }
        counter = 1;
        i = 1;
        elem = el;
        while (elem.previousElementSibling !== null) {
            if (elem.previousElementSibling.getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.previousElementSibling;
        }
        counter = 1;
        elem = el;
        while (elem.nextElementSibling !== null) {
            if (elem.nextElementSibling.getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.nextElementSibling;
            i++;
        }
        counter = 1;
        elem = el;
        while (elem.parentNode.previousElementSibling !== null && elem.parentNode.previousElementSibling.children[elIndex] !== undefined) {
            if (elem.parentNode.previousElementSibling.children[elIndex].getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.parentNode.previousElementSibling.children[elIndex];
        }
        counter = 1;
        elem = el;
        while (elem.parentNode.nextElementSibling !== null && elem.parentNode.nextElementSibling.children[elIndex] !== undefined) {
            if (elem.parentNode.nextElementSibling.children[elIndex].getAttribute('data-point') == el.getAttribute('data-point')) {
                counter++;
                if (counter === 3) {
                    this.moveInfo.innerHTML = 'Выиграл ' + this.currentPlayer;
                    this.endRound();
                    return;
                }
            } else {
                break;
            }
            elem = elem.parentNode.nextElementSibling.children[elIndex];
        }

        this.flag = !this.flag;
        this.currentPlayer = this.players[+(!this.flag)];
        this.moveInfo.innerHTML = 'Ходит ' + this.currentPlayer;
    }
    endRound() {
        if (this.currentPlayer === this.firstPlayer) {
            this.crossScoreElem.innerHTML = +(this.crossScoreElem.innerHTML) + 1;
        } else {
            this.cicleScoreElem.innerHTML = +(this.cicleScoreElem.innerHTML) + 1;
        }
        this.flag = !this.flag;
        this.currentPlayer = this.players[+(!this.flag)];
        setTimeout(() => {
            this.newRound()
        }, 2000);
    }
}

const settings = document.getElementById('game-settings');
const newGameBtn = document.getElementById('new-game-btn');
const startBtn = document.getElementById('game-settings__start-game');
const rowsAndColumns3 = document.querySelector('.game-settings__option_3');
const rowsAndColumns5 = document.querySelector('.game-settings__option_5');
const rowsAndColumns10 = document.querySelector('.game-settings__option_10');
const rowsAndColumns15 = document.querySelector('.game-settings__option_15');
let cellsOnGameboard = 3;
settings.addEventListener('click', (e) => {
    if (e.target == rowsAndColumns3) {
        cellsOnGameboard = 3;
    } else if (e.target == rowsAndColumns5) {
        cellsOnGameboard = 5;
    } else if (e.target == rowsAndColumns10) {
        cellsOnGameboard = 10;
    } else if (e.target == rowsAndColumns15) {
        cellsOnGameboard = 15;
    }
});

function start() {
    const newGame = new ticTac(cellsOnGameboard);
    settings.style.visibility = 'hidden';
    cellsOptions.style.visibility = 'hidden';
    closeOptions();
    newGame.newRound();
};

newGameBtn.addEventListener('click', (e) => {
    settings.style.visibility = 'visible';
    startBtn.addEventListener('click', start);
});

const cellsButton = document.querySelector('.game-settings__cells-select');
const cellsOptions = document.querySelector('.game-settings__options');

let isOpen = false;

const openOptions = (e) => {
    if (isOpen) return;
    cellsOptions.style.visibility = 'visible';
    let ms = 0;
    const id = setInterval(() => {
        ms += 5;
        if (ms === 100) {
            clearInterval(id);
        }
        cellsOptions.style.height = ms + 'px';
    }, 15);
    setTimeout(() => {
        isOpen = true;
        cellsButton.removeEventListener('click', openOptions);
        cellsButton.addEventListener('click', closeOptions);
    }, 0);
};

const closeOptions = (e) => {
    if (!isOpen) return;
    let ms = 100;
    const id = setInterval(() => {
        ms -= 5;
        if (ms === 0) {
            clearInterval(id);
            cellsOptions.style.visibility = 'hidden';
        }
        cellsOptions.style.height = ms + 'px';
    }, 15);
    setTimeout(() => {
        isOpen = false;
        cellsButton.removeEventListener('click', closeOptions);
        cellsButton.addEventListener('click', openOptions);
    }, 0);
};

cellsButton.addEventListener('click', openOptions);
