$(document).ready ( () => {

    let turn = 1;
    let counter = 1;
    let spaces = Array(9).fill(null);
    let currentPlayer = 'X';
    const winningCombos = [
        [1,2,3],
        [1,4,7],
        [1,5,9],
        [2,5,8],
        [3,5,7],
        [4,5,6],
        [3,6,9]
    ];

    $('table tr td').click(function (e) {
        let id = e.target.id;
        

        if ( $(this).text() == '' && turn) {
            if ( turn === 1 ) {
                $(this).append('X');
                $(this).css('color', 'red');
                currentPlayer = $(this).text();
                spaces[id] = currentPlayer;
                e.target.innerText = currentPlayer;
                counter++;
                turn = 2;
                
            } else {
                $(this).append('O');
                $(this).css('color', 'blue');
                currentPlayer = $(this).text();
                spaces[id] = currentPlayer;
                e.target.innerText = currentPlayer;
                counter++;
                turn = 1;
                
            };
        }

       
        checkWin();

        if ( checkWin() != false ) {
            alert (`${currentPlayer} is the Winner!\n\nEnd of Game`);
            reset();
        } else if( counter > 9) {
            alert ('TIE');
            reset();
        } 
       
    });

    function checkWin() {
        for (let condition of winningCombos) {
            let [a,b,c] = condition;
            if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
                return [a,b,c]
            } 
        }
        return false;
    };

    function reset () {
        $('table tr td').empty();
        currentPlayer = 'X'
        turn = 1;
        counter = 1
        spaces = Array(9).fill(null);
    
    };
  
});
