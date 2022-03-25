function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="hello") elem.value = "goodbye";
    else elem.value = "hello";
}




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

document.getElementById('id_button').addEventListener('click', function() { 
  check_nr();
});

document.getElementById('id_nr_game').addEventListener('keyup', function(event){
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
      
      if(id_nr_game == randomNr) {
      msg_confirm = window.confirm('Way to go! You are a winner! You have succeeded in ' + (counter--) + ' total! Do you want to play again?');
        check_answer.innerHTML = '';
        if(msg_confirm == true) {
          randomNr = Math.floor((Math.random() * 100) + 1);
          counter_msg.innerHTML = '';
          counter = 0;
        } else {
          document.getElementById('game_field').style.display = 'none';
          check_answer.innerHTML = 'Gratulujemy wygranej. Dziękujemy za wspólną grę.';
          check_answer.style.color = 'red';
          counter_msg.innerHTML = 'The correct number was given for: ' + (counter--) + 'total';
        }
      
    } else if(id_nr_game > randomNr) {
      check_answer.innerHTML = 'The given number is greater than random. try again!';
    } else {
      check_answer.innerHTML = 'The given number is less than random. try again!';
    }
  }
  
  //alert(randomNr);
}