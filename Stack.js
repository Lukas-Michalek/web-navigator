const LinkedList = require('./LinkedList');

class Stack{
  constructor(maxSize = Infinity){
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // Return True if the current size if this stack is 0
  isEmpty(){
    return this.size === 0;
  }

  // Return True if the current size of this stack is less than maximal size => there is room in stack 
  hasRoom(){
    return this.size < this.maxSize;
  }

  // Add new value(node) into stack if there is still room. If not throw error. Remeber that you add new values Last In First Out -> FILO. New node is added to head, and this node becomes new head
  push(value){
    if(this.hasRoom){
      this.stack.addToHead(value);
      this.size++;
    }
    else{
      throw new Error('Stack is Full!')
    }
  }

  // Returns the value of the head node. Remember that in linkedList.addToHead function node that is being added to head will become new head and thus the node added as the last one is sitting on top of stack and is new head. Therefore, by using peek function I will see the node that was added last and which is acutally head
  peek(){
    if(this.isEmpty()){
      return null;
    }
    else{
      return this.stack.head.data;
    }
  }

  // Checks if there is some node in stack, and if stack is not empty removes the head node.Remember First In Last Out FILO or Last In First Out - LIFO
  pop(){
    if(!this.isEmpty()){
      const value = this.stack.removeHead();
      this.size--;
      return value;
    }
    else{
      throw new Error('Stack is empty!')
    }
  }

}

module.exports = Stack;
