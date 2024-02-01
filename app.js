
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let us=0;
let cs=0;

let genCompChoice = ()=>{
   let arr= ["rock","paper","scissors"];
   let randomidx = Math.floor(Math.random() * 3);
   console.log(arr[randomidx]);
   return arr[randomidx];
}

let draw = ()=>{
    console.log("game is draw");
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#f4e285"
}

let userWin = (userChoice,compChoice)=>{
    console.log("you won");
    us++;
    userScore.innerText = us;
    msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#81b29a"
}

let compWin = (userChoice,compChoice)=>{
    console.log("You lost");
    cs++;
    compScore.innerText=cs;
    msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#9b2226"
}

let playGame = (userChoice)=>{
    //generating comp choice
    let compChoice = genCompChoice();
    //comparing

    if(userChoice == compChoice){
        draw();
    }
    
    else if(userChoice=="rock"){
        if(compChoice=="scissors"){
            // userwin
            userWin(userChoice,compChoice);
        }
        else{
            //compwin
            compWin(userChoice,compChoice);
        }
    }
    
    else if(userChoice=="paper"){
        if(compChoice=="rock"){
           // userwin
           userWin(userChoice,compChoice);
        }
        else{
           //compwin
           compWin(userChoice,compChoice);
        }
    }
    
    else if(userChoice=="scissors"){
        if(compChoice=="rock"){
            //compwin
            compWin(userChoice,compChoice);
        }
        else{
            // userwin
           userWin(userChoice,compChoice);
        }
    }


}



choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute("id");
    console.log("clicked",userChoice);
    playGame(userChoice);
  })
});


