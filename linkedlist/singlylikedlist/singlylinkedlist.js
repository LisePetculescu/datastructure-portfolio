export default class SinglyLinkedList {
  head = null;

  //  add( data ) - der opretter en ny node, med link til data-objektet,
  //    og tilføjer den til listen
  add(data) {
    const node = new Node(data);
    //   console.log(node.data);

    node.next = this.head;
    this.head = node;
  }

  // remove( data ) - der finder en node med link til dét data-objekt,
  //  og fjerner noden.
  remove(data) {
    // Step 1: Find the node with the given data
    const nodeToRemove = this.getNodeWithData(data);

    // Step 2: Remove the node if it exists
    if (nodeToRemove !== null) {
      this.removeNode(nodeToRemove);
    }
  }

  // remove(data) {
  //   // hvis listen er tom og head er null, så stopper vi der
  //   if (this.head === null) {
  //     return;
  //   }

  //   // hvis det er head der skal fjernes,
  //   //    sættes head til at være den næste node.
  //   // hvis head var den eneste node tilbage, sættes head til null
  //   //    fordi listen er tom
  //   if (this.head.data === data) {
  //     this.head = this.head.next;
  //     return;
  //   }

  //   // hvis head ikke skal fjernes, loopes igennem resten af listen
  //   //    af nodes indtil den rigtig node er fundet.
  //   let node = this.head;
  //   while (node.next !== null) {
  //     if (node.next.data === data) {
  //       node.next = node.next.next;
  //       return;
  //     }
  //     node = node.next;
  //   }
  // }

  // getFirst() - der returnerer data i den første node i listen
  getFirst() {
    return this.head.data;
  }

  // getLast() - der returnerer data i den sidste node i listen (længst væk fra head)
  getLast() {
    let node = this.head;

    if (node === null) {
      return node;
    }

    while (node.next !== null) {
      node = node.next;
    }
    return node.data;
  }

  // getFirstNode() - der returnerer den første node i listen
  getFirstNode() {
    return this.head;
  }

  // getNextNode( node ) - der returnerer noden efter denne
  //   (eller null, hvis der ikke er nogen)
  getNextNode(node) {
    return node.next;
  }

  // getLastNode() - der returnerer den sidste node i listen
  getLastNode() {
    let node = this.head;

    if (node === null) {
      return node;
    }

    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  // getNodeWithData( data ) - der returnerer den node der linker til dette data-objekt
  getNodeWithData(data) {
    let node = this.head;

    while (node !== null) {
      if (node.data === data) {
        return node;
      }
      node = node.next;
    }

    return null;
  }

  // removeFirstNode() - der fjerner den første node fra listen
  removeFirstNode() {
    if (this.head === null) {
      return;
    }
    // head sættes til at være den næste node,
    //  hvis listen kun har en node, vil head blive null og listen er hermed tom
    this.head = this.head.next;
  }

  // removeLastNode() - der fjerner den sidste node fra listen
  removeLastNode() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let node = this.head;
    while (node.next.next !== null) {
      node = node.next;
    }
    node.next = null;
  }

  // removeNode( node ) - der fjerner dén node fra listen
  removeNode(node) {
    if (this.head === null) {
      return;
    }

    if (this.head === node) {
      this.head = this.head.next;
      return;
    }

    // når curentNode. next er den node vi vil fjerne,
    //  skal vi sætte currentNode.next til at være lig med noden efter
    //  den vi vil fjerne, som er currentNode.next.next
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next === node) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // `clear()` - der fjerner alle nodes fra listen, og sørger for at den er tom.
  clear() {
    if (this.head === null) {
      return;
    }

    this.head = null;
  }

  // `size()` - der returnerer antallet af nodes i listen
  size() {
    let count = 0;

    if (this.head === null) {
      return count;
    }

    let node = this.head;
    while (node !== null) {
      count++;
      node = node.next;
    }
    return count;
  }

  // `dumpList()` - der console.log’er alle data-elementer i listen
  dumpList() {
    let node = this.head;

    while (node != null) {
      console.log(node.data);

      node = node.next;
    }
  }
}

class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
