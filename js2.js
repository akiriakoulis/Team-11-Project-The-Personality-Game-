var player; 
var food;
var playerX = 25; 
var playerY = 75; 
var foodX = 0; 
var foodY = 0; 
var time = 60; 
var id;
var score = 0;

var color = localStorage.getItem("color");
var season = localStorage.getItem("season");
var dessert = localStorage.getItem("dessert");
var sport = localStorage.getItem("sport");
var fear = localStorage.getItem("fear");
var pet = localStorage.getItem("pet");
var hobby = localStorage.getItem("hobby");
var count = localStorage.getItem("count");

function setup(){
    alert(
        "Welcome to the Mini Game \nUse WASD to play \nYou win if your score is over 20 \nMonsters a worth 1 point \nPowerups are worth 2 points, and give you 10 seconds of time \nGood luck, your end result depends on it!"
    )
	player = document.getElementById("player");
	food = document.getElementById("food");
	spawn();
    id = setInterval(timer, 1000);
    //these need to be filled in with sprite colors
    if(color == "red"){
        player.style.backgroundImage = "url('Photos/Sprite-Red.png')";
    }
    else if(color == "orange"){
        player.style.backgroundImage = "url('Photos/Sprite-Orange.png')";
    }
    else if(color == "yellow"){
        player.style.backgroundImage = "url('Photos/Sprite-Yellow.png')";
    }
    else if(color == "green"){
        player.style.backgroundImage = "url('Photos/Sprite-Green.png')";
    }
    else if(color == "blue"){
        player.style.backgroundImage = "url('Photos/Sprite-Blue.png')";
    }
    else if(color == "purple"){
        player.style.backgroundImage = "url('Photos/Sprite-Purple.png')";
    }
    else{
        player.style.backgroundImage = "url('Photos/Sprite-Pink.png')";
    }
    document.body.style.backgroundImage = "url("+ season + ")";
}
function spawn(){
    var a = Math.floor(Math.random() * 10)+'';
    console.log(a);
    if(a=='9'){
        food.style.backgroundImage = "url("+ dessert +")";
    }
    else{
        food.style.backgroundImage = "url("+ fear +")";
    }

	foodX = Math.floor(Math.random()*700)+25;
	foodY = Math.floor(Math.random()*700)+25;
	food.style.left = foodX + "px";
    food.style.top = foodY + "px";
    
    
}
function move(e){
	if(e.key == "d"){
		playerX = playerX + 10;
	}
	if(e.key == "a"){
		playerX = playerX - 10;
		if(playerX<0){
			playerX = 0;
		}
	}
	if(e.key == "w"){
		playerY = playerY - 10;
		if(playerY<0){
			playerY = 0;
		}
	}
	if(e.key == "s"){
		playerY = playerY + 10;
	}
	player.style.left = playerX + "px";
	player.style.top = playerY + "px";
	
	
	if(Math.abs(playerX-foodX) < 75 && Math.abs(playerY-foodY) < 75){
        if(food.style.backgroundImage == ("url(\""+dessert+"\")")){
            score = score + 2;
            time = time + 10;
		    document.getElementById("score").innerHTML = "Score: " + score; 
		    spawn();
        }
        else{
            score = score + 1;
		    document.getElementById("score").innerHTML = "Score: " + score; 
		    spawn();
        }
		
    }
}
function timer(){
	time = time - 1;
	document.getElementById("time").innerHTML = "Time: " + time; 
	if(time == 0){
        clearInterval(id);
        if(score >= 20){
            localStorage.setItem("game", "You Won!");
            count = count - 5;
            localStorage.setItem("count1", count);
        }
        else{
            localStorage.setItem("game", "You Lose!");
            count = count + 5;
            localStorage.setItem("count1", count);
        }
        window.location.href = 'endgame.html';
	}
}