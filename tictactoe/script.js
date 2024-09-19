const Gameboard = (() => {
    const gameboard = [];
    for (i = 0; i < 9; i++) {
        const sectorID = {mark: ''};
        gameboard.push(sectorID);
    };

    return {gameboard}
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
            Player1.score++;
            Display.scoreScreen1.textContent = Player1.score;
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
            alert(`${Player2.name} wins!`);
            Player2.score++;
            Display.scoreScreen2.textContent = Player2.score;
        };
    };

    function restart() {
        Gameboard.gameboard.forEach(function(item) {
            item.mark = '';
        });
        Display.sectors.forEach(function(item) {
            item.textContent = '';
        });
        Player1.turn = true;
        Player2.turn = false;
    };

    return {switchTurns, checkTurns, checkWinner, restart};
})();

const Display = (() => {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const board = document.createElement('div');
    board.setAttribute('class', 'board');
    for (i = 0; i < 9; i++) {
        const sector = document.createElement('div');
        sector.setAttribute('class', 'sector');
        board.appendChild(sector);
    };
    container.appendChild(board);
    body.appendChild(container);

    function changeMark(num, val) {
        if (val == 'x' && Gameboard.gameboard[num].mark == '') {
            Gameboard.gameboard[num].mark = 'x';
        } else  if (val == 'o' && Gameboard.gameboard[num].mark == '') {
            Gameboard.gameboard[num].mark = 'o';
        };
    };

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

    const restartFn = () => {GameLogic.restart()};
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('class', 'restart_btn');
    restartBtn.textContent = 'restart';
    restartBtn.addEventListener('click', restartFn);
    container.appendChild(restartBtn);

    const player1 = document.createElement('div');
    player1.setAttribute('class', 'player');
    player1.setAttribute('id', 'player1');
    const player2 = document.createElement('div');
    player2.setAttribute('class', 'player');
    player2.setAttribute('id', 'player2');
    const nick1 = document.createElement('div');
    nick1.setAttribute('class', 'nick');
    nick1.textContent = `${Player1.name} — X`;
    player1.appendChild(nick1);
    const nick2 = document.createElement('div');
    nick1.setAttribute('class', 'nick');
    nick2.textContent = `${Player2.name} — O`;
    player2.appendChild(nick2);

    const scoreScreen1 = document.createElement('div');
    scoreScreen1.setAttribute('class', 'screen');
    scoreScreen1.setAttribute('id', 'screen1');
    scoreScreen1.textContent = Player1.score;
    const scoreScreen2 = document.createElement('div');
    scoreScreen2.setAttribute('class', 'screen');
    scoreScreen2.setAttribute('id', 'screen2');
    scoreScreen2.textContent = Player2.score;
    player1.appendChild(scoreScreen1);
    container.appendChild(player1);
    player2.appendChild(scoreScreen2)
    container.appendChild(player2);

    const form1 = document.createElement('form');
    const name1 = document.createElement('input');
    name1.setAttribute('id', 'name1');
    const label1 = document.createElement('label');
    label1.setAttribute('class', 'names');
    label1.setAttribute('for', 'name1');
    label1.textContent = "Player 1's Name:"
    const btn1 = document.createElement('button');
    btn1.setAttribute('class', 'name_btn');
    btn1.textContent = 'Enter Name';
    function enterName1(evt) {
        evt.preventDefault();
        Player1.name = name1.value;
        nick1.textContent = `${Player1.name} — X`;
        name1.value = '';
        name1.textContent = '';
    };
    btn1.addEventListener('click', enterName1);
    form1.appendChild(label1);
    form1.appendChild(name1);
    form1.appendChild(btn1);
    player1.appendChild(form1);

    const form2 = document.createElement('form');
    const name2 = document.createElement('input');
    name2.setAttribute('id', 'name2');
    const label2 = document.createElement('label');
    label2.setAttribute('class', 'names');
    label2.setAttribute('for', 'name2');
    label2.textContent = "Player 2's Name:"
    const btn2 = document.createElement('button');
    function enterName2(evt) {
        evt.preventDefault();
        Player2.name = name2.value;
        nick2.textContent = `${Player2.name} — O`;
        name2.value = '';
        name2.textContent = '';
    };
    btn2.addEventListener('click', enterName2);
    btn2.setAttribute('class', 'name_btn');
    btn2.textContent = 'Enter Name';
    form2.appendChild(label2);
    form2.appendChild(name2);
    form2.appendChild(btn2);
    player2.appendChild(form2);


    return {sectors, restartFn, scoreScreen1, scoreScreen2};

})();

function showGB() {
    console.table(Gameboard.gameboard);
};