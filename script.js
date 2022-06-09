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
    console.log("starting game flow");
    const fieldElements = document.querySelectorAll(".field");
    const playerO = player("O").getSign();
    const playerX = player("X").getSign();
    let lastPlayed = playerX;
    let moveCount = 0;

    const gameOver = () => {
        if (winnerFound()){
            console.log("WINNER!");
            gameBoard.resetBoard();
            return true;
        }
        else if (drawFound()){
            console.log("DRAW");
            gameBoard.resetBoard();
            return true;
        }
        else{
            console.log("winner not found yet");
            return false;
        }
    };

    const drawFound = () => {
        if (moveCount === 8){
            return true;
        }
        return false;
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
        for (let i = 0; i < 7; i++){
            score = 0;
            for (let k = 0; k < 3; k++){
                if (gameBoard.board[winningCombos[i][k]]==="X"){
                    score ++;
                    if (score === 3){
                        return true;
                    }
                }
            }
        }
        return false;
     }
    
    let currentPlayer = playerO;

    fieldElements.forEach(fieldElement => fieldElement.addEventListener("click",function(){
        fieldElement.textContent = currentPlayer;
        gameBoard.board[fieldElement.dataset.indexNumber] = currentPlayer; 
        if (gameOver()){
            return;
        }
        else{
            let temp = lastPlayed;
            lastPlayed = currentPlayer;
            currentPlayer = temp;
            moveCount = moveCount + 1;
            console.log("move count" + moveCount);
            return;
        }
    }))

    return {};
    })();
