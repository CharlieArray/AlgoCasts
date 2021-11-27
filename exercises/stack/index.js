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


module.exports = Stack;
