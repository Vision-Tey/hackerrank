let arr = [4,2,3,1,6,7,4,1,7]
function birthdayCakeCandles(n, ar) {
    // Complete this function
    var max = Math.max(...ar);    
    var result = ar.filter(c => c === max);    
    // return result.length;
    console.log(result.length);
}

birthdayCakeCandles(n, ar);