document.addEventListener('DOMContentLoaded', () => {
    const width = 10;
    const height = 20;

    const lTetromino = [
        [1, width+1, width*2+1, 2], 
        [width, width+1, width+2, width*2+2], 
        [1, width+1, width*2+1, width*2], 
        [width, width*2, width*2+1, width*2+2]
    ];
    const zTetromino = [
        [0, width, width+1, width*2+1], 
        [width+1, width+2, width*2, width*2 +1], 
        [0, width, width+1, width*2+1], 
        [width+1, width+2, width*2, width*2 +1]
    ];
    const tTetromino = [
        [1, width, width+1, width+2], 
        [1, width+1, width+2, width*2+1], 
        [width, width+1, width+2, width*2+1], 
        [1, width, width+1, width*2+1]
    ];
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1], 
        [width, width+1, width+2, width+3], 
        [1, width+1, width*2+1, width*3+1], 
        [width, width+1, width+2, width+3]
    ];
    const oTetromino = [
        [0, width, 1, width+1], 
        [0, width, 1, width+1], 
        [0, width, 1, width+1], 
        [0, width, 1, width+1]
    ];

    const allTetrominos = [lTetromino, zTetromino, iTetromino, oTetromino];

    let cells = Array.from(document.querySelectorAll('.grid div'));
    let currentTetromino = allTetrominos[0][0];
    let currentPosition = 4;

    function draw() {
        currentTetromino.forEach(drawingOffset => {
            cells[currentPosition + drawingOffset].classList.add('falling-tetromino');
        });
    }

    function undraw() {
        currentTetromino.forEach(drawingOffset => {
            cells[currentPosition + drawingOffset].classList.remove('falling-tetromino');
        });
    }

    draw();

});

