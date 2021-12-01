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
  //Queue is first in first out
  //[first]
  //[second, first]
  //[third, second, first]
    //new el appended to 0 index of arr
    //removal of element is last element

  //need a constructor class
  constructor(){
    this.data = [];
  }

  //add method
  add(el){
    this.data.unshift(el);
  }

  //remove method
  remove(){
    return this.data.pop();
  }
}

let q = new Queue

q.add('first')
q.add('second')
q.add('third')
console.log(q, 'should have three elements')

q.remove() //should remove 'first'
console.log(q, 'should remove first')

module.exports = Queue;
