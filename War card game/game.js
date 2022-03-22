/* ****************
      Build the Deck 
      **************** */
 /*PHSAE: Build the Cards
  - set the card components (suit, rank, and default card visual/code) 
  - set-up the rank's power
 */
 var cardSuit = ["spades", "hearts", "diamonds", "clubs"];
 var cardRank = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
 var cardPower = [];
 for (var r = 0; r < cardRank.length; r++) {
     cardPower[r] = r + 2;
 }
 var cardCode = "&#127136;";


 /*PHSAE: Build the Deck 
 - build a card
 - build a deck of card by building a new card
 */
 var theDeck = Deck();

 function Deck() {
     var aDeck = [];
     var addNum;
     for (var s = 0; s < cardSuit.length; s++) {
         for (var r = 0; r < cardRank.length; r++) {
             switch (cardSuit[s]) {
                 case "spades":
                     if (cardPower[r] >= 2 && cardPower[r] <= cardPower.length - 3) {
                         addNum = 38 + r;
                         cardCode = "&#1271" + addNum + ";";
                     } else if (cardPower[r] >= cardPower.length - 3) {
                         switch (cardRank[r]) {
                             case "ace":
                                 cardCode = "&#127137;";
                                 break;
                             case "queen":
                                 cardCode = "&#127149;";
                                 break;
                             case "king":
                                 cardCode = "&#127150;";
                                 break;
                         }
                     }
                     break;
                 case "hearts":
                     if (cardPower[r] >= 2 && cardPower[r] <= cardPower.length - 2) {
                         addNum = 54 + r;
                         cardCode = "&#1271" + addNum + ";";
                     } else if (cardPower[r] >= cardPower.length - 3) {
                         switch (cardRank[r]) {
                             case "ace":
                                 cardCode = "&#127153;";
                                 break;
                             case "queen":
                                 cardCode = "&#127165;";
                                 break;
                             case "king":
                                 cardCode = "&#127166;";
                                 break;
                         }
                     }
                     break;
                 case "diamonds":
                     if (cardPower[r] >= 2 && cardPower[r] <= cardPower.length - 2) {
                         addNum = 70 + r;
                         cardCode = "&#1271" + addNum + ";";
                     } else if (cardPower[r] >= cardPower.length - 3) {
                         switch (cardRank[r]) {
                             case "ace":
                                 cardCode = "&#127169;";
                                 break;
                             case "queen":
                                 cardCode = "&#127181;";
                                 break;
                             case "king":
                                 cardCode = "&#127182;";
                                 break;
                         }
                     }
                     break;
                 case "clubs":
                     if (cardPower[r] >= 2 && cardPower[r] <= cardPower.length - 2) {
                         addNum = 86 + r;
                         cardCode = "&#1271" + addNum + ";";
                     } else if (cardPower[r] >= cardPower.length - 3) {
                         switch (cardRank[r]) {
                             case "ace":
                                 cardCode = "&#127185;";
                                 break;
                             case "queen":
                                 cardCode = "&#127197;";
                                 break;
                             case "king":
                                 cardCode = "&#127198;";
                                 break;
                         }
                     }
                     break;
             }
             aDeck.push(new Card(cardSuit[s], cardRank[r], cardPower[r], cardCode));
         }
     }
     return aDeck;
 }

 function Card(cSuit, cRank, cPower, cCode) {
     /* an object called Card*/
     this.suit = cSuit;
     this.rank = cRank;
     this.power = cPower;
     this.code = cCode;
 }


 /* **************** 
 Start the Game 
 **************** */
 /*PHASE: Player/User input
 To Do: ask for player 1's name, ask if player 2's name, ask if there are more players. loop and get more player names and use that array length as numPlayer.*/
 var numPlayer = numPlayer || 2;



 /*PHASE: Deal the Desk into Hands
  - use the value of the number of players to determine the player hand sizes
  - have each player request a random card
  - pull random card from the deck and put it into one of the piles
 */
 var theHandSize = Math.floor(theDeck.length / numPlayer);

 var player1 = dealWarHand(theDeck, theHandSize);
 //console.log(player1);
 var player2 = dealWarHand(theDeck, theHandSize);
 //console.log(player2);

 function dealWarHand(deck, cardsPerHand) {
     var playersHand = [];
     var cardLocation = 0;

     if (deck.length <= 1) {
         //console.log("All cards are dealt.");
         /* To Do: update table with instruction on how to start the game*/
     } else {
         for (var d = 0; d < cardsPerHand; d++) {
             cardLocation = randomCardNum();

             while (deck[cardLocation] === undefined) {
                 cardLocation = randomCardNum(); // get new card
                 if (deck.length === 1) {
                     deck[cardLocation] = deck[0];
                 }
             }

             playersHand.push(deck[cardLocation]); // add card to the player's hande
             deck.splice(cardLocation, 1); // remove card from Desk with location
         }
     }
     return playersHand;
 }

 function randomCardNum() {
     var randomNum = Math.floor(Math.random() * theDeck.length + 1);
     //var randomNum=0;  randomNum++;
     return randomNum;
 }


 /* **************** 
 Play the Game 
 **************** */
 var handCounter = 0;
 var boardGame = document.getElementsByTagName("aside");
 var scoreBoard = document.querySelectorAll("#js-score td");
 var player1Game = document.getElementById("js-player1");
 var player2Game = document.getElementById("js-player2");
 player1Game.addEventListener("click", gameOn);
 player2Game.addEventListener("click", gameOn);
 var p1Wins = 0;
 var p2Wins = 0;

 function gameOn() {
     if (handCounter >= theHandSize) {
         console.log("winner's circle!");
         gameWinner();
         return;
     }

     handCounter = letsBattle(player1, player2, handCounter); 
     displayBookWinner(player1, player2, handCounter); 
     handCounter++;
 }


 /*PHASE: compare cards*/
 function letsBattle(play1, play2, hc) {
    
      /*console.log(
             "\nPlayer1 played ", play1[hc].rank, " of ", play1[hc].suit,
             "\nPlayer2 played ", play2[hc].rank, " of ", play2[hc].suit);*/

     /* who wins a hand*/
     if (play1[hc].power == play2[hc].power) {
         boardGame[0].innerHTML =
             '<big title="Player 1: ' + play1[hc].rank + " of " + play1[hc].suit + '">' + play1[hc].code + "</big>";
         boardGame[1].innerHTML =
             '<big title="Player 2: ' + play2[hc].rank + " of " + play2[hc].suit + '">' + play2[hc].code + "</big> ";
    
         if (hc >= 23) {/*play1.length < 3 (play1.length always = 26)*/
             alert("It is time for a mini war!");
             //console.log ("MINI war: handCounter = "+ hc);
             hc++;
         } else {
             alert("It is time for war!");
            // console.log ("War: handCounter = "+ hc);
             hc = hc + 3;
         }
         /*console.log(
             "\nWar: Player1 played ", play1[hc].rank, " of ", play1[hc].suit,
             "\nWar: Player2 played ", play2[hc].rank, " of ", play2[hc].suit);*/
     }

     if (play1[hc].power < play2[hc].power) { 
         p2Wins++;
        
         //console.log("winner: player 2 " + player2[hc].rank + player2[hc].suit+"\n HandCounter = "+ hc);
         return hc;

     } else if (play1[hc].power > play2[hc].power) {
         p1Wins++;
         
         //console.log("winner: player 1 " + player1[hc].rank + player1[hc].suit+"\n HandCounter = "+ hc);
         return hc;
     }


 }

 /*PHASE: display cards*/
 function displayBookWinner(p1, p2, handCount) {
     /*console.log("displayBook:" +
         "\n Player1 played ", player1[handCounter].rank, " of ", player1[handCounter].suit,
         "\n Player2 played ", player2[handCounter].rank, " of ", player2[handCounter].suit);*/
     var card1s = p1[handCount].suit;/*TypeError: p1[handCount] is undefined*/
     var card1r = p1[handCount].rank;
     var card1p = p1[handCount].power;
     var card1c = p1[handCount].code;
     var card2s = p2[handCount].suit;
     var card2r = p2[handCount].rank;
     var card2p = p2[handCount].power;
     var card2c = p2[handCount].code;
     var p1Leftover = p1.length - handCounter;
     var p2Leftover = p2.length - handCounter;

     if (card1p < card2p) {
         // console.log("Player2 wins!");

         boardGame[0].innerHTML =
             '<big title="Player 1: ' + card1r + " of " + card1s + '">' + card1c + "</big>";
         boardGame[1].innerHTML =
             '<strong>Won!</strong> <big title="Player 2: ' + card2r + " of " + card2s + '">' + card2c + "</big> ";

         scoreBoard[0].innerHTML = p1Wins; /*(" + p1Leftover + " left)*/
         scoreBoard[1].innerHTML = p2Wins; /*(" + p2Leftover + " left)*/

     } else if (card1p > card2p) {
         //console.log("Player1 wins!");
         boardGame[0].innerHTML =
             '<strong>Won!</strong><big title="Player 1: ' + card1r + " of " + card1s + '">' + card1c + "</big>";
         boardGame[1].innerHTML =
             '<big title="Player 2: ' + card2r + " of " + card2s + '">' + card2c + "</big> ";
         scoreBoard[0].innerHTML = p1Wins; /*(" + p1Leftover + " left)*/
         scoreBoard[1].innerHTML = p2Wins; /*(" + p2Leftover + " left)*/
     }

 }

 /*who won the most books*/
 function gameWinner() {
     if (p1Wins < p2Wins) {
         //console.log("\n** Player2 Wins! **");
         document.getElementById("js-game").innerHTML = "<p class='winner'>&spadesuit; &heartsuit; Player 2 Wins! &diams; &clubsuit; </p> ";
         player1Game.getAttributeNode("class").value = "player-hand looser";
         player2Game.getAttributeNode("class").value = "player-hand winner";
     } else if (p1Wins > p2Wins) {
         //console.log("\n* Player1 Wins! *");
         document.getElementById("js-game").innerHTML = "<p class='winner'>&spadesuit; &heartsuit; Player 1 Wins! &diams; &clubsuit; </p>";
         player1Game.getAttributeNode("class").value = "player-hand winner";
         player2Game.getAttributeNode("class").value = "player-hand looser";
     } else if (p1Wins === p2Wins) {
         //console.log("\n--- Its a Tie! ---");
         document.getElementById("js-game").innerHTML = "<p class='winner'>&heartsuit; &diams; Its a Tie! &spadesuit; &clubsuit;</p>";
         player1Game.getAttributeNode("class").value = "player-hand winner";
         player2Game.getAttributeNode("class").value = "player-hand winner";
     }
 }