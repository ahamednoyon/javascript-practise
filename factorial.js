// 2 = 2*1;
// 3 = 3*2*1;
// 4 = 4*3*2*1;
// 5 = 5*4*3*2*1;
// 10 = 10*9*8*7*6*5*4*3*2*1;

function factorial(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
    factorial = factorial * i;
    }
    return factorial;
}

var result  = factorial(5);

console.log(result);
