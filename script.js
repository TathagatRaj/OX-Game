const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const winner = document.getElementById("winner");
const lightBulb1 = document.getElementById("lightBulb1");
const lightBulb2 = document.getElementById("lightBulb2");
const NGbtn = document.getElementById("NGbtn");
const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");

let btns = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
let flag = true;

for (let i = 0; i <btns.length; i++) {
 btns[i].onclick = function() {
     if (flag === true) {
         btns[i].innerHTML = "X"
         btns[i].style.textShadow = "0px 0px 10px red";
         flag = false;
         lightBulb1.style.color = "rgb(161, 154, 154)";
         lightBulb2.style.color = "rgb(243, 243, 0)";
     } else if (flag === false) {
         btns[i].innerHTML = "O";
         btns[i].style.textShadow = "0px 0px 10px blue";
         flag = true;
         lightBulb1.style.color = "rgb(243, 243, 0)";
         lightBulb2.style.color = "rgb(161, 154, 154)"
     }
     btns[i].disabled = true;
     p1Win();
 }
}

function newGame() {
 location.reload();
}

function p1Win() {
    if ((btn1.innerHTML == "X" && btn2.innerHTML == "X" && btn3.innerHTML == "X") ||
        (btn4.innerHTML == "X" && btn5.innerHTML == "X" && btn6.innerHTML == "X") ||
        (btn7.innerHTML == "X" && btn8.innerHTML == "X" && btn9.innerHTML == "X") ||
        (btn1.innerHTML == "X" && btn4.innerHTML == "X" && btn7.innerHTML == "X") ||
        (btn2.innerHTML == "X" && btn5.innerHTML == "X" && btn8.innerHTML == "X") ||
        (btn3.innerHTML == "X" && btn6.innerHTML == "X" && btn9.innerHTML == "X") ||
        (btn1.innerHTML == "X" && btn5.innerHTML == "X" && btn9.innerHTML == "X") ||
        (btn3.innerHTML == "X" && btn5.innerHTML == "X" && btn7.innerHTML == "X")) {
        winner.innerHTML = "Player 1 Wins";
        winner.classList.add("Win");
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
            btns[i].style.borderColor = "rgb(248, 97, 97)";
        }
        NGbtn.innerHTML = "Play Again?";
        lightBulb1.style.color = "white";
        lightBulb2.style.color = " rgb(73, 65, 65)";
        lightBulb2.style.opacity = "0.7";
        P1.style.color = "white";
        P2.style.color = "rgb(73, 65, 65)";
        P2.style.opacity = "0.7";
        lightBulb1.style.transitionDuration = "2s";
        lightBulb2.style.transitionDuration = "2s";
        P2.style.transitionDuration = "2s";
        P1.style.transitionDuration = "2s";
    } else if 
       ((btn1.innerHTML == "O" && btn2.innerHTML == "O" && btn3.innerHTML == "O") ||
        (btn4.innerHTML == "O" && btn5.innerHTML == "O" && btn6.innerHTML == "O") ||
        (btn7.innerHTML == "O" && btn8.innerHTML == "O" && btn9.innerHTML == "O") ||
        (btn1.innerHTML == "O" && btn4.innerHTML == "O" && btn7.innerHTML == "O") ||
        (btn2.innerHTML == "O" && btn5.innerHTML == "O" && btn8.innerHTML == "O") ||
        (btn3.innerHTML == "O" && btn6.innerHTML == "O" && btn9.innerHTML == "O") ||
        (btn1.innerHTML == "O" && btn5.innerHTML == "O" && btn9.innerHTML == "O") ||
        (btn3.innerHTML == "O" && btn5.innerHTML == "O" && btn7.innerHTML == "O")) {
        winner.innerHTML = "Player 2 Wins";
        winner.classList.add("Win");
        for (let i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
            btns[i].style.borderColor = "rgb(90, 88, 228)";
        }
        NGbtn.innerHTML = "Play Again?";
        lightBulb2.style.color = "white";
        lightBulb1.style.color = "rgb(73, 65, 65)";
        lightBulb1.style.opacity = "0.7";
        P2.style.color = "white";
        P1.style.color = "rgb(73, 65, 65)";
        P1.style.opacity = "0.7";
        lightBulb1.style.transitionDuration = "2s";
        lightBulb2.style.transitionDuration = "2s";
        P1.style.transitionDuration = "2s";
        P2.style.transitionDuration = "2s";
    } else if (btns.every(btn => btn.innerHTML == "X" || btn.innerHTML == "O")) {
        winner.innerHTML = "Draw";
        NGbtn.innerHTML = "Play Again?";
        winner.classList.add("Draw");
        lightBulb1.style.color = "rgb(73, 65, 65)";
        lightBulb1.style.opacity = "0.7";
        lightBulb2.style.color = " rgb(73, 65, 65)";
        lightBulb2.style.opacity = "0.7";
        P1.style.color = "rgb(73, 65, 65)";
        P1.style.opacity = "0.7";
        P2.style.color = "rgb(73, 65, 65)";
        P2.style.opacity = "0.7";
        lightBulb1.style.transitionDuration = "2s";
        lightBulb2.style.transitionDuration = "2s";
    }
}