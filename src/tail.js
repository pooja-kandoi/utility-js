function tail(arr) {
    var res = [];
    if (arr.length == 0)
        return res;
    else {
        for (i = 1; i < arr.length; i++) {
            res.push(arr[i]);
        }
        return res;
    }
}
module.exports = tail;
