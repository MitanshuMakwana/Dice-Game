document.getElementById('rollButton').addEventListener('click', function () {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    
    document.getElementById("dice1").src = `images/dice${dice1}.png`;
    document.getElementById("dice2").src = `images/dice${dice2}.png`;

   
    let result = "";
    if (dice1 > dice2) {
        result = " Player 1 wins!";
    } else if (dice1 < dice2) {
        result = " Player 2 wins!";
    } else {
        result = " It's a draw!";
    }


    document.getElementById('result').textContent = result;
});
