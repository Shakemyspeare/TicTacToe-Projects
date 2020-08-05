//This variable keeps track of who's turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We us this to determine win conditions.
let selectedSquares = []

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of selectedSquare array to see if it contains the square number clicked on.
    if (!selectedSquares.some (element =>element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X", the xpng is placed in HTML.
            select.style.backgroundImage'url("images/x.png")';
        //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O' the o.png is placed in HTML.
            select.style.backgroundImage'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condiditon is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
        //If active player is anything other than 'X'.
        } else {
            //Change the active player to 'X'.
            activePlayer = 'X';
        }

        //This function plays placement sound.
        Audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if(activePlayer==='O') {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before placing the image and enabling click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computerTurn() function to work.
        return true;
    }

    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while(!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluates returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}