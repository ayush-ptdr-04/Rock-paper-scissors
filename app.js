const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor( Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    msg.innerText="Game Draw";
    msg.style.backgroundColor="#3D3A3A";
}

const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#4FAD64";
     } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#CB4545";
     }
}

const playGame = (userChoice) => {
     console.log("user choice = ",userChoice);
     //Genrate computer choice
     const compChoice = genCompChoice();
     console.log("comp choice = ",compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){           
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){   
            userWin = compChoice === "scissors" ? false : true;
        } else {          //userwin === scissors 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener( "click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});