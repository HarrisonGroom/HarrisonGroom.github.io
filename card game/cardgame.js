var playerCardArray = [[0,0,"",""], [0,0,"",""], [0,0,"",""]];
var opponentCardArray = [[0,0,"",""], [0,0,"",""], [0,0,"",""]];
var playerHealth = 20;
var opponentHealth = 20;


//display elements:
var playerHealthDisp;
var opponentHealthDisp;
var attackValues;
var defenseValues;
var titles;

function initGame() {
    playerHealthDisp = document.getElementById('player-health');
    opponentHealthDisp = document.getElementById('opponent-health');
    
    titles = document.getElementsByClassName('card-title');
    attackValues = document.getElementsByClassName('attack');
    defenseValues = document.getElementsByClassName('defense');

    for (let i = 0; i< attackValues.length; i++) {
        var attackVal = parseInt(Math.random() * 4 + 1);
        var healthVal = parseInt(Math.random() * 7 + 1);
        if (i < 3) {
            opponentCardArray[i][0] = attackVal;
            opponentCardArray[i][1] = healthVal;
            opponentCardArray[i][2] = "Opponent card number: " + i;
        }
        else {
            playerCardArray[i-3][0] = attackVal;
            playerCardArray[i-3][1] = healthVal;
            playerCardArray[i-3][2] = "Player card  number: " + (i-3);
            console.log("i is: " + i + " " +playerCardArray[i-3][2]);
        }
    } 
    updateDisplay();
}

function crit() {
    var Critical = Math.floor(Math.random() * 10);
    var attackmult = 1;
    if (Critical == 7){
        alert("crit");
        attackmult = 1.5;

    }
    return attackmult;
}




function updateDisplay() {
    //update player and opponent health:
    playerHealthDisp.innerHTML = "Player Health: " + playerHealth;
    opponentHealthDisp.innerHTML = "Opponent Health: " + opponentHealth;

    for (let i = 0; i< attackValues.length; i++) {
       
        if (i < 3) {
            attackValues[i].innerHTML = "Attack: " + opponentCardArray[i][0];
            defenseValues[i].innerHTML = "Defense: " + opponentCardArray[i][1];
            titles[i].innerHTML = opponentCardArray[i][2];
        }
        else {
            attackValues[i].innerHTML = "Attack: " + playerCardArray[i-3][0];
            defenseValues[i].innerHTML = "Defense: " + playerCardArray[i-3][1]; 
            console.log("player number title: " + playerCardArray[i-3][2]);
            titles[i].innerHTML = playerCardArray[i-3][2];
        }
    } 
}
function cardDeathMatch() {
    //1. go through all player cards and all enemy cards
        for (let i = 0; i< playerCardArray.length; i++) {
            playerCardArray[i][1] -= opponentCardArray[i][0] * crit();
            opponentCardArray[i][1] -= playerCardArray[i][0] * crit();
            if (opponentCardArray[i][1]<1) {
                if (opponentCardArray[i][2] == "I'm dead") {
                    opponentHealth -= playerCardArray[i][0];
                    opponentCardArray[i][1] = 0;
                }
                opponentCardArray[i][2] = "I'm dead";
            }
            if(playerCardArray[i][1] < 1) {
                if (playerCardArray[i][2] == "I'm dead") {
                    playerHealth -= opponentCardArray[i][0];
                    playerCardArray[i][1] = 0;
                }
                playerCardArray[i][2] = "I'm dead";
            }
            checkGameOver();
            updateDisplay();
        }
}
function checkGameOver() {
    if (playerHealth < 1 && opponentHealth < 1) {
        alert("It was a tie");
    }
    else if (playerHealth < 1) {
        alert("You lost");
    }
    else if (opponentHealth < 1) {
        alert("You won");
    }
}
initGame();