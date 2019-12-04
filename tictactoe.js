var user1 = 'X'; //for player 1
var user2 = 'O'; //for player 2
var userTurn = 1; //to keep track of who's turn it is
var resetBoard = $('.resetButton'); //for reset button

var square = $('.squares');


square.on('click', (e) => {
    if (userTurn % 2 === 1) { 					//odd number is player 1, even for player 2
        event.target.innerHTML = user1;
        event.target.style.color = "white";
        userTurn++;
    } else { 									//player 2s turn
        event.target.innerHTML = user2;
        event.target.style.color = "yellow";
        userTurn--;
    }

    if (checkForWinner()) { 					//runs a check for a winner after each turn
        theWinner = userTurn == 1 ? user2 : user1;
        declareWinner(theWinner);
    }
});

resetBoard.on('click', (e) => { 				//resets the board when clicked
    userTurn = 1;
	var xo = Array.prototype.slice.call($(".squares"));
    xo.map((m) => {
        m.innerHTML = "";
    });
});

function declareWinner(winner) { 				//displays a winner
    winner = winner === user1 ? 'X' : 'O';
    alert(winner + " Wins!\nReset Board to Play Again!");
}

function checkForWinner() {  					//compares user's sets with winning set
        var xo = Array.prototype.slice.call($(".squares"));
        var results = xo.map(function(square) { return square.innerHTML; });
        var winningsets = [
            [0,1,2],
			[0,3,6],
			[0,4,8],
			[1,4,7],
            [2,5,8],
            [2,4,6],
			[3,4,5],
			[6,7,8]
        ];
        return winningsets.find(function(set) { //if user sets match a winning set, return true
            if (results[set[0]] === results[set[1]] && 
				results[set[1]] === results[set[2]] &&
				results[set[0]] !== "" && 
				results[set[1]] !== "" && 
				results[set[2]] !== "" ) {
                return true;
            } else {
                return false;
            }
        });
    
}
//game instructions at start
alert("Play Tic-Tac-Toe!\nPlayer 1 goes first (X), followed by Player 2 (O).\nClick a square to mark, get three in a row to win.\nClick 'Reset' to clear the board.");