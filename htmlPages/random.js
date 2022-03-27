function change() // no ';' here
{
  var elem = document.getElementById("myButton1");
  if (elem.value == "hello") elem.value = "goodbye";
  else elem.value = "hello";
}


document.getElementById("color").innerHTML ='<style> html{background-color:#ECECEC;}</style>';

document.getElementById("HTMLChange").innerHTML = "<h2>Random</h2>";

const btnHTML = document.getElementById('btnHTML');

btnHTML.addEventListener('click', function onClick() {
  changeHTML();
});

function changeHTML(){
  var currentHTML = document.getElementById('HTMLChange');
  if (currentHTML.innerHTML.match("<h2>Random</h2>")){
    currentHTML.innerHTML = "<h2>You changed it.</h2>";
  }
  else if (currentHTML.innerHTML.match("<h2>You changed it.</h2>")){
    currentHTML.innerHTML = "<h2>You changed it again.</h2>";
  }
  else if (currentHTML.innerHTML.match("<h2>You changed it again.</h2>")){
    currentHTML.innerHTML = "<h2>I guess you can do it again.</h2>";
  }
  else if (currentHTML.innerHTML.match("<h2>I guess you can do it again.</h2>")){
    currentHTML.innerHTML = "<h2><a href='https://youtu.be/AC3Ejf7vPEY' target='_blank'> <h2>Have you tried clicking on the title?</h2> </a></h2>";
  }
  else{
    currentHTML.innerHTML = "<h2>Random</h2>";
  }
}

// color change
const btn = document.getElementById('btn');

let index = 0;

const colors = ['red', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';
  index = index >= colors.length - 1 ? 0 : index + 1;
  document.getElementById("color").innerHTML =
    '<style> html{background-color:' + colors[index]+ ';}</style>';
});


//button 3
function myFunction() {
  var x = document.getElementById("myInput");
  document.getElementById("demo").innerHTML = "searching for: " + x.value;
}





// random number
var randomNr;
var id_nr_game;
var check_answer;
var msg_confirm;
var counter = 0;
var counter_msg;

randomNr = Math.floor((Math.random() * 100) + 1);

document.getElementById('id_button').addEventListener('click', function () {
  check_nr();
});

document.getElementById('id_nr_game').addEventListener('keyup', function (event) {
  if (event.which === 13) {
    check_nr();
  }
});

function check_nr() {

  counter++;

  id_nr_game = document.getElementById('id_nr_game').value;

  document.getElementById('id_nr_game').value = '';
  document.getElementById('id_nr_game').focus();

  check_answer = document.getElementById('check_answer');
  counter_msg = document.getElementById('id_counter');

  counter_msg.innerHTML = 'This is yours: ' + counter + ' attempts.';

  if (id_nr_game.indexOf('.') != -1 || id_nr_game.indexOf(',') != -1) {
    check_answer.innerHTML = 'Enter a naturals number to play.';
  } else if (id_nr_game == '' || isNaN(id_nr_game)) {
    check_answer.innerHTML = 'Enter a natural number to play.';
  } else if (id_nr_game < 0 || id_nr_game > 100) {
    check_answer.innerHTML = 'The number provided is outside the required range (less than 0 or greater than 100).';
  }
  else {

    if (id_nr_game == randomNr) {
      msg_confirm = window.confirm('Way to go! You are a winner! You have succeeded in ' + (counter--) + ' total! Do you want to play again?');
      check_answer.innerHTML = '';
      if (msg_confirm == true) {
        randomNr = Math.floor((Math.random() * 100) + 1);
        counter_msg.innerHTML = '';
        counter = 0;
      } else {
        document.getElementById('game_field').style.display = 'none';
        check_answer.innerHTML = 'Gratulujemy wygranej. Dziękujemy za wspólną grę.';
        check_answer.style.color = 'red';
        counter_msg.innerHTML = 'The correct number was given for: ' + (counter--) + 'total';
      }

    } else if (id_nr_game > randomNr) {
      check_answer.innerHTML = 'The given number is greater than random. try again!';
    } else {
      check_answer.innerHTML = 'The given number is less than random. try again!';
    }
  }

  //alert(randomNr);
}

//
let amount;
document.getElementById('id_go').addEventListener('click', function () {
  document.getElementById("placeToAdd").innerHTML = "";
  amount = document.getElementById('id_number').value;
  document.getElementById('id_number').value = "";
  for (amount; amount > 0; amount--) {
    document.getElementById("placeToAdd").innerHTML += "<div class='ball' onclick='clearBalls()'></div>";
  }

});

function clearBalls() {
  document.getElementById("placeToAdd").innerHTML = "";
}