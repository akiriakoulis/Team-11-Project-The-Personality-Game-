var game = localStorage.getItem("game");
var score = localStorage.getItem("count1");


function set(){
    document.body.style.backgroundImage = "url('Photos/color.jpg')";
    document.getElementById("score").innerHTML = "Your score is " + score;
    document.getElementById("end").innerHTML = game;
    if(score >= 0 && score < 11){
        document.getElementById("Personality").innerHTML = "Your personality is optimistic";
    }
    else if(score >= 11 && score < 22){
        document.getElementById("Personality").innerHTML = "Your personality is funny";
    }
    else if(score >= 22 && score < 33){
        document.getElementById("Personality").innerHTML = "Your personality is outgoing";
    }
    else{
        document.getElementById("Personality").innerHTML = "Your personality is shy";
    }
}
