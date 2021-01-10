const min = require('./min');

describe('Min', () => {

    it('Min of [1,2,3] should be 1', () => {
        var arr = [1, 2, 3];
        expect(min(arr)).toEqual(1);
    });
})
