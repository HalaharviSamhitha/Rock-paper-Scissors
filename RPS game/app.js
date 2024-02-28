let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector(".msg");
const userscorepara= document.querySelector("#userscore");
const compscorepara= document.querySelector("#compscore");
// display of the winner
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        console.log("you lost");
        compscorepara.innerText=compscore;
        msg.innerText=`You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
// generation of random choice by computer function
const drawgame=()=>{
    console.log("The game was draw.");
    msg.innerText="The game was draw! Play again!";
    msg.style.backgroundColor="#081b31";
}
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}

const playgame=(userchoice)=>{
    console.log("userchoice:",userchoice);
    // generate random choice by computer
    const compchoice=gencompchoice();
    console.log("computer choice:",compchoice);
    if(userchoice===compchoice){
        drawgame();
    } else{
        userwin= true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper"?false: true;
        }else if(userchoice==="paper"){
           userwin= compchoice==="scissors"?false:true;
        }else{
            // rock,paper
            userwin= compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice= choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})