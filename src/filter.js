const tail = require('./tail');

const mappedArray = (list, applyFunction, resultArray) => {
    if (list.length > 0) {
        var AddStatus = applyFunction(list[0]);
        if (AddStatus) {
            resultArray.push(list[0]);
        }
        return mappedArray(tail(list), applyFunction, resultArray);
    }
    return resultArray;

}

const filter = (list, applyFunction) => {
    var resultArray = [];
    mappedResult = mappedArray(list, applyFunction, resultArray);
    return mappedResult;
}
module.exports = filter;
