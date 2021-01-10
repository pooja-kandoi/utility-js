const head =require('./head');

describe('Head', () =>{
    
    it('Head of [1,2,3] is 1', ()=>{
        var arr=[1,2,3];
        expect(head(arr)).toEqual(1);
    });
    it('Head of [] is null', ()=>{
        var arr=[];
        expect(head(arr)).toEqual(null);
    });
})
