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