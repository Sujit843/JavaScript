let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const gameDraw = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw Play again";
    msg.style.background = "black";
}

const showWinner = (userWin) =>{
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = "You Win!";
    msg.style.background = "red";
}else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = "You Lose";
    msg.style.background = "green";
}
}

const playGame = (userChoice) => {
    console.log("user choice" , userChoice);
    // Genterate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice ", compChoice);

    if(userChoice === compChoice){
        // draw Game 
        gameDraw(); 
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin);
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



