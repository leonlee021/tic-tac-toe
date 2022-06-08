// const gameBoard = (() => {

//     const board = ["","","","","","","","",""];

//     return board;
// })();

let board = ["","","","","","","","",""];

const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    };
    return {getSign};
};

const fieldElements = document.querySelectorAll(".field");

const playerO = player("O");
const playerX = player("X");

const makeMove = (currentPlayer) => {
    fieldElements.forEach(fieldElement => fieldElement.addEventListener("click",function(){
            fieldElement.textContent = currentPlayer.getSign();
            board[fieldElement.dataset.indexNumber] = currentPlayer.getSign(); 
            return;
    }));
 };


const fullBoard = () => {
    for (let i = 0; i < 9; i++){
        if (board[i] !== null){
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
            if (board[winningCombos[i][k]]==="O"){
                score ++;
                if (score === 3){
                    return true;
                }
                else{
                    continue;
                }
            }
        }
    }
    return false;
 }

const gameOver = () => {
    if (winnerFound() || fullBoard()){
        console.log("WINNER FOUND!");
    }
    else{
        console.log("winner not found yet");
    }
};

