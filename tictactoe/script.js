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
    const sectors = document.querySelectorAll('.sector');
    sectors.forEach(function(btn, idx) {
        function addMark() {
            changeMark(idx, 'x');
            showGB();
            GameLogic.checkWinner();
        };
        btn.addEventListener('click', addMark);
    });

    return {gameboard, changeMark}
})();

const Player1 = {
    name: 'Player 1',
    score: 0,
    playerMark: 'x',
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
    playerMark: 'o',
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
    const markX = Player1.playerMark;
    const markO = Player2.playerMark;
    function checkWinner() {
        if ((Gameboard.gameboard[0].mark == markX &&
            Gameboard.gameboard[1].mark == markX &&
            Gameboard.gameboard[2].mark == markX) ||
            (Gameboard.gameboard[3].mark == markX &&
            Gameboard.gameboard[4].mark == markX &&
            Gameboard.gameboard[5].mark == markX) ||
            (Gameboard.gameboard[6].mark == markX &&
            Gameboard.gameboard[7].mark == markX &&
            Gameboard.gameboard[8].mark == markX) ||
            (Gameboard.gameboard[0].mark == markX &&
            Gameboard.gameboard[3].mark == markX &&
            Gameboard.gameboard[6].mark == markX) ||
            (Gameboard.gameboard[1].mark == markX &&
            Gameboard.gameboard[4].mark == markX &&
            Gameboard.gameboard[7].mark == markX) ||
            (Gameboard.gameboard[2].mark == markX &&
            Gameboard.gameboard[5].mark == markX &&
            Gameboard.gameboard[8].mark == markX) ||
            (Gameboard.gameboard[0].mark == markX &&
            Gameboard.gameboard[4].mark == markX &&
            Gameboard.gameboard[8].mark == markX) ||
            (Gameboard.gameboard[2].mark == markX &&
            Gameboard.gameboard[4].mark == markX &&
            Gameboard.gameboard[6].mark == markX)
        ) {
            alert(`${Player1.name} wins!`);
        } else if (
            Gameboard.gameboard[0].mark,
            Gameboard.gameboard[1].mark,
            Gameboard.gameboard[2].mark == markO ||
            Gameboard.gameboard[3].mark,
            Gameboard.gameboard[4].mark,
            Gameboard.gameboard[5].mark == markO ||
            Gameboard.gameboard[6].mark,
            Gameboard.gameboard[7].mark,
            Gameboard.gameboard[8].mark == markO ||
            Gameboard.gameboard[0].mark,
            Gameboard.gameboard[3].mark,
            Gameboard.gameboard[6].mark == markO ||
            Gameboard.gameboard[1].mark,
            Gameboard.gameboard[4].mark,
            Gameboard.gameboard[7].mark == markO ||
            Gameboard.gameboard[2].mark,
            Gameboard.gameboard[5].mark,
            Gameboard.gameboard[8].mark == markO ||
            Gameboard.gameboard[0].mark,
            Gameboard.gameboard[4].mark,
            Gameboard.gameboard[8].mark == markO ||
            Gameboard.gameboard[2].mark,
            Gameboard.gameboard[4].mark,
            Gameboard.gameboard[6].mark == markO
        ) {
            alert((`${Player2.name} wins!`))
        } else {
            alert('Tie!');
        }
    };

    return {checkWinner};
})();

function showGB() {
    console.table(Gameboard.gameboard);
};