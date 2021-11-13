const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});


/*
    //iterate through chars of string
    //if key is not assigned in a let result =[]
    //assign key value pairs

    let values = {};
    let max = 0;
    let maxValue = ''

    for(let char of str){
        if(!values[char]){
            values[char] = 1
        }
        else values[char]++
        console.log(values)
    }

    for(let char in values){
        if(values[char] > max){
            max = values[char]
            maxValue = char
        } 
    }
    return maxValue
*/