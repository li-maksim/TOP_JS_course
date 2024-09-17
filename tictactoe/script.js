const Gameboard = (() => {
    const body = document.querySelector('body');
    const board = document.createElement('div');
    board.setAttribute('class', 'board');
    const gameboard = [];
    for (i = 0; i < 9; i++) {
        const sector = document.createElement('div');
        sector.setAttribute('class', 'sector');
        board.appendChild(sector);
        const sectorID = {mark: ''};
        gameboard.push(sectorID);
    };
    function changeMark(num, val) {
        if (val == 'x' && gameboard[num].mark == '') {
            gameboard[num].mark = 'x';
        } else  if (val == 'o' && gameboard[num].mark == '') {
            gameboard[num].mark = 'o';
        };
    };
    body.appendChild(board);

    return {gameboard, changeMark}
})();

const Player1 = {
    name: 'Player 1',
    score: 0,
    playerMark: 'x';
    changeName(newName) {
        this.name = newName;
    },
    incrScore() {
        let playerScore = this.score;
        playerScore++;
        this.score = playerScore;
    }
};

const Player2 = {
    name: 'Player 2',
    score: 0,
    playerMark: 'o';
    changeName(newName) {
        this.name = newName;
    },
    incrScore() {
        let playerScore = this.score;
        playerScore++;
        this.score = playerScore;
    }
};

const GameLogic = (() => {

})();

function showGB() {
    console.table(Gameboard.gameboard);
};