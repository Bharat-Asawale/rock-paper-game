const game = () => {
    let playerScore=0;
    let computerScore=0;
    let tieScore=0;
    let moves=0;

    const restart=document.querySelector('.reset');
    restart.addEventListener('click',()=>{
        window.location.reload();
    })

    const playGame=()=>{
        const rockBtn=document.querySelector('.rock');
        const paperBtn=document.querySelector('.paper');
        const scissorBtn=document.querySelector('.scissor');
        const playerOptions=[rockBtn,paperBtn,scissorBtn];
        const computerOptions=['rock','paper','scissor'];

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                winner(this.innerText,computerChoice)
                 
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
    }

    const winner = (player,computer) => {

        loadImg(player,computer);

        const result=document.querySelector('.reult-msg');
        const playerRes=document.querySelector('.win-result');
        const computerRes=document.querySelector('.lose-result');
        const tieRes=document.querySelector('.tie-result');

        player=player.toLowerCase();
        computer=computer.toLowerCase();

        if(player==computer){
            result.textContent="Tie";
            tieScore++;
            tieRes.textContent=tieScore;

        }
        else if(player == 'rock'){

            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerRes.textContent = computerScore;
 
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerRes.textContent = playerScore;
            }
        }
        else if(player == 'scissor'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerRes.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerRes.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissor'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerRes.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerRes.textContent = playerScore;
            }
        }
    }

    const gameOver = (playerOptions,movesLeft) => {
    
        const result=document.querySelector('.reult-msg');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
        
        movesLeft.innerText = 'Game Over!!'
        if(playerScore>computerScore){
            result.innerText='You Won The Game';
        }else if(playerScore < computerScore){
            result.innerText = 'You Lost The Game';
        } else{
            result.innerText = 'Tie';
        }
    }

    playGame();


    const loadImg = (player,computer) => {
        if(player=="Rock"){
            document.getElementById("img1").innerHTML="<img src='../rock.png' width=100% height=100%>";
        }
        else if(player=="Paper"){
            document.getElementById("img1").innerHTML="<img src='../paper.png' width=100% height=100%>";
        }
        else if(player=="Scissor"){
            document.getElementById("img1").innerHTML="<img src='../scissor.png' width=100% height=100%>";
        }

        if(computer=="rock"){
            document.getElementById("img2").innerHTML="<img src='../rock.png' width=100% height=100%>";
        }
        else if(computer=="paper"){
            document.getElementById("img2").innerHTML="<img src='../paper.png' width=100% height=100%>";
        }
        else if(computer=="scissor"){
            document.getElementById("img2").innerHTML="<img src='../scissor.png' width=100% height=100%>";
        }
    }

}

game();