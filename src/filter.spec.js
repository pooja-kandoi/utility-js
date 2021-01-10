const filter = require('./filter');

describe('Filter', () => {

    it('Testing x=>true functionality for an empty array', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('Testing x=>true functionality for a non-empty array', () => {
        expect(filter([1, 2, 3], x => true)).toEqual([1, 2, 3]);
    });

    it('Testing x=> false functionality for a non-empty array', () => {
        expect(filter([1, 2, 3], x => false)).toEqual([]);
    });

    it('Testing x>1 functionality for a non-empty array', () => {
        const greaterThan1 = (value) => {
            if (value > 1)
                return true;
            else
                return false;
        }
        expect(filter([1, 2, 3], greaterThan1)).toEqual([2, 3]);
    });

    it('Testing upperCase filter for a non-empty array', () => {
        const isUpperCase = (value) => {
            if (value >= 'A' && value <= 'Z')
                return true;
            else
                return false;
        }
        expect(filter(['a', 'A', 'b', 'B'], isUpperCase)).toEqual(['A', 'B']);
    })

})