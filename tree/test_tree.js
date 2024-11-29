// import { Tree, Node } from "./Tree.js";
const { Tree, Node } = require("./Tree");

// Test Tree

const rootNode2 = new Node(null, [], "root");
const childNodeA = new Node(null, [], "child1");
const childNodeB = new Node(null, [], "child2");
const grandChildNode = new Node(null, [], "grandchild1");

// Append children to root
rootNode2.appendChild(childNodeA);
rootNode2.appendChild(childNodeB);

// Append a grandchild to childNode1
childNodeA.appendChild(grandChildNode);

// Create the tree with the root node
const tree = new Tree(rootNode2);

// Dump the tree structure to the console
tree.dump();

// // Test Nodes
// // Create nodes
// const rootNode = new Node(null, [], "root");
// const childNode1 = new Node(null, [], "child1");
// const childNode2 = new Node(null, [], "child2");
// const newChildNode = new Node(null, [], "newChild");

// // Append children to root
// rootNode.appendChild(childNode1);
// rootNode.appendChild(childNode2);

// console.log("Root node after adding children:", rootNode);

// // Remove a child
// rootNode.removeChild(childNode1);

// console.log("Root node after removing child1:", rootNode);

// // Replace a child
// rootNode.replaceChild(newChildNode, childNode2);

// console.log("Root node after replacing child2 with newChild:", rootNode);
