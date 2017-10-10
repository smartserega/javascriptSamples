function userProgress(time){
	var start = 0;
	var time = Math.round(time*1000/100);
	var progressElement = document.getElementById('user-progress'); // элемент прогресс бара
	var intervalID=setInterval(function(){
		if (start > 100) {		
			clearInterval(intervalID);
			userProgressCallBack();
		}
		else {
		progressElement.value = start;
		
		}
	start++;
	
	}, time);
	
}


function userProgressCallBack(){
	document.querySelector('.hidden-block'). style.display = 'block';
}	

userProgress(5);