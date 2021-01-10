const tail = require('./tail');

const mappedArray = (list, applyFunction,resultArray) => {
    if(list.length>0){
    var modifiedElement = applyFunction(list[0]);
    resultArray.push(modifiedElement);
    return mappedArray(tail(list),applyFunction,resultArray);
    }
    return resultArray;

}

const map = (list,applyFunction) =>{
    var resultArray =[];
    mappedResult=mappedArray(list,applyFunction,resultArray);
    return mappedResult;
}
module.exports = map;
