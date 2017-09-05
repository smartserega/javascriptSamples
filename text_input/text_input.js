function out(){
  var p;
  p = document.getElementById('out');
  p.innerHTML = 'Hello';
}

function out1(){
  var p1;
  p1 = document.getElementById('out1');
  p1.innerHTML += ' Hello';
}

function out2(){
  var p2;
  p2 = document.getElementById('out2');
  p2.insertAdjacentHTML('beforeBegin', 'HI');
}
