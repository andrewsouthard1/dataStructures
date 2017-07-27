function LinkedList(){
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  }

  this.head = function(){
    return head;
  }

  this.length = function(){
    return length;
  }

  this.add = function(element){
    var newNode = new Node(element);

    if(head === null){
      head = newNode;
    } else {
      var currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    length++;
  }

  this.remove = function(element){
    if(head == null){
      console.log("nothing to remove");
    } else {
      var currentNode = head;
      if(currentNode.element === element){
        head = currentNode.next;
      } else {
        while(currentNode.element
      }
      

    }
  }

  this.find = function(){}
}

console.log("Linked list connected");

// function Queue(){

// }