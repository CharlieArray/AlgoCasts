// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    //stack is first in, last out
    
    //[first, second, third, fourth] == [bottom <=> top]

    constructor(){
        this.data = [];
    }

    push(el){
        this.data.push(el);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        let last = this.data[this.data.length - 1]
        return last;
    }
}

s = new Stack

s.push('first')
s.push('second')
s.push('third')
console.log(s,'should log first second and third')

s.pop()
console.log(s, 'should remove third element')
s.peek() //should return 'second'


module.exports = Stack;
