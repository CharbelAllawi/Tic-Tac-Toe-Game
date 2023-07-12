document.addEventListener("DOMContentLoaded", function () {

  function showboard() {
    var checkplayer1empty = document.forms["form1"]["player1input"].value;
    var checkplayer2empty = document.forms["form1"]["player2input"].value;
    if (checkplayer1empty == "" || checkplayer2empty == "") {
      alert("Please enter the names of Player 1 and Player 2 before starting the game!")
    }
    else {
      var element = document.getElementById("boardgame");
      var element2 = document.getElementById("1");
      var element3 = document.getElementById("score");

      element.style.visibility = 'visible';
      element2.style.visibility = 'hidden';
      element3.style.visibility = 'visible';


    }
    document.getElementById('firstplayer').innerText = checkplayer1empty + " score: "
    document.getElementById('secondplayer').innerText = checkplayer2empty + " score: "



  }




  document.getElementById("btn").addEventListener('click', showboard);
  var elements = document.getElementsByClassName('case');
  state = 'X'

  for (var i = 0; i < elements.length; i++) {
    (function (index) {
      elements[index].addEventListener('click', function () {
        if (state == "X") {
          elements[index].innerText = "X";
          state = "O"
        }
        else if (state == "O") {
          elements[index].innerText = "O";
          state = "X"
        }
      });
    })(i);
  }


});