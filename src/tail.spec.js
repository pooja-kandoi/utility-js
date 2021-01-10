const tail =require('./tail');

describe('Tail', () =>{
    
    it('Tail of [1,2,3] is [2,3]', ()=>{
        var arr=[1,2,3];
        expect(tail(arr)).toEqual([2,3]);
    });
    it('Tail of [] is null', ()=>{
        var arr=[];
        expect(tail(arr)).toEqual([]);
    });
})
