const p1 = {
        score : 0,
        btn : document.querySelector('#p1Button'),
        display : document.querySelector('#p1score'),
        game : 0,
        games : document.querySelector('#p1games'),
        name : 'Player 1'
};
const p2 = {
        score : 0,
        btn : document.querySelector('#p2Button'),
        display : document.querySelector('#p2score'),
        game : 0,
        games : document.querySelector('#p2games'),
        name: 'Player 2'
};

const resetBtn = document.querySelector('#reset');
const playTo= document.querySelector('#playTo');
const numGames = document.querySelector('#Games');
const newGame = document.querySelector('#newGame');
const announce = document.querySelector('#announce');

let winningScore = 3;
let won = false;
let noGames = 1;

function updateScores(player, opponent){
        if(!won){
                player.score += 1;
                player.display.textContent = player.score;
                if (player.score === winningScore) {
                        player.display.classList.add('has-text-primary');
                        opponent.display.classList.add('has-text-danger');
                        player.btn.disabled = true;
                        opponent.btn.disabled = true;
                        won = true;
                        player.game +=1;
                        player.games.textContent = player.game;
                        if (player.game + opponent.game == noGames)
                        {
                                announce.innerText = `${player.name} wins!`;
                                newGame.disabled = true;
                        }
                }
        }
}

p1.btn.addEventListener('click', function(){
        updateScores(p1,p2);
})

p2.btn.addEventListener('click', function(){
        updateScores(p2,p1);
})

resetBtn.addEventListener('click',reset);

function reset(){
        for(let p of [p1,p2]){
                p.score = 0;
                p.display.textContent = 0;
                p.display.classList.remove('has-text-danger', 'has-text-primary');
                p.btn.disabled = false;
                p.game = 0;
                p.games.textContent = 0;
        }
        announce.innerText ="";
        newGame.disabled = false;
        won = false;
}

newGame.addEventListener('click', newG);

function newG(){
        for(let p of [p1,p2]){
                p.score = 0;
                p.display.textContent = 0;
                p.display.classList.remove('has-text-danger', 'has-text-primary');
                p.btn.disabled = false;
        }
        won = false;
}

playTo.addEventListener('change',()=>{
        winningScore = parseInt(playTo.value);
        reset();
})

numGames.addEventListener('change', ()=>{
        noGames = parseInt(numGames.value);
        reset();
})