function plus(){
  var num1, num2, result, text;
  //операция сложение
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  text = "Result: ";

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

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

  if (num2==0) {
    alert('devision on 0 is forbiden')
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

  result = text+(num1*num2);

  document.getElementById('out').innerHTML = result;
}
