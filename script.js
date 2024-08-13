let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscore = document.querySelector("#user-score");
const botscore = document.querySelector("#bot-score");

const BotChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock, paper, scissors
};

const drawGame = () =>{
    msg.innerText = "Tie!!"
}

const ShowWinner = (userWin, userChoice, botChoice) =>{
    if(userWin){
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        botScore++;
        botscore.innerText = botScore;
        msg.innerText = `Bot Win!! ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const botChoice = BotChoice();
    console.log("bot choice = ", botChoice);

    if(userChoice == botChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            botChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = botChoice === "scissors" ? false : true;
        }
        else{
            userWin = botChoice === "rock" ? false : true;
        }
    ShowWinner(userWin, userChoice, botChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});