import DoublyLinkedList, { Node } from "./doublylinkedlist.js";

window.addEventListener("load", start);

function start() {
  console.log("Test is running");

  const nodes = createNodes();

  testAddNode(nodes);

  testAddData();

  testRemoveAndIndexOf();
  testInsertAfterAndBefore();
  testSwapNodes();
  testRemoveIndex();
  testGet();
  testFirstAndLast();
  testRemoveFirstAndLast();
  testClear();
  testSize();
}

function createNodes() {
  const node1 = new Node("C");
  const node2 = new Node("A");
  const node3 = new Node("R");
  const node4 = new Node("T");
  const node5 = new Node("S");

  node1.next = node2;
  node2.prev = node1;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  node4.next = node5;
  node5.prev = node4;

  return { node1, node2, node3, node4, node5 };
}

function testAddNode(nodes) {
  const list = new DoublyLinkedList();
  list.addNodeFirst(nodes.node2);
  list.addNodeFirst(nodes.node1);
  list.addNodeLast(nodes.node4);
  console.log("List 1: Add Node");
  list.dumpList();
}

function testAddData() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 2: Add Data");
  list.dumpList();
}

function testRemoveAndIndexOf() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 3: Before Removal");
  list.dumpList();

  console.log("Removing 'A':", list.remove("A"));
  console.log("List 3: After Removal");
  list.dumpList();

  console.log("Index of 'C':", list.indexOf("C"));
  console.log("Index of 'S':", list.indexOf("S"));
  console.log("Index of 'A':", list.indexOf("A"));
}

function testInsertAfterAndBefore() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 4: Before Insertions");
  list.dumpList();

  list.insertAfter(2, "X"); // adding "X" after index 2 --> "R"
  console.log("List 4: After Insert 'X' After Index 2");
  list.dumpList();

  list.insertBefore(3, "Y"); // adding "Y" before index 3 --> "T"
  console.log("List 4: After Insert 'Y' Before Index 3");
  list.dumpList();
}

function testSwapNodes() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 5: Before Swap");
  list.dumpList();

  const nodeA = list.nodeAt(1);
  const nodeB = list.nodeAt(3);
  list.swapNodes(nodeA, nodeB);
  console.log("List 5: After Swapping 'A' and 'T'");
  list.dumpList();
}

function testRemoveIndex() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 6: Before Removal by Index");
  list.dumpList();

  list.removeIndex(2);
  console.log("List 6: After Removal by Index 2");
  list.dumpList();
}

function testGet() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 7: Testing `get()`");
  console.log("Element at index 0:", list.get(0));
  console.log("Element at index 2:", list.get(2));
  console.log("Element at index 4:", list.get(4));
  console.log("Element at index 5:", list.get(5)); // <-- should be null
}

function testFirstAndLast() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 8: Testing `first()` and `last()`");
  console.log("First element:", list.first());
  console.log("Last element:", list.last());
}

function testRemoveFirstAndLast() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 9: Before Removal of First and Last");
  list.dumpList();

  console.log("Removing first element:", list.removeFirst().data);
  console.log("Removing last element:", list.removeLast().data);

  console.log("List 9: After Removal of First and Last");
  list.dumpList();
}

function testClear() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 10: Before Clear");
  list.dumpList();

  list.clear();

  console.log("List 10: After Clear");
  list.dumpList();
}


function testSize() {
  const list = new DoublyLinkedList();
  list.addLast("C");
  list.addLast("A");
  list.addLast("R");
  list.addLast("T");
  list.addLast("S");
  console.log("List 11: Testing `size()`");
  console.log("Size of list:", list.size());

  list.removeLast();
  console.log("Size of list after removeLast:", list.size());
}
