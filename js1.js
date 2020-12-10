var count = 0;

function dissapear1(x,n){
	var div = document.getElementById("q1");
	var p = document.getElementById("q1p");
	p.innerHTML = "You picked " + x + "!";
	div.style.backgroundColor = x;
	localStorage.setItem("color",x);
	count = count + n;
	localStorage.setItem("count", count);
}
function dissapear2(x,s,n){
	var div = document.getElementById("q2");
	div.style.backgroundImage = "url(" + x + ")";
    localStorage.setItem("season",x);
	var p = document.getElementById("q2p");
	p.innerHTML = "You picked " + s + "!";
	count = count + n;
	localStorage.setItem("count", count);
}
function dissapear3(x,d,n){
	var div = document.getElementById("q3");
	div.style.backgroundImage = "url(" + x + ")";
	localStorage.setItem("dessert",x);
	var p = document.getElementById("q3p");
	p.innerHTML = "You picked " + d + "!";
	count = count + n;
	localStorage.setItem("count", count);
}
function dissapear4(x,s,n){
	var div = document.getElementById("q4");
	div.style.backgroundImage = "url(" + x + ")";
	localStorage.setItem("sport",x);
	var p = document.getElementById("q4p");
	p.innerHTML = "You picked " + s + "!";
	count = count + n;
	localStorage.setItem("count", count);
}
function dissapear5(x,f,n){
	var div = document.getElementById("q5");
	div.style.backgroundImage = "url(" + x + ")";
	localStorage.setItem("fear",x);
	var p = document.getElementById("q5p");
	p.innerHTML = "You picked " + f + "!";
	count = count + n;
	localStorage.setItem("count", count);
}
function dissapear6(x,s,n){
	var div = document.getElementById("q6");
	div.style.backgroundImage = "url(" + x + ")";
	localStorage.setItem("pet",x);
	var p = document.getElementById("q6p");
	p.innerHTML = "You picked " + s + "!";
	count = count + n;
	localStorage.setItem("count", count);
}
function dissapear7(x,h,n){
	var div = document.getElementById("q7");
	div.style.backgroundImage = "url(" + x + ")";
	localStorage.setItem("hobby",x);
	var p = document.getElementById("q7p");
	p.innerHTML = "You picked " + h + "!";
	count = count + n;
	localStorage.setItem("count", count);
}
