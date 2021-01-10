const tail = require('./tail')

function min(arr) {
    if(arr.length==0){
        return Number.MAX_VALUE;
    }
    var minValue=arr[0];
    minValue=Math.min(minValue,min(tail(arr)));
    return minValue;
}
module.exports = min;
