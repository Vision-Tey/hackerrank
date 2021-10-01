var ar = [100001,100002,100003,100004]
function aVeryBigSum(ar){
    var sum = 0;
    for(var i = 0; i<ar.length; i++){
        sum += ar[i];
    }
    return sum;
}
alert(aVeryBigSum(ar));