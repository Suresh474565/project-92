player1_score=0;
player2_score=0;

function send()
{

number1=document.getElementById("num_input").value;
number2=document.getElementById("num2_input").value;
correct_answer=parseInt(number1)*parseInt(number2);
console.log(correct_answer);

question_number = "<h3 id='num_display'> Q."+number1+"X"+number2+"</h3>";
input_box="<br> Answer- <input type='text' placeholder='Type answer here' id='ans_input'>";
check_btn="<br><br><button class='btn btn-info' id='check' onclick='check()'>CHECK</button>";

row=question_number+input_box+check_btn;

document.getElementById("question_output").innerHTML=row;
document.getElementById("num_input").value="";
document.getElementById("num2_input").value="";

}

question_turn="player1";
answer_turn="player2";

function check()
{

get_answer=document.getElementById("ans_input").value;


if(get_answer == correct_answer)

{

if(answer_turn == "player1")

{
player1_score= player1_score + 1;
document.getElementById("score_p1").innerHTML=player1_score;

}

else
{

    player2_score= player2_score + 1;
    document.getElementById("score_p2").innerHTML=player2_score;

}

}

if(question_turn == "player1")

{


question_turn="player2"
document.getElementById("player_question").innerHTML="Question turn is -"+ player2_name ;

}

else
{

    
question_turn="player1"
document.getElementById("player_question").innerHTML="Question turn is -"+ player1_name;

}

if(answer_turn == "player1")

{


answer_turn="player2"
document.getElementById("player_answer").innerHTML="Answer turn is -"+ player2_name;

}

else
{

    
answer_turn="player1"
document.getElementById("player_answer").innerHTML="Answer turn is -"+ player1_name;

}

document.getElementById("ans_input").innerHTML="";
}