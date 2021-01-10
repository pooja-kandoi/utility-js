const max = require('./max');

describe('Max', () => {

    it('Max of [1,2,3] should be 3', () => {
        var arr = [1, 2, 3];
        expect(max(arr)).toEqual(3);
    });

})
