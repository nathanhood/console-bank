var transType = query();
var currentBal = 1000;

while(!isQuit(transType)){
  if(transType === 'd'){
    var x = depAmount();
    var y = currentBal;

    if(x > 500){
      currentBal = bonusDep(x, y);
      alert('Thank you. Your new balance is ' + '$' + currentBal);
    } else {
      currentBal = regDep(x, y);
      alert('Thank you. Your new balance is ' + '$' + currentBal);
    }
  } else if(transType === 'w') {
    var x = drawAmount();
    var y = currentBal;

    if(regDraw(x,y) < 0 && regDraw(x,y) >= -750){
      currentBal = negDraw(x, y);
      alert('You have overdrawn your account. A $50 fee has been assessed. Your new balance is negative ' + '$' + currentBal * -1);
    } else if(regDraw(x,y) < -750){
      alert('You have overdrawn your account by over $750. Your account has been closed.');
    } else {
      currentBal = regDraw(x, y);
      alert('Thank you. Your new balance is ' + '$' + currentBal);
    }
  } else {
    alert('Please enter (d)eposit or (w)ithdrawal');
  }
  transType = query();
}

function regDraw(x,y){
  return y - x;
}

function negDraw(x,y){
  return y - x - 50;
}

function regDep(x,y){
  return x + y;
}

function bonusDep(x,y){
  return x + y + 25;
}

function depAmount(){
  var transaction = prompt('Please enter deposit amount')
  return transaction * 1;
}

function drawAmount(){
  var transaction = prompt('Please enter withdrawal amount')
  return transaction * 1;
}

function query(){
  var transType = prompt('(d)eposit, (w)ithdrawal, (q)uit');
  return transType.toLowerCase();
}

function isQuit(letter){
  return letter === 'q';
}

function transConfirm(){

}
