function f1(){
  var n,p;
  n = document.getElementById('num1').value;
  p = document.getElementById('out');
  n = parseInt(n);
  if (n==100){
    p.innerHTML = 'Number equial to 100';
  }

  else if (n>100) {
        p.innerHTML = 'Number bigger than 100';
  }
  else {
          p.innerHTML = 'Number smoller than 100';
  }

}
