class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }

  setNextNode(node){
    if(!(node instanceof Node)){
      throw new Error('Node must be a member of Node class');
    }
    this.next(node);
  }

  setNext(data){
    this.next = data;
  }

  getNextNode(){
    return this.next;
  }


}

module.exports = Node;
