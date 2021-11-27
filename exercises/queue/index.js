// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue{
  //queue is first in first out; like a McDonalds drive thru
    //2 is first el, 4 is second el, 6 is third el
    //[6,4,2]
    //unshift() => append to 0 index
    //pop() => remove from last index

  //need a constructor class
    constructor(){
      this.data = [];
    }

  //need an add method
    add(item){
      this.data.unshift(item);
    }

  //need a remove method
   remove(){
     return this.data.pop()
   }

}

let q = new Queue();

q.add('first')
q.add('second')
q.add('third')
q.remove()
q.remove()



module.exports = Queue;
