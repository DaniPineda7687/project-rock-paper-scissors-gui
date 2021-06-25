const option1= "paper";
const option2= "rock";
const option3= "scissors";
const options = document.querySelectorAll(".player-options input");
const userPointsShow = document.querySelector(".user-points");
const machinePointsShow = document.querySelector(".machine-points");
const computerOptionShow = document.querySelector(".computer-option");
const imageComputer = document.querySelector("#option-computer");
const results = document.querySelector(".results #round-result");
const finishResult = document.querySelector(".results #finish-result");
const buttonRetry = document.querySelector(".retry");

let userPoints=0;
let computerPoints=0;
let userOption;
let count=0;
buttonRetry.style.display="none" 
const computerPlay=()=>{
    let options = ["rock","paper","scissors"];
    let optionComputer = Math.floor(Math.random()*3);
    return options[optionComputer];   
}

options.forEach(option=>option.addEventListener("click",(e)=>{
    if(count<5){
        userOption = e.target.id;
        machineOption = computerPlay();
        results.textContent=playRound(userOption,machineOption);
        imageComputer.setAttribute("src",`resources/${machineOption}.jpg`);
        userPointsShow.textContent=`User points: ${userPoints}`;
        machinePointsShow.textContent=`Machine points: ${computerPoints}`;
        count++;
        isFinish();
    }
}));

function isFinish(){
    if(count==5){
        if(userPoints==computerPoints){
            writeEffect(finishResult,`Its a tie ${userPoints}-${computerPoints}`);
        }else if(userPoints>computerPoints){
            writeEffect(finishResult,`You win! ${userPoints}-${computerPoints}`);
        }else{
            writeEffect(finishResult,`You lose! ${userPoints}-${computerPoints}`);
        }
        buttonRetry.style.display="block" 
    }
}

function playRound(userSelection, pcSelection){
        if(userSelection==pcSelection){
            userPoints+=0;
            computerPoints+=0;
            return `It's a tie`;          
        }else if((userSelection==option1)&&(pcSelection==option2)){
            userPoints+=1;
            computerPoints+=0;
            return `You Win! ${userSelection} beats ${pcSelection}`;
        }else if((userSelection)==option1&&(pcSelection==option3)){
            userPoints+=0;
            computerPoints+=1;
            return `You Lose! ${pcSelection} beats ${userSelection}`;
        }else if((userSelection)==option2&&(pcSelection==option1)){
            userPoints+=0;
            computerPoints+=1;
            return `You Lose! ${pcSelection} beats ${userSelection}`;
        }else if((userSelection)==option2&&(pcSelection==option3)){
            userPoints+=1;
            computerPoints+=0;
            return `You Win! ${userSelection} beats ${pcSelection}`;
        }else if((userSelection)==option3&&(pcSelection==option1)){
            userPoints+=1;
            computerPoints+=0;
            return `You Win! ${userSelection} beats ${pcSelection}`;
        }else if((userSelection)==option3&&(pcSelection==option2)){
            userPoints+=0;
            computerPoints+=1;
            return `You Lose! ${pcSelection} beats ${userSelection}`;
        }
}

function writeEffect(component,sentence){
    let words = sentence.split('');
    let i=0;
    let x = setInterval(()=>{
        component.textContent+=words[i];
        i++;
        if(i==words.length){
            clearInterval(x);
        }
    },90)
}
buttonRetry.addEventListener("click",()=>{
    location.reload();
});





