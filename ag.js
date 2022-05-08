const choices = ['UP', 'DOWN', 'LEFT', 'RIGHT', '&uarr;', '&darr;', '&larr;', '&rarr;'];
let correct = false;
let playerScore = 0;
let playerHighscore = 0;
let delay = 3000;

const command = document.querySelector('#command');
const timeBar = document.querySelector('#timebar');
const score = document.querySelector('#score');
const highscore = document.querySelector('#highscore');

const getRandNum = ()=>{return Math.floor(Math.random()*8);};
let randNum = -1;

const getRandChoice = ()=>{return choices[randNum]};
let randChoice = getRandChoice()

const updateCommand = ()=>{
    randNum = getRandNum(); randChoice = getRandChoice();
    command.innerHTML = randChoice;
}

const gameOver = ()=>{
    document.querySelector('.container').style.backgroundColor = 'red';
    command.innerText = 'GAME OVER';
    document.querySelector('#gotext').style.display = 'flex';
    randNum = -1;
}

window.addEventListener('keydown', (e)=>{
    console.log(e.code);
    if (e.code === 'Space') {
        if (randNum === -1){
            command.style.fontSize = '5em'; 
            document.querySelector('.container').style.backgroundColor = '#a8dadc';
            document.querySelector('#gotext').style.display = 'none';
            playerScore = 0;
            updateCommand();}
    }
    else if (e.code === 'ArrowUp' || e.code === 'KeyW') { //UP
        if (randNum === 0 || randNum === 4) {correct = true; playerScore++;}
        else {console.log('WRONG'); gameOver();}
    }
    else if (e.code === 'ArrowDown' || e.code === 'KeyS') { //DOWN
        if (randNum === 1 || randNum === 5) {correct = true; playerScore++;}
        else {console.log('WRONG'); gameOver();}
    }
    else if (e.code === 'ArrowLeft' || e.code === 'KeyA') { //LEFT
        if (randNum === 2 || randNum === 6) {correct = true; playerScore++;}
        else {console.log('WRONG'); gameOver();}
    }
    else if (e.code === 'ArrowRight' || e.code === 'KeyD') { //RIGHT
        if (randNum === 3 || randNum === 7) {correct = true; playerScore++;}
        else {console.log('WRONG'); gameOver();}
    }
    if (correct) {correct = false; updateCommand();}

    if (playerScore > playerHighscore) {playerHighscore = playerScore;}
    score.innerText = playerScore;
    highscore.innerText = playerHighscore;
})
