 let userScore = 0;
 let compScore = 0;
 let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
 let userscore= document.querySelector(".user-score");
 let compScorePara= document.querySelector(".comp-score")


 const genCompChoice=()=>{
let options=["rock","paper","scissors"];
const ranIdx= Math.floor(Math.random()*3);
 return options[ranIdx];

 }
 const showWinner=(userWin,compchoice,userChoice)=>{
    if(userWin){
        console.log("You win");
        msg.innerText=`you win! and yours ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor= "green";
       
            ++userScore;
            userscore.innerText=`${userScore}`;

        



    }else{
        console.log("you loose");
        msg.innerText= `You loose ! and ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=`${compScore}`

    }
 }
const playgame=(userChoice)=>{
console.log("userChoice is=", userChoice);
const compchoice= genCompChoice();
console.log( "comp choice is ", compchoice);

if(userChoice===compchoice){
    console.log("the game is Draw");
    msg.innerText=" the game was Draw ";
    msg.style.backgroundColor="black";
   

}else {
   let  userWin=true;
   if(userChoice==="rock"){
    userWin = compchoice ==="paper" ? false : true;
   }
   else if(userChoice==="paper"){
    userWin = compchoice ==="rock" ? true : false;
   }
   else {
    userWin = compchoice === "rock" ? false : true;


   }
   showWinner(userWin,compchoice,userChoice)
   }


};




  choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
playgame(userChoice);


    })
  })


