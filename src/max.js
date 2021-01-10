const tail = require('./tail')

function max(arr) {
    if (arr.length == 0) {
        return Number.MIN_VALUE;
    }
    var maxValue = arr[0];
    maxValue = Math.max(maxValue, max(tail(arr)));
    return maxValue;
}
module.exports = max;
