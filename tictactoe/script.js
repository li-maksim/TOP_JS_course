const Gameboard = (() => {
    const body = document.querySelector('body');
    const board = document.createElement('div');
    board.setAttribute('class', 'board');
    const gameboard = [];
    for (i = 0; i < 9; i++) {
        const sector = document.createElement('div');
        sector.setAttribute('class', 'sector');
        board.appendChild(sector);
        gameboard.push(sector);
    };
    body.appendChild(board);

    return {gameboard}
})();

const player1 = {
    name: 'Player 1',
    score: 0,
    changeName(newName) {
        this.name = newName;
    },
    incrScore() {
        let playerScore = this.score;
        playerScore++;
        this.score = playerScore;
    }
};

const player2 = {
    name: 'Player 2',
    score: 0,
    changeName(newName) {
        this.name = newName;
    },
    incrScore() {
        let playerScore = this.score;
        playerScore++;
        this.score = playerScore;
    }
};