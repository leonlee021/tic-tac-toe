"use strict";

const gameBoard = (() => {

    const board = ["","","","","","","","",""];

    const resetBoard = () => {
        for (let i = 0; i < 9; i++){
            board[i] = "";
        }
    }

    return {board, resetBoard};
})();

const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    };
    return {getSign};
};

const gameFlow = (() => {

    const gameOver = () => {
        if (winnerFound()){
            alert("WINNER!");
            gameBoard.resetBoard();
            return true;
        }
        else if (drawFound()){
            alert("DRAW");
            gameBoard.resetBoard();
            return true;
        }
        else{
            console.log("winner not found yet");
            return false;
        }
    };

    if (!gameOver){
        if (lastPlayed == playerO){
            makeMove(playerX);
        }
        else{
            makeMove(playerO);
        }
    }

    const fieldElements = document.querySelectorAll(".field");
    const playerO = player("O");
    const playerX = player("X");
    let lastPlayed;

    const drawFound = () => {
        for (let i = 0; i < 9; i++){
            if (gameBoard.board[i] !== null){
                return false;
            }
        }
        return true;
    }
    
    const winnerFound = () => {
        let score;
        const winningCombos = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[3,4,5],[6,7,8]];
        for (let i = 0; i < 7; i++){
            score = 0;
            for (let k = 0; k < 3; k++){
                if (gameBoard.board[winningCombos[i][k]]==="O"){
                    score ++;
                    if (score === 3){
                        return true;
                    }
                }
            }
        }
        return false;
     }

    lastPlayed = playerX;
    
    const makeMove = (currentPlayer) => {
        fieldElements.forEach(fieldElement => fieldElement.addEventListener("click",function(){
            fieldElement.textContent = currentPlayer.getSign();
            console.log(currentPlayer.getSign());
            gameBoard.board[fieldElement.dataset.indexNumber] = currentPlayer.getSign(); 
            lastPlayed = currentPlayer;
            return;
        }));
     };
    
     return {makeMove};
    })();
