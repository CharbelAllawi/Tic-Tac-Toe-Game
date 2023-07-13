document.addEventListener("DOMContentLoaded", function () {

  // this function will add strike to the div element
  function strikeDiv(divId) {
    var div = document.getElementById(divId);
    div.classList.add("strike-active");
    setTimeout(function () {
      div.classList.remove("strike-active");
    }, 2000);
  }

  // the below function will display the hidden board  
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

  // the below function will clear the board
  function clearboard() {
    document.getElementById('roundwinner').innerText = "The Gamer Winner is : "

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


  // the below function will add the strike animation
  function strikeanimation(case1, case2, case3, case4, case5, case6, case7, case8, case9) {
    if (case1 == case2 && case2 == case3 && case1 != "") {
      strikeDiv("case1");
      strikeDiv("case2");
      strikeDiv("case3");
    }
    if (case4 == case5 && case5 == case6 && case4 != "") {
      strikeDiv("case4");
      strikeDiv("case5");
      strikeDiv("case6");
    }
    if (case1 == case5 && case5 == case9 && case1 != "") {
      strikeDiv("case1");
      strikeDiv("case5");
      strikeDiv("case9");
    }
    if (case3 == case5 && case5 == case7 && case3 != "") {
      strikeDiv("case3");
      strikeDiv("case5");
      strikeDiv("case7");
    }
    if (case1 == case4 && case4 == case7 && case1 != "") {
      strikeDiv("case1");
      strikeDiv("case4");
      strikeDiv("case7");
    }
    if (case2 == case5 && case5 == case8 && case2 != "") {
      strikeDiv("case2");
      strikeDiv("case5");
      strikeDiv("case8");
    }
    if (case3 == case6 && case6 == case9 && case3 != "") {
      strikeDiv("case3");
      strikeDiv("case6");
      strikeDiv("case9");
    }
  }


  // the below function will check for a potential winners
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
        strikeanimation(case1, case2, case3, case4, case5, case6, case7, case8, case9);
        document.getElementById('roundwinner').innerText = "The Gamer Winner is : " + player1
        setTimeout(function () {

          clearboard();
        }, 2000);
        setTimeout(function () {

        }, 500);

        player1score += 1
        showboard()
      }
      if (state == 'O') {
        strikeanimation(case1, case2, case3, case4, case5, case6, case7, case8, case9);
        document.getElementById('roundwinner').innerText = "The Gamer Winner is : " + player2

        setTimeout(function () {

          clearboard();
        }, 2000);
        setTimeout(function () {

        }, 500);


        player2score += 1
        showboard()
      }
    }
    if (case1 != "" && case2 != "" && case3 != "" && case4 != "" && case5 != "" && case6 != "" && case7 != "" && case8 != "" && case9 != "") {
      alert("Draw! No Winners ;)")
      clearboard()
    }
  }

  // the below function will start the game
  function startgame() {
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
  }


  document.getElementById("btn").addEventListener('click', showboard);
  var elements = document.getElementsByClassName('case');
  state = 'X'
  player1score = 0
  player2score = 0

  startgame()




});