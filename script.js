//32
function prime_position(int){
    var arr = [];
    var num = 0;
    var prime = 0;

    while(arr.length < int){
        num++;
        if(num < 2){
            prime = 2;
        }
        for(var i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                prime++;
            }
            if(prime >= 1){
                break;
            }
        }
        if(prime <= 0){
            arr.push(num);
        }
        prime = 0;
    }
    return arr[int-1];
}

//33
function sort_subtract(int){
    str = String(int);
    strx = "";
    stry = "";
    arr = [];

    for( var i = 1; i<str.length+1; i ++){
        arr.push(str.substring(i-1,i));
    }
    arr.sort((a,b) => a-b);
    for( var a = 0; a<arr.length; a++){
        strx += arr[a];
    }
    for( b = arr.length-1; b >= 0; b--){
        stry += arr[b];
    }

    var x = parseInt(strx, 10);
    var y = parseInt(stry, 10);

    var diff = y-x;
    return diff;

}
