const p1 = {
        score : 0,
        btn : document.querySelector('#p1Button'),
        display : document.querySelector('#p1score')
};
const p2 = {
        score : 0,
        btn : document.querySelector('#p2Button'),
        display : document.querySelector('#p2score')
};

const resetBtn = document.querySelector('#reset');
const select = document.querySelector('select');

let winningScore = 3;
let won = false;

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
        }
        won = false;
}

select.addEventListener('change',()=>{
        winningScore = parseInt(select.value);
        reset();
})