const reverseInt = require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});


/*
  function reverseInt(n) {
        if(n === 0) return 0;
       
        let nValue = Math.abs(n); 

        return n < 0  ? nValue.toString().split('').reverse().join('') * -1 : nValue.toString().split('').reverse().join('') * 1 

}

*/