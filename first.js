let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscored=document.querySelector("#your")
const compscored=document.querySelector("#comp")

const gencompchoice =()=>{
    const options=["rock","paper","scissors"]
    const compidx=Math.floor(Math.random()*3);
    return options[compidx];
}

const showwinner=(userwin, userchoice, compchoice)=>{
    if(userwin===true){
        userscore++;
        userscored.innerText=userscore;
        console.log("userwon");
        msg.innerText=`You Won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscored.innerText=compscore;
        console.log("compwon");
        msg.innerText=`You Lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    
    if(compchoice===userchoice){
        console.log("Game was draw")
        msg.innerText="It's a Draw. Play again!"
        msg.style.backgroundColor="cadetblue";
    }
    else{
        let userwin=true;
        if(userchoice==="scissors" && compchoice==="rock"){
            userwin=false;
              }
        else if(userchoice==="rock" && compchoice==="paper"){
            userwin=false;}
              
              else if(userchoice==="paper" && compchoice==="scissors"){
                userwin=false;
                }
                showwinner(userwin, userchoice,compchoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice)

    })
})

