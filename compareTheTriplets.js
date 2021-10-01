var a = [3,6,9];
var b = [1,12,14];
function compareTriplets(a,b){
    var points = [0,0];
    for (var i = 0; i < a.length; i++){
        if (a[i]>b[i]){
            points[0]++;
        } else if (a[i]<b[i]){
            points[1]++;
        }
    // }return points;
    console.log(points); 
}
}


compareTriplets(a,b);