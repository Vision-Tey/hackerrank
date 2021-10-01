 var arr = [7,-8,0,4,-9,-2];
function plusMinus(arr){
   
    var pos = 0;
    var neg = 0;
    var zero = 0;
    arr.forEach(element => {
        if (element > 0) pos++;
        else if (element < 0) neg++;
        else if (element == 0) zero++;

    });
console.log(pos/arr.length);
console.log(neg/arr.length);
console.log(zero/arr.length);
}


plusMinus(arr);