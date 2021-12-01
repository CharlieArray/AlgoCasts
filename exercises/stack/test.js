const Stack = require('./index');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('stack can add and remove items', () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  s.push(2);
  expect(s.pop()).toEqual(2);
});

test('stack can follows first in, last out', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});

test('peek returns the first element but doesnt pop it', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toEqual(3);
  expect(s.pop()).toEqual(3);
  expect(s.peek()).toEqual(2);
  expect(s.pop()).toEqual(2);
  expect(s.peek()).toEqual(1);
  expect(s.pop()).toEqual(1);
});


/*
      //stack == FILO
    //[first, second, third, fourth] bottom <=> top

    constructor() {
        this.data = [];
    }
        

    //push() method to add at end of arr
    push(item){
        this.data.push(item);
    }


    //pop() method to remove from end of arr
    pop(){
        return this.data.pop();
    }


    //peek method to see whats on top of stack
    peek(){
        return this.data[this.data.length - 1]
    }

}

let s = new Stack()

s.push("first")
s.push("second")
s.push('third')
s.peek() // should return 'third'
s.pop() //should remove 'third'
s.peek()
*/