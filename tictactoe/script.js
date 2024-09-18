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
            if (GameLogic.checkTurns() == true && sectors[idx].textContent == '') {
                changeMark(idx, 'x');
                btn.textContent = 'x';
                GameLogic.switchTurns();
                GameLogic.checkWinner();
            } else if (GameLogic.checkTurns() == false && sectors[idx].textContent == '') {
                changeMark(idx, 'o');
                btn.textContent = 'o';
                GameLogic.switchTurns();
                GameLogic.checkWinner();
            }
        };
        btn.addEventListener('click', addMark);
    });

    return {gameboard, changeMark}
})();

const Player1 = {
    name: 'Player 1',
    score: 0,
    playerMark: 'x',
    turn: true,
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
    turn: false,
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
    function switchTurns() {
        switch (Player1.turn) {
            case true:
                Player1.turn = false;
                Player2.turn = true;
            break;
            case false:
                Player1.turn = true;
                Player2.turn = false;
            break;
        };
    };
    function checkTurns() {
        switch (Player1.turn) {
            case true:
                return true;
            break;
            case false:
                return false;
            break;
        };
    };
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
        } else if ((Gameboard.gameboard[0].mark == markO &&
            Gameboard.gameboard[1].mark == markO &&
            Gameboard.gameboard[2].mark == markO) ||
            (Gameboard.gameboard[3].mark == markO &&
            Gameboard.gameboard[4].mark == markO &&
            Gameboard.gameboard[5].mark == markO) ||
            (Gameboard.gameboard[6].mark == markO &&
            Gameboard.gameboard[7].mark == markO &&
            Gameboard.gameboard[8].mark == markO) ||
            (Gameboard.gameboard[0].mark == markO &&
            Gameboard.gameboard[3].mark == markO &&
            Gameboard.gameboard[6].mark == markO) ||
            (Gameboard.gameboard[1].mark == markO &&
            Gameboard.gameboard[4].mark == markO &&
            Gameboard.gameboard[7].mark == markO) ||
            (Gameboard.gameboard[2].mark == markO &&
            Gameboard.gameboard[5].mark == markO &&
            Gameboard.gameboard[8].mark == markO) ||
            (Gameboard.gameboard[0].mark == markO &&
            Gameboard.gameboard[4].mark == markO &&
            Gameboard.gameboard[8].mark == markO) ||
            (Gameboard.gameboard[2].mark == markO &&
            Gameboard.gameboard[4].mark == markO &&
            Gameboard.gameboard[6].mark == markO)
        ) {
            alert((`${Player2.name} wins!`))
        };
    };

    return {switchTurns, checkTurns, checkWinner};
})();

function showGB() {
    console.table(Gameboard.gameboard);
};