let score=JSON.parse(localStorage.getItem('score'));
if(score===null)
{
    score={
        wins:0,
        lose:0,
        tie:0
    }
}

let tally=document.getElementById('tally');
tally.innerHTML=`Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`

function compMove()
{
    let randNum = Math.random();
    if(randNum>=0 && randNum< 1/3)
        compPick='rock';
    else if(randNum>=1/3 && randNum <2/3)
        compPick='paper';
    else
        compPick='scissors';
    console.log(compPick);
    return(compPick);
}

function playGame(playerMove)
{
    let compPick=compMove();
    if(compPick===playerMove)
        result= 'Tie';
    else 
    {
        if(playerMove==='scissors')
        {
            if(compPick==='rock')
                result='You lose';
            else if(compPick==='paper')
                result= 'You win';
        }
        else if(playerMove==='paper')
        {
            if(compPick==='rock')
                result='You win';
            else if(compPick==='scissors')
                result= 'You lose';
        }
        else if(playerMove==='rock')
        {
            if(compPick==='paper')
                result= 'You lose';
            else if(compPick==='scissors')
                result= 'You win';
        }
    }
    if(result=='You lose')
        score.lose++;
    else if(result=='You win')
        score.wins++;
    else
        score.tie++;
    localStorage.setItem('score', JSON.stringify(score));

    let outcome=document.getElementById('outcome');
    let moves=document.getElementById('moves');

    outcome.innerHTML=result;
    moves.innerHTML=`You ${playerMove} - ${compPick} Computer`;
    moves.innerHTML=`You
        <img src="images/${playerMove}.png" alt="">
        <img src="images/${compPick}.png" alt="">
        Computer`;
    tally.innerHTML=`Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`

}
