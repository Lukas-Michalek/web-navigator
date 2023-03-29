const LinkedList = require('./LinkedList');

class Stack{
  constructor(maxSize = Infinity){
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }
}

class Stack
