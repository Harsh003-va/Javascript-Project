let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count =0;
const resetGame=()=>{
    turnO = true;
    count=0;
    enableBoxs();
    msgContainer.classList.add("hide");
}
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
      
        
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="#5D12D2";
        }else{
            box.innerText="X";
            turnO=true;
            box.style.color="coral";
        }
        box.disabled=true;
        count++;
      let isWinner =  checkWinner();
      if(count === 9 && !isWinner){
        gameDraw();
      }
    });
});

const gameDraw =()=>{
    msg.innerText=`Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxs();
}


const disableBoxs =()=>{
for(let box of boxs){
    box.disabled=true;
}
}

const enableBoxs =()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
    }


const showWinner =(winner)=>{

msg.innerText=`Congrations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxs();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
       
          let pos1Val =  boxs[pattern[0]].innerText;
           let pos2Val = boxs[pattern[1]].innerText;
          let pos3Val =  boxs[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val ===pos3Val){
              

                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);