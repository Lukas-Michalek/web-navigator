const Node = require('./Node');

class LinkedList{
  constructor(){
    this.head = null;
  }

  addToHead(data){
    // the node that was provided will be stored in newHead var
    const newHead = new Node(data);
    // current head node of this linked list will be store in currentHead var as it will be later used
    const currentHead = this.head;
    // I will make the new node the Head of linked list making it the first node of the list
    this.head = newHead;

    // if the linked list was not empty(there was already head node with data), I will set this node(pointers) to be the node that is the subsequent node the the head (meaning I will push this node immediately after the node that I made as head node by data provided -> old head will be pushed to the right from the new head)
    if(currentHead){
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data){
    // as in Linked List I am tracking only head nodes, in order to make things easier, I am creating var - tail as this will be the startoing point from which I will iterate until I will find the last node of the Linked List
    let tail = this.head;
    // if however the linked list is empty I need to make the node that I am adding as head node
    if(!tail){
      this.head = new Node(data);
    }
    // If however ther is at least one node in the linked list
    else{
      // now I am going to iterate through all the nodes of the linked list until I will find the very last one(from this one the this.next is null) and I will make this node as the tail node
      while(tail.getNextNode() !== null){
        tail = tail.getNextNode();
      }
      // if I have found the last node, I will use the data provided as parameter, create new node from it and then set it as the next node of the tail node of my inked list ( basically move it ot the right)
      tail.setNextNode(new Node(data));
    }
  }

  // Method for removinh Head Node
  removeHead(){
    // first I am storing the node I want to remove in var - removedHead for easier manipulation
    const removedHead = this.head;

    // if the linked list is empty and there are no nodes in it, I have nothing to remove and simply return
    if(!removedHead){
      return;
    }

    // if there are at least two nodes in linked list(the current head has linked at least one more node after it which will upon removing original head node becomes new head) I will make the head node the one that comes after the current Head(stored as removedHead).
    if(removedHead.next){
      this.head = removedHead.next;
    }

    // note that node becomes orphaned upon removing links to other nodes and thus being 'removed' from linke list. I want to return the data from previous head ... stored as removedHead
    return removedHead.data;
  }

  // method for printing the whole linked list and all its nodes out
  printList(){
    let currentNode = this.head;
    let output = '<head> ';

    while(currentNode !== null){
      output += currentNode.data + ' ';
      currentNode = currentNode.next;
    }

    output += '<tail>';
    console.log(output);
  }

  //  a recursive function can be defined as a routine that calls itself directly or indirectly
  // so what this does is basically, it takes 2 parameters( data => data or node we want to find and currentNode => the node we are currently at [note that first node will be head note as that is weher we start. currentNode will be however replaced with node next in line if it will not contain the data we are after])
  // So the method starts ffrom head node ... if the there is no head node in the linked list, the list is empty and therefore we cannot get any other value than null. The same thing goes if we go through all the list and will not find a node with data we are after -> the last node will have this.next pointer = null
  // if the node contains the data we are after we will return this node as that is the node we want
  // if however the node is not the last node or the list is empty, and the current node does not contain that data we want, we will call function itself recursively(calling the same function within function), changing the currentNode paramater as the nexNode directly to it(remember we have started with head node, it was the flase one and then we continue with next one with the same process)
  findNodeRecursively(data, currentNode = this.head){
    if(currentNode === null){
      return null;
    }
    else if(currentNode.data === data){
      return currentNode;
    }
    else{
      return this.findNodeRecursively(data, currentNode.next);
    }
  }

  // the second option is to look for the node by data provided iteratively
  findNodeIteratively(data){
    let currentNode = this.head;

    while(currentNode !== null){
      if(currentNode.data === data){
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }
}

module.exports = LinkedList;
