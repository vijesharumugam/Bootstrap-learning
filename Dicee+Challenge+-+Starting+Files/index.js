var ran1 = Math.floor(Math.random() * 6) + 1;
var ran2 = Math.floor(Math.random() * 6) + 1;



var res;
if(ran1 > ran2){
    res = "Player 1 wins!";
} else if(ran2 > ran1) {
    res = "Player 2 wins!";
} else {
    res = "It's a draw!";
}
document.querySelector("h1").innerHTML = res;

document.querySelector(".img1").src = "images/dice" + ran1 + ".png";
document.querySelector(".img2").src = "images/dice" + ran2 + ".png";