
let player = 1;
let choices = [];
choices = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let res;
clear();
function select() {

    let card = document.getElementById(this.id);
    if (choices[this.id] == 0) {
        player += 1;
        if (player % 2 == 0) {
            card.src = "goku.jpg.jpg"
            choices[this.id] = "o";

        }
        else {
            card.src = "vegeta.jpg.jpg"
            choices[this.id] = "x";
        }
        
        checker();

        let result = document.querySelector("#result");
        if (res == "x") {
            result.innerHTML = "<h3>Result:Player two Wins</h3>";
            alert("Player 2 wins")
        }
        else if (res == "o") {
            result.innerHTML = "<h3>Result:Player one Wins</h3>";
            alert("Player 1 wins")
        }
        else if (res == "y") {
            result.innerHTML = "<h3>Result:Tie</h3>";
            alert("Its A tie")
        }
    }
    else {
        alert("invalid");
    }
    display();
}
function display() {
    let h = document.querySelector(".displ")
    if (player % 2 == 0) {
        h.innerHTML = "<h3>Player 2 Plays<h3>"
    }
    else {
        h.innerHTML = "<h3>Player 1 Plays<h3>"
    }
}
function checker() {
    if (choices[0] == choices[1] && choices[1] == choices[2]) {
        res = choices[0];
    }
    else if (choices[0] == choices[3] && choices[3] == choices[6]) {
        res = choices[0];
    }
    else if (choices[0] == choices[4] && choices[4] == choices[8]) {
        res = choices[0];
    }
    else if (choices[1] == choices[4] && choices[4] == choices[7]) {
        res = choices[1];
    }
    else if (choices[2] == choices[5] && choices[5] == choices[8]) {
        res = choices[2];
    }
    else if (choices[3] == choices[4] && choices[4] == choices[5]) {
        res = choices[3];
    }
    else if (choices[2] == choices[4] && choices[4] == choices[6]) {
        res = choices[2];
    }
    else if (choices[6] == choices[7] && choices[7] == choices[8]) {
        res = choices[6];
    }
    else if (choices[0] != 0 && choices[1] != 0 && choices[2] != 0 && choices[3] != 0 && choices[4] != 0 && choices[5] != 0 && choices[6] != 0 && choices[7] != 0 && choices[8] != 0) {
        res = "y";
    }
}

function clear() {
    display();
    choices = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    let grid = document.querySelector(".grid");
    for (let i = 0; i < 9; i++) {
        let element = document.createElement("img");
        element.src = "black.jpg";
        element.className = "elem";
        element.id = i;
        element.addEventListener("click", select);
        grid.appendChild(element);

    }
}

function reloader(){
    window.location.reload();
}
let reset =document.querySelector("#reset");
reset.addEventListener("click",reloader);
