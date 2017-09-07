function plus(){
  var num1, num2, result, text;
  //операция сложение
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  text = "Result: ";

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  if(!num1 && !num2) { alert('please insert number') }
  result = text+(num1+num2);

  document.getElementById('out').innerHTML = result;
}

function minus(){
  //операция вычитание
  var num1, num2, result, text;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  text = "Result: ";

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  if(!num1 && !num2) { alert('please insert number') }	
  result = text+(num1-num2);
	
  document.getElementById('out').innerHTML = result;
}

function devision(){
  //операция деление
  var num1, num2, result, text;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  text = "Result: ";

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  if(!num1 && !num2) { alert('please insert number') }	
  if (num2==0) {
    alert('division by zero is forbidden')
  }
  else {
    result = text+(num1/num2);
    document.getElementById('out').innerHTML = result;
  }

}

function multiplication(){
  //операция умножение
  var num1, num2, result, text;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  text = "Result: ";

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  
  if(!num1 && !num2) { alert('please insert number') }
  
  result = text+(num1*num2);

  document.getElementById('out').innerHTML = result;
  
  if(!num1 && !num2) { alert('please insert number') }
}

function clock() {
	//определение даты и времени
	var d = new Date();
	var month_num = d.getMonth()
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();

	month=new Array("jan", "feb", "mar", "apr", "may", "jun","jul", "aug", "sept", "oct", "nov", "dec");

	if (day <= 9) day = "0" + day;
	if (hours <= 9) hours = "0" + hours;
	if (minutes <= 9) minutes = "0" + minutes;
	if (seconds <= 9) seconds = "0" + seconds;

	date_time = "Today: " + day + " " + month[month_num] + " " + d.getFullYear() +
	"&nbsp;&nbsp;&nbsp;"+ hours + ":" + minutes + ":" + seconds;
	if (document.layers) {
		 document.layers.doc_time.document.write(date_time);
		 document.layers.doc_time.document.close();
	}
	else document.getElementById("doc_time").innerHTML = date_time;
		setTimeout("clock()", 1000);
}



