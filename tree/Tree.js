class Tree {
  root = null;

  constructor(root) {
    this.root = root;
  }

  // - der udskriver hele træet i consollen.
  dump() {
    if (!this.root) {
      console.log("The tree is empty.");
      return;
    }

    console.log(`
                    Tree
            ====================
            Root: ${this.root.value}
            `);

    const printNode = (node, indent = "") => {
      console.log(`${indent}Node: ${node.value}`);
      console.log(`${indent}---------------------`);
      console.log(`${indent}Parent: ${node.parent ? node.parent.value : "None"}`);
      console.log(`${indent}Children: ${node.childNodes.length > 0 ? node.childNodes.map((child) => child.value).join(", ") : "None"}`);
      console.log(`${indent}---------------------`);
      console.log(`${indent}`);
      node.childNodes.forEach((child) => printNode(child, indent + "  "));
    };

    printNode(this.root);
  }

  // - der opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
  addValue(value) {
    const newNode = new Node(this.root, [], value);
    if (this.root) {
      this.root.appendChild(newNode);
    } else {
      this.root = newNode;
    }
  }

  // - der leder efter den givne value i træet, og returnerer den (første) Node der har den
  findValue(value) {
    if (!this.root) return null;

    // depth-first search helper function
    const search = (node) => {
      if (node.value === value) {
        return node;
      }
      for (let child of node.childNodes) {
        const result = search(child);
        if (result) {
          return result;
        }
      }
      return null;
    };

    return this.root ? search(this.root) : null;
  }

  // - der finder og fjerner Noden med den givne value fra træet
  removeValue(value) {
    const nodeToRemove = this.findValue(value);

    if (nodeToRemove) {
      if (nodeToRemove === this.root) {
        // if the root has children, remove children first
        this.root.removeDescendants();
        // if the node to remove is the root set root to null
        this.root = null;
      } else if (nodeToRemove.parent) {
        nodeToRemove.parent.removeChild(nodeToRemove);
      }
    }

    return nodeToRemove;
  }

  //
}

class Node {
  parent = null;
  childNodes = [];
  value = null;
  constructor(parent, childNodes, value) {
    this.parent = parent;
    this.childNodes = childNodes;
    this.value = value;
  }

  // - der returnerer den første i listen af childNodes
  firstChild() {
    return this.childNodes[0];
  }

  // - der returnerer den sidste i listen af childNodes
  lastChild() {
    return this.childNodes[this.childNodes.length - 1];
  }

  // - der fortæller hvorvidt den har childNodes eller ej
  hasChildNodes() {
    return this.childNodes.length > 0;
  }

  // - der tilføjer child til listen af children
  appendChild(child) {
    this.childNodes.push(child);
    child.parent = this;
  }

  // - der fjerner child fra listen af children
  removeChild(child) {
    if (child.hasChildNodes()) {
      child.removeDescendants();
    }

    // remove current child
    this.childNodes = this.childNodes.filter((node) => node !== child);
  }

  // Recursively remove all children of a child
  removeDescendants() {
    this.childNodes.forEach((child) => child.removeDescendants());
    this.childNodes = [];
  }

  // - der fjerner oldChild fra listen, og tilføjer newChild på dens plads
  replaceChild(newChild, oldChild) {
    const index = this.childNodes.findIndex((node) => node === oldChild);
    // checking if oldChild is in the list of cildNodes
    if (index > -1) {
      this.childNodes[index] = newChild;
      newChild.parent = this;
      if (oldChild.parent === this) {
        oldChild.parent = null; // remove parent from the old child
      }
    }
  }
}

// export { Tree, Node };

// for testing
module.exports = { Tree, Node };
