var ar = [3,2,7,5];
function arraySum(ar){
    var sum = 0;
    for (var i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}
alert(arraySum(ar));
