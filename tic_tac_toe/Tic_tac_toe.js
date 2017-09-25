for (var i=0; i<9; i++){
	document.getElementById('game').innerHTML+='<div class="block"></div>';
}

var step = 0;

document.getElementById('game').onclick = function(event){
	console.log(event); 
	if (event.target.className == 'block'){
		if (step % 2==0){
			event.target .innerHTML = 'X';}
		else{event.target .innerHTML = 'O';}
	
	step++;
	checkWinner();
	}
	
	function checkWinner(){
		var allblock = document.getElementsByClassName('block');
		//console.log(allblock);
		//проверка по горизонтали X
		if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML =='X' ){alert ("X - Wins");}
		if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML =='X' ){alert ("X - Wins");}
		if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML =='X' ){alert ("X - Wins");}
		//проверка по вертикали X
		if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML =='X' ){alert ("X - Wins");}
		if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML =='X' ){alert ("X - Wins");}
		if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML =='X' ){alert ("X - Wins");}
		//проверка по диагонали X
		if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML =='X' ){alert ("X - Wins");}
		if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML =='X' ){alert ("X - Wins");}
		
		//проверка по горизонтали O
		if (allblock[0].innerHTML == 'O' && allblock[1].innerHTML == 'O' && allblock[2].innerHTML =='O' ){alert ("O - Wins");}
		if (allblock[3].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[5].innerHTML =='O' ){alert ("O - Wins");}
		if (allblock[6].innerHTML == 'O' && allblock[7].innerHTML == 'O' && allblock[8].innerHTML =='O' ){alert ("O - Wins");}
		//проверка по вертикали O
		if (allblock[0].innerHTML == 'O' && allblock[3].innerHTML == 'O' && allblock[6].innerHTML =='O' ){alert ("O - Wins");}
		if (allblock[1].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[5].innerHTML =='O' ){alert ("O - Wins");}
		if (allblock[2].innerHTML == 'O' && allblock[5].innerHTML == 'O' && allblock[8].innerHTML =='O' ){alert ("O - Wins");}
		//проверка по диагонали O
		if (allblock[0].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[8].innerHTML =='O' ){alert ("O - Wins");}
		if (allblock[2].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[6].innerHTML =='O' ){alert ("O - Wins");}		

		//if (allblock[0,1,2,3,4,5,6,7,8].innerText == null) {alert ("Draw");}
		
	}
	
}