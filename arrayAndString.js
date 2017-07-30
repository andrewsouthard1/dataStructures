function isUnique(str){
  var strMap = {};
  for(var i = 0; i < str.length; i++) {
    if(strMap.hasOwnProperty(str[i])){
      return false;
    } else {
      strMap[str[i]] = true;
    }
  }
  return true;
}

function recursiveFib(n){
  if(n === 1 || n === 0){
    return n;
  }
  return recursiveFib(n - 2) + recursiveFib(n - 1);
}

function Fibber(){
  this.memo = {};
}

Fibber.prototype.fib = function(n){
  if(n === 1 || n === 0){
    return n;
  } 
  if (this.memo.hasOwnProperty(n)){
    console.log('grabbing memo[' + n + ']');
    return this.memo[n];
  }
  console.log('computing fib(' + n +')');
  this.memo[n] = this.fib(n-2) + this.fib(n-1);
  return this.fib(n-2) + this.fib(n-1);
}

function bottomUpFib(n){
  if(n < 0) {
    throw new Error ("can't be negative");
  } else if (n === 1 || n === 0){
    return n;
  }

  var twoBehind = 0;
  var oneBehind = 1;
  var fib = 0;

  for(var i = 1; i < n; i++){
    fib = twoBehind + oneBehind;
    twoBehind = oneBehind;
    oneBehind = fib;
  }
  return fib;
}











































