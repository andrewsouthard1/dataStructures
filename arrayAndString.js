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

// The nth fibonacci number is defined in terms of the two previous fibonacci numbers, so this seems to lend itself to recursion

// function fib(n){
//   if(n === 0 || n === 1){
//     return n;
//   } else {
//     return fib(n-2) + fib(n-1);
//   }
// }

function Fibber(){
  this.memo = {}
}

Fibber.prototype.fib = function(n){
  
  if(n < 0) {
    throw new Error('Index was negative');
  } else if (n === 0 || n === 1){
    return n;
  }
  if (this.memo.hasOwnProperty(n)){
    console.log('grabbing memo[' + n + ']');
    return this.memo[n];
  } 
  console.log('computing fib(' + n +')');
  var result = (this.fib(n - 2) + this.fib(n - 1));
  this.memo[n] = result;
  console.log('this.memo' + '[' + n + ']' + this.memo[n]);
  return result;
}

function CoinRegister() {
  this.memo = {};
}

CoinRegister.prototype.changePossibilitiesTopDown = function(amountLeft, denominations, currentIndex) {

  currentIndex = (typeof currentIndex !== 'undefined' ? currentIndex : 0);

  // base cases:
  // we hit the amount spot on. yes!
  if (amountLeft === 0){
    return 1; 
  }

  // we overshot the amount left (used too many coins)
  if (amountLeft < 0){
    return 0;
  }

  // we're out of denominations
  if (currentIndex >= denominations.length){
    return 0;
  }

  if (this.memo.hasOwnProperty(amountLeft)){
    return this.memo[amountLeft];
  } else {

  // choose a current coin
    var currentCoin = denominations[currentIndex];

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilites = 0;
    while(amountLeft >= 0){
      numPossibilites += changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }
  this.memo[amountLeft] = numPossibilites;
  return numPossibilites;
}
}


function factorial(n){
  if(n === 1){
    return n;
  } else {
    console.log("computing factorial " + n);
    return n * factorial(n-1);
  }
}

function sumNats(n){
  if(n === 1){
    return n;
  } else {
    console.log("computing sumNats " + n);
    return n + sumNats(n-1);
  }
}

function multiply(a, b){
  if(b === 1){
    return a;
  } else {
    console.log("computing multiply " + a + b);
    return a + multiply(a, b-1);
  }
}

function power(a, b){
  if(b === 1){
    return a;
  } else {
    console.log("computing power " + a + b);
    return a * power(a, b - 1);
  }
}










































