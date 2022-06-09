"use strict";

const gameBoard = (() => {

    const board = ["","","","","","","","",""];

    const resetBoardArray = () => {
        for (let i = 0; i < 9; i++){
            board[i] = "";
        }
    }

    return {board, resetBoardArray};
})();

const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    };
    return {getSign};
};

const gameFlow = (() => {
    const fieldElements = document.querySelectorAll(".field");
    const turnMessage = document.getElementById("turn_message");
    const restartButton = document.querySelector("button");
    const playerO = player("O").getSign();
    const playerX = player("X").getSign();
    let lastPlayed = playerX;
    let moveCount = 0;
    let winner;

    const gameOver = () => {
        if (winnerFound()){
            console.log("WINNER!");
            return true;
        }
        else if (drawFound()){
            console.log("DRAW");
            return true;
        }
        else{
            console.log("winner not found yet");
            return false;
        }
    };

    const drawFound = () => {
        for (let i = 0; i < 9; i++){
            if (gameBoard.board[i] === ""){
                return false;
            }
        }
        return true;
    }
    
    const winnerFound = () => {
        let score;
        const winningCombos = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[3,4,5],[6,7,8],[2,5,8]];
        for (let i = 0; i < 8; i++){
            score = 0;
            for (let k = 0; k < 3; k++){
                if (gameBoard.board[winningCombos[i][k]]==="O"){
                    score ++;
                    if (score === 3){
                        winner = playerO;
                        return true;
                    }
                }
            }
        }
        for (let i = 0; i < 8; i++){
            score = 0;
            for (let k = 0; k < 3; k++){
                if (gameBoard.board[winningCombos[i][k]]==="X"){
                    score ++;
                    if (score === 3){
                        winner = playerX;
                        return true;
                    }
                }
            }
        }
        return false;
     }

    restartButton.addEventListener("click", function(){
        gameBoard.resetBoardArray();
        fieldElements.forEach(fieldElement => fieldElement.textContent = "");
    })
    
    let currentPlayer = playerO;

    fieldElements.forEach(fieldElement => fieldElement.addEventListener("click",function(){
        if (gameOver()){
            if (winnerFound()){
                turnMessage.textContent = "Player " + winner + " Wins!";
                return;
            }
            else{
                turnMessage.textContent = "It's a Draw!";
                return;
            }
        }
        else{
            fieldElement.textContent = currentPlayer;
            gameBoard.board[fieldElement.dataset.indexNumber] = currentPlayer; 
            if (gameOver()){
                if (winnerFound()){
                    turnMessage.textContent = "Player " + winner + " Wins!";
                    return;
                }
                else{
                    turnMessage.textContent = "It's a Draw!";
                    return;
                }
            }
            else{
                let temp = lastPlayed;
                lastPlayed = currentPlayer;
                currentPlayer = temp;
                turnMessage.textContent = "Player " + currentPlayer + "'s Turn";
                moveCount = moveCount + 1;
                console.log("move count" + moveCount);
                return;
            }
        }
    }))

    return {};
    })();
