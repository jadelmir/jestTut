const functions = require("./functions")

test('Adds 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4)
})
test('Adds 2 + 2 not equal 5', ()=>{
    expect(functions.add(2,2)).not.toBe(5)
})
test('Should be null',()=>{
    expect(functions.isNull()).toBeNull();
})
test('Should be True , ',()=>{
    expect(functions.checkValue(1)).toBeTruthy()
})
test('Should be false , ',()=>{
    expect(functions.checkValue(null)).toBeFalsy()
})