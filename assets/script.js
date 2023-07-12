document.addEventListener("DOMContentLoaded", function () {

  function showboard() {
    var checkplayer1empty = document.forms["form1"]["player1input"].value;
    var checkplayer2empty = document.forms["form1"]["player2input"].value;
    if (checkplayer1empty == "" || checkplayer2empty == "") {
      alert("Please enter the names of Player 1 and Player 2 before starting the game!")
    }
    else {
      var element = document.getElementById("boardgame");
      var element2 = document.getElementById("formid");
      var element3 = document.getElementById("score");

      element.style.visibility = 'visible';
      element2.style.visibility = 'hidden';
      element3.style.visibility = 'visible';


    }
    document.getElementById('firstplayer').innerText = checkplayer1empty + " score: " + player1score
    document.getElementById('secondplayer').innerText = checkplayer2empty + " score: " + player2score



  }




  document.getElementById("btn").addEventListener('click', showboard);
  var elements = document.getElementsByClassName('case');


  function clearboard() {
    state = 'X'
    case1 = document.getElementById("case1").innerText = "";
    case2 = document.getElementById("case2").innerText = "";
    case3 = document.getElementById("case3").innerText = "";
    case4 = document.getElementById("case4").innerText = "";
    case5 = document.getElementById("case5").innerText = "";
    case6 = document.getElementById("case6").innerText = "";
    case7 = document.getElementById("case7").innerText = "";
    case8 = document.getElementById("case8").innerText = "";
    case9 = document.getElementById("case9").innerText = "";
  }


  function checkwin() {

    var player1 = document.forms["form1"]["player1input"].value;
    var player2 = document.forms["form1"]["player2input"].value;
    var case1 = document.getElementById("case1").innerText;
    var case2 = document.getElementById("case2").innerText;
    var case3 = document.getElementById("case3").innerText;
    var case4 = document.getElementById("case4").innerText;
    var case5 = document.getElementById("case5").innerText;
    var case6 = document.getElementById("case6").innerText;
    var case7 = document.getElementById("case7").innerText;
    var case8 = document.getElementById("case8").innerText;
    var case9 = document.getElementById("case9").innerText;
    if (case1 == case2 && case2 == case3 && case1 != "" ||
      case4 == case5 && case5 == case6 && case4 != "" ||
      case7 == case8 && case8 == case9 && case7 != "" ||
      case1 == case5 && case5 == case9 && case1 != "" ||
      case3 == case5 && case5 == case7 && case3 != "" ||
      case1 == case4 && case4 == case7 && case1 != "" ||
      case2 == case5 && case5 == case8 && case2 != "" ||
      case3 == case6 && case6 == case9 && case3 != ""

    ) {

      if (state == 'X') {
        alert(player1 + ' is the Winner!')
        clearboard();
        player1score += 1
        showboard()

      }
      if (state == 'O') {
        alert(player2 + ' is the Winner!')
        clearboard();
        player2score += 1
        showboard()
      }


    }
    if (case1 != "" && case2 != "" && case3 != "" && case4 != "" && case5 != "" && case6 != "" && case7 != "" && case8 != "" && case9 != "") {
      alert("Draw! No Winners ;)")
      clearboard()
    }

  }

  state = 'X'
  player1score = 0
  player2score = 0

  for (var i = 0; i < elements.length; i++) {
    (function (index) {
      elements[index].addEventListener('click', function () {

        if (state == "X") {

          elements[index].innerText = "X";
          checkwin()
          state = "O"

        }
        else if (state == "O") {

          elements[index].innerText = "O";
          checkwin()
          state = "X"

        }
      });
    })(i);
  }


});