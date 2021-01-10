const map = require('./map');

describe('Map', () => {

    it('Testing the cube functionality for an empty array', () => {
        const cube = (value) => {
            return value * value * value;
        }
        expect(map([], cube)).toEqual([]);
    });

    it('Testing the cube functionality for a non-empty array', () => {
        const cube = (value) => {
            return value * value * value;
        }
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('Testing the Identity functionality for a non-empty array', () => {
        const identity = (value) => {
            return value;
        }
        expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
    });

    it('Testing increment functionality for a non-empty array', () => {
        const increase = (value) => {
            return value + 1;
        }
        expect(map([10], increase)).toEqual([11]);
    });


})