$(document).ready ( () => {

    let turn = 1;
    let counter = 1;
    let spaces = Array(9).fill(null);
    let currentPlayer = 'X';

    // Game winning Combinations
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
        let id = e.target.id; // targert id of the box selected.
        

        if ( $(this).text() == '' && turn) {
            if ( turn === 1 ) {
                $(this).append('X');
                $(this).css('color', 'red');
                currentPlayer = $(this).text(); // current player becomes the appended string
                spaces[id] = currentPlayer;
                e.target.innerText = currentPlayer; // selected box becomes current player
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
            $('#tic-tac-toe').text(`${currentPlayer} is the Winner! End of Game`); // change the title to the winner
            $('#myAlert').append('<button class="btn-styled" type="button"> RESET </button>'); // create a button that appears after a game is done
            $('button').click(function () {
                reset ()
            });
            // alert (`${currentPlayer} is the Winner!\n\nEnd of Game`);
            // reset();
        } else if( counter > 9) {
            // alert ('TIE');
            $('#tic-tac-toe').text(`TIE! End of Game`);
            $('#myAlert').append('<button class="btn-styled" type="button"> RESET </button>');
            $('button').click(function () {
                reset ()
            });
            // reset();
        } 
       
    });

    function checkWin() {
        for (let condition of winningCombos) {
            let [a,b,c] = condition;
            // need to compare winning combos with each players
            if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) { 
                return [a,b,c]
            } 
        }
        return false;
    };

    function reset () {
        $('table tr td').empty();
        $('#tic-tac-toe').text('TIC TAC TOE')
        $('button').remove();
            currentPlayer = 'X'
            turn = 1;
            counter = 1
            spaces = Array(9).fill(null);
        
    };
  
});
