class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {}

  setTail(node) {}

  insertBefore(node, nodeToInsert) {}

  insertAfter(node, nodeToInsert) {}

  insertAtPosition(position, nodeToInsert) {}

  removeNodesWithValue(value) {}

  remove(node) {}

  containsNodeWithValue(value) {}
}
