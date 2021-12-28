function addUser()

{

player1 = document.getElementById("player1_input").value;
player2 = document.getElementById("player2_input").value;

localStorage.setItem("player-1-name",player1);
localStorage.setItem("player-2-name",player2);

window.location="index.html";
}