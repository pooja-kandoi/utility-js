const tail = require('./tail');

const reducehelper = (list, reduceFunction, reduceValue) => {
    if (list.length > 0) {
        reduceValue = reduceFunction(reduceValue, list[0]);
        return reducehelper(tail(list), reduceFunction, reduceValue);
    }
    return reduceValue;
}

const reduce = (list, reduceFunction, initialValue) => {

    let reduceValue;

    if (initialValue == undefined) {
        if (typeof (list[0]) == 'string') {
            reduceValue = "";
        }
        else if (typeof (list[0]) == "number") {
            reduceValue = 0;
        }
        else {
            reduceValue = undefined;
        }
    }
    else {
        reduceValue = initialValue;
    }

    reduceValue = reducehelper(list, reduceFunction, initialValue);
    return reduceValue;
}


module.exports = reduce;
