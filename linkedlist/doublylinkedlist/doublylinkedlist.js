// assignment: https://petlatkea.notion.site/datastruktur-Doubly-Linked-List-e00f99121e8c4130bb10e87ab2091c8c

export default class DoublyLinkedList {
  head = null;
  tail = null;

  // constructor(node) {
  //   this.head = node;
  //   this.tail = node;
  // }

  // ******************** metoder til data ***********************
  // - `addLast( data )` - tilføjer et element til slutningen af listen
  addLast(data) {
    const node = new Node(data);
    this.addNodeLast(node);
  }

  // - `addFirst( data )` - tilføjer et element til begyndelsen af listen
  addFirst(data) {
    const node = new Node(data);
    this.addNodeFirst(node);
  }

  // - `get( index )` - returnerer elementet på plads nummer *index*
  get(index) {
    const node = this.nodeAt(index);
    return node ? node.data : null;
  }

  // - `indexOf( data )` - finder plads nummer for det angivne element (payload)
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // - `insertAfter( index, data )` - indsætter et nyt element efter plads nummer *index*
  insertAfter(index, data) {
    const existingNode = this.nodeAt(index);
    if (!existingNode) return;
    const newNode = new Node(data);
    this.insertAfterNode(newNode, existingNode);
  }

  // - `insertBefore( index, data )` - indsætter et nyt element før plads nummer *index*
  insertBefore(index, data) {
    const existingNode = this.nodeAt(index);
    if (!existingNode) return;
    const newNode = new Node(data);
    this.insertBeforeNode(newNode, existingNode);
  }

  // - `first()` - returnerer det første element i listen
  first() {
    return this.head ? this.head.data : null;
  }

  // - `last()` - returnerer det sidste element i listen
  last() {
    return this.tail ? this.tail.data : null;
  }

  // - `remove( data )` - fjerner elementet fra listen (hvis det altså var der)
  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        this.removeNode(current);
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // - `removeIndex( index )` - fjerner elementet på det pågældende *index*
  removeIndex(index) {
    const node = this.nodeAt(index);
    if (node) this.removeNode(node);
  }

  // - `removeFirst()` - fjerner det første element i listen - og returnerer elementet
  removeFirst() {
    if (!this.head) return null;

    const oldHead = this.head;

    if (oldHead?.next) {
      this.head = oldHead.next;
      this.head.prev = null;
    } else {
      this.clear();
    }
    return oldHead;
  }

  // - `removeLast()` - fjerner det sidste element i listen - og returnerer elementet
  removeLast() {
    if (!this.tail) return null;

    const oldTail = this.tail;

    if (oldTail?.prev) {
      this.tail = oldTail.prev;
      this.tail.next = null;
    } else {
      this.clear();
    }
    return oldTail;
  }

  // ******************** metoder til nodes ***********************

  // - `addNodeLast( newNode )` - tilføjer en ny node til slutningen af listen
  addNodeLast(newNode) {
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // - `addNodeFirst( newNode )` - tilføjer en ny node i starten af listen
  addNodeFirst(newNode) {
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // - `insertAfterNode( newNode, existingNode )` - indsætter en ny node efter en eksisterende
  insertAfterNode(newNode, existingNode) {
    if (existingNode === this.tail) {
      this.addNodeLast(newNode);
    } else {
      const oldNext = existingNode.next;
      newNode.prev = existingNode;
      newNode.next = oldNext;
      oldNext.prev = newNode;
      existingNode.next = newNode;
    }
  }

  // - `insertBeforeNode( newNode, existingNode )` - indsætter en ny node før en eksisterende
  insertBeforeNode(newNode, existingNode) {
    if (existingNode === this.head) {
      this.addNodeFirst(newNode);
    } else {
      const oldPrev = existingNode.prev;
      newNode.prev = oldPrev;
      newNode.next = existingNode;
      oldPrev.next = newNode;
      existingNode.prev = newNode;
    }
  }

  // - `removeNode( existingNode )` - fjerner en eksisterende node fra listen
  removeNode(existingNode) {
    if (!existingNode) return console.error("can't remove node: node doesn't exist");
    ;

    if (existingNode === this.head) {
      this.removeFirst();
    } else if (existingNode === this.tail) {
      this.removeLast();
    } else {
      const oldPrev = existingNode.prev;
      const oldNext = existingNode.next;

      if (oldPrev) oldPrev.next = oldNext;
      if (oldNext) oldNext.prev = oldPrev;
    }
  }

  // - `nodeAt( index )` - returnerer noden på plads nummer *index*
  nodeAt(index) {
    let current = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  // - `swapNodes( nodeA, nodeB )` - bytter om på to nodes pladser i listen
  // swapNodes(nodeA, nodeB) {
  //   if (nodeA === nodeB) return;

  //   const nodeAdata = nodeA.data;
  //   nodeA.data = nodeB.data;
  //   nodeB.data = nodeAdata;
  // }

  swapNodes(nodeA, nodeB) {
    // If nodeA and nodeB are the same
    if (nodeA === nodeB) return;

    const prevA = nodeA.prev;
    const nextA = nodeA.next;
    const prevB = nodeB.prev;
    const nextB = nodeB.next;

    // if nodes are next to each other
    if (nodeA.next === nodeB) {
      // if nodeA is just before nodeB
      nodeA.next = nextB;
      nodeA.prev = nodeB;
      nodeB.next = nodeA;
      nodeB.prev = prevA;
      if (nextB) nextB.prev = nodeA;
      if (prevA) prevA.next = nodeB;
    } else if (nodeB.next === nodeA) {
      // if nodeB is just before nodeA
      nodeB.next = nextA;
      nodeB.prev = nodeA;
      nodeA.next = nodeB;
      nodeA.prev = prevB;
      if (nextA) nextA.prev = nodeB;
      if (prevB) prevB.next = nodeA;
    } else {
      // if the nodes are not next to each other
      if (prevA) prevA.next = nodeB;
      if (nextA) nextA.prev = nodeB;
      if (prevB) prevB.next = nodeA;
      if (nextB) nextB.prev = nodeA;

      nodeA.next = nextB;
      nodeA.prev = prevB;
      nodeB.next = nextA;
      nodeB.prev = prevA;
    }

    // if any of the nodes are head or tail
    if (this.head === nodeA) {
      this.head = nodeB;
    } else if (this.head === nodeB) {
      this.head = nodeA;
    }

    if (this.tail === nodeA) {
      this.tail = nodeB;
    } else if (this.tail === nodeB) {
      this.tail = nodeA;
    }
  }

  // ******************** metoder til hele listen ***********************
  // - `clear()` - fjerner alle elementer fra listen
  clear() {
    this.head = null;
    this.tail = null;
  }

  // - `size()` - returnerer antallet af nodes i listen
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // - `dumpList( )` - udskriver hele listen i console
  dumpList() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    console.log(`
                Linked list
            ====================
            head: ${this.head.data}
            tail: ${this.tail.data}
            `);

    let current = this.head;
    while (current) {
      console.log(`
                Node: ${current.data}
                ---------------------
                prev: ${current.prev?.data}
                next: ${current.next?.data}
                `);
      current = current.next;
    }
  }
}

export class Node {
  data;
  next;
  prev;

  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
