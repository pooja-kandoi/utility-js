const reduce = require('./reduce');

describe('Reduce', () => {

    it('Testing x+y reduce function for an empty array', () => {
        expect(reduce([], (x, y) => x + y)).toBeUndefined;
    });

    it('Testing x+y,10 reduce function for an empty array', () => {
        expect(reduce([], (x, y) => x + y, 10)).toEqual(10);
    });

    it('Testing x+y reduce function for a non-empty array and no initial value', () => {
        expect(reduce(['a', 'b', 'c'], (x, y) => x + y)).toMatch(/abc/);
    });

    it('Testing x+y,z reduce function for a non-empty array and an initial value', () => {
        expect(reduce(['a', 'b', 'c'], (x, y) => x + y, 'z')).toMatch(/zabc/);
    });



})
