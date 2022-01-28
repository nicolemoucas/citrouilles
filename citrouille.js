// 20/01
var i = 0;
var interval = setInterval(createPumpkin, 500);


function createPumpkin(){
	// s'il y a moins de 10 citrouilles
	if(document.getElementsByClassName("pk").length == 10){
		console.log("fin");
		var end = document.createElement("p");
		end.className = "gameOver";

		document.body.appendChild(end); // ajouter au body


	} else{
		// creation de variables de toutes les div pour une citrouille
		var pk = document.createElement("div");
		pk.className = "pk";

		var position = randomPosition();
		pk.style.left = position[0] + "px";
		pk.style.top = position[0] + "px";

		var left_pumpkin = document.createElement("div");
		left_pumpkin.className = "left-pumpkin";
		var right_pumpkin = document.createElement("div");
		right_pumpkin.className = "right-pumpkin";
		var top_pumpkin = document.createElement("div");
		top_pumpkin.className = "top-pumpkin";
		var middle_pumpkin = document.createElement("div");
		middle_pumpkin.className = "middle-pumpkin";

		var mouth = document.createElement("div");
		mouth.className = "mouth";
		var hide_mouth = document.createElement("div");
		hide_mouth.className = "hide-mouth";
		var eye_left = document.createElement("div");
		eye_left.className = "eye-left";
		var eye_right = document.createElement("div");
		eye_right.className = "eye-right";
		var nose = document.createElement("div");
		nose.className = "nose";

		var teeth_up = document.createElement("div");
		teeth_up.className = "teeth-up";
		var teeth_down_left = document.createElement("div");
		teeth_down_left.className = "teeth-down-left";
		var teeth_down_right = document.createElement("div");
		teeth_down_right.className = "teeth-down-right";

		// ajouter les éléments à pk
		pk.appendChild(left_pumpkin);
		pk.appendChild(right_pumpkin);
		pk.appendChild(middle_pumpkin);
		pk.appendChild(top_pumpkin);

		pk.appendChild(mouth);
		pk.appendChild(hide_mouth);
		pk.appendChild(eye_left);
		pk.appendChild(eye_right);
		pk.appendChild(nose);

		pk.appendChild(teeth_up);
		pk.appendChild(teeth_down_left);
		pk.appendChild(teeth_down_right);

		document.body.appendChild(pk); // ajouter au body

		i += 1;
		console.log(i);

		pk.addEventListener("click", () => {
    		/*console.log("You knocked?");*/
 			explode(pk);
    			
    		destroyPumpkin(pk);
    	});

	}
}

function destroyPumpkin(pk){
	/*pk.style.visibility = "none";*/
	pk.remove(); // supprime la citrouille sur laquelle on clique

}

function explode(pk, j){
	var explosion = document.createElement("div");
	explosion.className = "explosion";

	var r1 = document.createElement("div");
	r1.className = "r1";
	var r2 = document.createElement("div");
	r2.className = "r2";
	var r3 = document.createElement("div");
	r3.className = "r3";
	var r4 = document.createElement("div");
	r4.className = "r4";
	var r5 = document.createElement("div");
	r5.className = "r5";

	explosion.appendChild(r1);
	explosion.appendChild(r2);
	explosion.appendChild(r3);
	explosion.appendChild(r4);
	explosion.appendChild(r5);

	document.body.appendChild(explosion);

	var as = pk.getBoundingClientRect(); // récupérer la position de la citrouille
	explosion.style.bottom = as.bottom + "px";
	explosion.style.left = as.left + "px";
	explosion.style.top = as.top + "px";
	console.log(as.top, as.left);


}

function randomPosition(){
	var x = Math.floor(Math.random() * document.body.clientWidth - 300);
	var y = Math.floor(Math.random() * document.body.clientHeigth - 300);
	return [x,y];
}















